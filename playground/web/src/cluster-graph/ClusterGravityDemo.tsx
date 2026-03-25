/**
 * Embeds the Cluster gravity graph (D3 + ForceGraph) from
 * https://github.com/angelcreative/Cluster — mock data path matches that repo’s `buildMockGraphData`.
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import ForceGraph from './ForceGraph';
import { buildMockGraphData } from './mockGraphData';
import type { GraphData, GraphNode } from './types';
import { COLORS, DEFAULT_GROUP_COUNT, getSegmentLabel } from './constants';
import { TitanButton, TitanDialog } from 'titan-compositions';

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

  const onNodeClick = useCallback((node: GraphNode) => {
    setSelectedNode(node);
  }, []);

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
        style={{
          width: '100%',
          minHeight: 360,
          border: '1px solid var(--divider)',
          borderRadius: 'var(--rounded-m)',
          background: 'var(--surface-0)',
          overflow: 'hidden',
        }}
      >
        <ForceGraph
          width={dims.width}
          height={dims.height}
          data={data}
          onNodeClick={onNodeClick}
          showLabels={showLabels}
          groupCount={groupCount}
        />
      </div>

      <TitanDialog
        isOpen={selectedNode != null}
        onOpenChange={(open) => {
          if (!open) setSelectedNode(null);
        }}
        aria-label={selectedNode ? `Profile: ${selectedNode.name}` : 'Profile'}
        closeButton="text"
        body={
          selectedNode ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 'var(--spacing-s)',
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: '50%',
                  padding: 4,
                  background: COLORS[selectedNode.group] ?? COLORS[0],
                }}
              >
                <img
                  src={selectedNode.avatarUrl}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--surface-0)',
                  }}
                />
              </div>
              <h2
                id="cluster-node-name"
                style={{
                  margin: 0,
                  fontSize: 'var(--font-size-xl)',
                  color: 'var(--copy-slot-title)',
                }}
              >
                {selectedNode.name}
              </h2>
              <span
                style={{
                  padding: 'var(--spacing-4xs) var(--spacing-s)',
                  borderRadius: 9999,
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  color: 'var(--text-on-color)',
                  background: COLORS[selectedNode.group] ?? COLORS[0],
                }}
              >
                {getSegmentLabel(selectedNode.group, groupCount)}
              </span>
              <p
                style={{
                  margin: 0,
                  textAlign: 'left',
                  color: 'var(--copy-slot-body)',
                  lineHeight: 1.5,
                  maxHeight: 120,
                  overflow: 'auto',
                }}
              >
                {selectedNode.bio || 'No description'}
              </p>
            </div>
          ) : null
        }
      />
    </div>
  );
}
