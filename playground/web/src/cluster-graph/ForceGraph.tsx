/**
 * Ported from https://github.com/angelcreative/Cluster — `components/ForceGraph.tsx`
 * D3 force simulation + sector clustering. Titan playground: no Tailwind; SVG text uses tokens.
 */
import { useEffect, useRef, useLayoutEffect } from 'react';
import * as d3 from 'd3';
import type { GraphNode, GraphLink, GroupCenter } from './types';
import { COLORS, GROUP_LABELS } from './constants';

interface ForceGraphProps {
  width: number;
  height: number;
  data: { nodes: GraphNode[]; links: GraphLink[] };
  onNodeClick: (node: GraphNode) => void;
  showLabels: boolean;
  groupCount: number;
  segmentLabels?: string[];
}

export default function ForceGraph({
  width,
  height,
  data,
  onNodeClick,
  showLabels,
  groupCount,
  segmentLabels,
}: ForceGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const onNodeClickRef = useRef(onNodeClick);
  const showLabelsRef = useRef(showLabels);

  useEffect(() => {
    onNodeClickRef.current = onNodeClick;
  }, [onNodeClick]);

  useLayoutEffect(() => {
    showLabelsRef.current = showLabels;
  }, [showLabels]);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const container = svg.select('.labels-container');
    if (container.empty()) return;
    container
      .transition()
      .duration(200)
      .style('opacity', showLabels ? 1 : 0)
      .style('pointer-events', showLabels ? 'all' : 'none');
  }, [showLabels]);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const layoutRadius = 100;
    const centerPoint = { x: width / 2, y: height / 2 };

    const labels = segmentLabels && segmentLabels.length >= groupCount ? segmentLabels : GROUP_LABELS;
    const groupFoci: GroupCenter[] = Array.from({ length: groupCount }, (_, i) => {
      const angle = (i * 2 * Math.PI) / groupCount - Math.PI / 2;
      return {
        x: centerPoint.x + layoutRadius * Math.cos(angle),
        y: centerPoint.y + layoutRadius * Math.sin(angle),
        label: labels[i] ?? `Segment ${i + 1}`,
        color: COLORS[i] ?? '#999',
      };
    });

    const simulation = d3
      .forceSimulation<GraphNode>(data.nodes)
      .alphaDecay(0.08)
      .velocityDecay(0.35)
      .alphaMin(0.001)
      .force(
        'link',
        d3
          .forceLink<GraphNode, GraphLink>(data.links)
          .id((d) => d.id)
          .strength((d) => (d.value === 1 ? 0.05 : 0.001)),
      )
      .force('charge', d3.forceManyBody().strength(-2))
      .force('collide', d3.forceCollide<GraphNode>((d) => d.radius + 1).strength(0.8))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.2))
      .force('radial', d3.forceRadial(0, width / 2, height / 2).strength(0.55))
      .force(
        'x',
        d3
          .forceX<GraphNode>((d) => (groupFoci[d.group] || groupFoci[0]).x)
          .strength(0.28),
      )
      .force(
        'y',
        d3
          .forceY<GraphNode>((d) => (groupFoci[d.group] || groupFoci[0]).y)
          .strength(0.28),
      );

    const link = svg
      .append('g')
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke', (d) => {
        const sourceNode =
          typeof d.source === 'object' ? d.source : data.nodes.find((n) => n.id === d.source);
        if (!sourceNode) return '#ccc';
        return COLORS[sourceNode.group] || COLORS[0];
      })
      .attr('stroke-opacity', 0.15)
      .attr('stroke-width', 0.5);

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(data.nodes)
      .join('circle')
      .attr('r', (d) => d.radius)
      .attr('fill', (d) => COLORS[d.group] || COLORS[0])
      .attr('stroke', '#fff')
      .attr('stroke-width', 0.5)
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        event.stopPropagation();
        simulation.stop();
        onNodeClickRef.current(d);
      })
      // D3 drag typings are stricter than d3.select join() selection; runtime is correct.
      .call(
        d3
          .drag<SVGCircleElement, GraphNode>()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended) as never,
      );

    node
      .on('mouseover', function () {
        d3.select(this).transition().duration(200).attr('stroke-width', 2).attr('stroke', '#333');
      })
      .on('mouseout', function () {
        d3.select(this).transition().duration(200).attr('stroke-width', 0.5).attr('stroke', '#fff');
      });

    const labelGroup = svg
      .append('g')
      .attr('class', 'labels-container')
      .style('opacity', 0)
      .style('pointer-events', 'none')
      .selectAll('g')
      .data(groupFoci)
      .join('g')
      .style('cursor', 'pointer');

    labelGroup
      .append('rect')
      .attr('rx', 14)
      .attr('ry', 14)
      .attr('fill', 'var(--surface-0, #fff)')
      .attr('stroke', (d) => d.color)
      .attr('stroke-width', 2);

    labelGroup
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('font-family', 'var(--font-audiense), sans-serif')
      .style('font-size', '12px')
      .style('font-weight', '600')
      .attr('fill', 'var(--copy-slot-title)')
      .style('pointer-events', 'none')
      .text((d) => d.label);

    labelGroup.each(function () {
      const g = d3.select(this);
      const text = g.select('text').node() as SVGTextElement;
      if (text) {
        const bbox = text.getBBox();
        const paddingX = 28;
        const paddingY = 16;
        g.select('rect')
          .attr('x', -bbox.width / 2 - paddingX / 2)
          .attr('y', -bbox.height / 2 - paddingY / 2)
          .attr('width', bbox.width + paddingX)
          .attr('height', bbox.height + paddingY);
      }
    });

    const MIN_LABEL_GAP = 92;
    const ATTRACTION = 0.22;
    const REPULSION_STRENGTH = 2.8;
    const MAX_DIST_FROM_ANCHOR = 90;
    const ANCHOR_NUDGE = 1.15;
    let labelPositions: { x: number; y: number }[] = [];

    const clampToAnchor = (
      pos: { x: number; y: number },
      anchor: { x: number; y: number },
      maxDist: number,
    ) => {
      const dx = pos.x - anchor.x;
      const dy = pos.y - anchor.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= maxDist || dist < 1e-6) return pos;
      const scale = maxDist / dist;
      return { x: anchor.x + dx * scale, y: anchor.y + dy * scale };
    };

    const doLabelTick = (): number => {
      const centroids: { [key: number]: { x: number; y: number; count: number } } = {};
      data.nodes.forEach((n) => {
        if (n.x === undefined || n.y === undefined) return;
        if (!centroids[n.group]) centroids[n.group] = { x: 0, y: 0, count: 0 };
        centroids[n.group].x += n.x;
        centroids[n.group].y += n.y;
        centroids[n.group].count += 1;
      });
      const anchors: { x: number; y: number }[] = [];
      for (let i = 0; i < groupCount; i++) {
        const c = centroids[i];
        if (c && c.count > 0) {
          const cx = c.x / c.count;
          const cy = c.y / c.count;
          const dx = cx - centerPoint.x;
          const dy = cy - centerPoint.y;
          anchors[i] = {
            x: centerPoint.x + dx * ANCHOR_NUDGE,
            y: centerPoint.y + dy * ANCHOR_NUDGE,
          };
        } else {
          anchors[i] = { x: (groupFoci[i] || groupFoci[0]).x, y: (groupFoci[i] || groupFoci[0]).y };
        }
      }
      if (labelPositions.length !== groupCount) labelPositions = anchors.map((a) => ({ ...a }));
      let maxMove = 0;
      for (let i = 0; i < groupCount; i++) {
        const anchor = anchors[i];
        let px = labelPositions[i].x;
        let py = labelPositions[i].y;
        const prevX = px;
        const prevY = py;
        px += (anchor.x - px) * ATTRACTION;
        py += (anchor.y - py) * ATTRACTION;
        for (let j = 0; j < groupCount; j++) {
          if (j === i) continue;
          const qx = labelPositions[j].x;
          const qy = labelPositions[j].y;
          const dx = px - qx;
          const dy = py - qy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1e-6;
          if (dist < MIN_LABEL_GAP) {
            const overlap = MIN_LABEL_GAP - dist;
            const nx = dx / dist;
            const ny = dy / dist;
            px += nx * overlap * REPULSION_STRENGTH;
            py += ny * overlap * REPULSION_STRENGTH;
          }
        }
        const clamped = clampToAnchor({ x: px, y: py }, anchor, MAX_DIST_FROM_ANCHOR);
        labelPositions[i] = clamped;
        maxMove = Math.max(maxMove, Math.abs(clamped.x - prevX), Math.abs(clamped.y - prevY));
      }
      return maxMove;
    };

    const applyLabelTransforms = () => {
      labelGroup.attr(
        'transform',
        (_d, i) =>
          `translate(${labelPositions[i]?.x ?? centerPoint.x}, ${labelPositions[i]?.y ?? centerPoint.y})`,
      );
    };

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => (d.source as GraphNode).x!)
        .attr('y1', (d) => (d.source as GraphNode).y!)
        .attr('x2', (d) => (d.target as GraphNode).x!)
        .attr('y2', (d) => (d.target as GraphNode).y!);
      node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!);
      doLabelTick();
      applyLabelTransforms();
    });

    const labelsContainer = svg.select<SVGGElement>('.labels-container');
    simulation.on('end', () => {
      let frameCount = 0;
      let stableCount = 0;
      const STABLE_THRESHOLD = 0.4;
      const MAX_FRAMES = 80;
      const runSettling = () => {
        const maxMove = doLabelTick();
        applyLabelTransforms();
        frameCount++;
        if (maxMove < STABLE_THRESHOLD) stableCount++;
        else stableCount = 0;
        if (stableCount >= 3 || frameCount >= MAX_FRAMES) {
          labelsContainer
            .transition()
            .duration(200)
            .style('opacity', showLabelsRef.current ? 1 : 0)
            .style('pointer-events', showLabelsRef.current ? 'all' : 'none');
          simulation.stop();
          return;
        }
        requestAnimationFrame(runSettling);
      };
      requestAnimationFrame(runSettling);
    });

    function dragstarted(_event: d3.D3DragEvent<SVGCircleElement, GraphNode, GraphNode>, d: GraphNode) {
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: d3.D3DragEvent<SVGCircleElement, GraphNode, GraphNode>, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGCircleElement, GraphNode, GraphNode>, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      simulation.stop();
    }

    return () => {
      simulation.stop();
    };
  }, [width, height, data, groupCount, segmentLabels]);

  return <svg ref={svgRef} width={width} height={height} style={{ display: 'block', width: '100%', height: '100%' }} />;
}
