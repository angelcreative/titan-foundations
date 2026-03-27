/**
 * Playground wrapper around TitanClusterGraph using Cluster-like mock data.
 */
import { useState, useEffect, useRef } from 'react';
import { buildMockGraphData } from './mockGraphData';
import type { GraphData, GraphNode } from './types';
import { DEFAULT_GROUP_COUNT } from './constants';
import { TitanButton, TitanClusterGraph } from 'titan-compositions';

export function ClusterGravityDemo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 640, height: 420 });
  const [groupCount, setGroupCount] = useState(DEFAULT_GROUP_COUNT);
  const [showLabels, setShowLabels] = useState(true);
  const [data, setData] = useState<GraphData | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = Math.max(320, el.clientWidth);
      const h = Math.max(360, Math.min(560, Math.round(w * 0.55)));
      setDims({ width: w, height: h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (dims.width < 1 || dims.height < 1) return;
    setData(buildMockGraphData(groupCount, dims.width, dims.height));
  }, [groupCount, dims.width, dims.height]);

  if (!data) {
    return (
      <p className="text-secondary" style={{ margin: 0 }}>
        Loading graph…
      </p>
    );
  }

  return (
    <div style={{ display: 'grid', gap: 'var(--spacing-m)' }}>
      <p className="text-secondary" style={{ margin: 0 }}>
        Same D3 force simulation as{' '}
        <a
          href="https://github.com/angelcreative/Cluster"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--link-slot-color)' }}
        >
          angelcreative/Cluster
        </a>
        — mock profiles + links. Drag nodes; click for profile.
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--spacing-s)',
          alignItems: 'center',
        }}
      >
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2xs)',
            fontSize: 'var(--font-size-s)',
            color: 'var(--copy-slot-body)',
          }}
        >
          Segments ({groupCount})
          <input
            type="range"
            min={2}
            max={20}
            value={groupCount}
            onChange={(e) => setGroupCount(Number(e.target.value))}
            aria-label="Number of segments"
          />
        </label>
        <TitanButton variant="secondary" onPress={() => setShowLabels((v) => !v)}>
          {showLabels ? 'Hide labels' : 'Show labels'}
        </TitanButton>
      </div>
      <div
        ref={wrapRef}
        style={{ width: '100%' }}
      >
        <TitanClusterGraph
          data={data}
          height={dims.height}
          selectedNode={selectedNode}
          onSelectedNodeChange={setSelectedNode}
          showLabels={showLabels}
          groupCount={groupCount}
          withDetailsDialog
        />
      </div>
    </div>
  );
}
