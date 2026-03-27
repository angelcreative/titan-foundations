import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { TitanButton } from './TitanButton'
import { TitanDialog } from './TitanDialog'
import {
  TITAN_CLUSTER_COLORS,
  TITAN_CLUSTER_DEFAULT_GROUP_COUNT,
  getTitanClusterSegmentLabel,
} from './cluster/constants'
import { TitanClusterGraphCanvas } from './cluster/TitanClusterGraphCanvas'
import type { TitanClusterData, TitanClusterNode } from './cluster/types'

export interface TitanClusterGraphProps {
  data: TitanClusterData
  height?: number
  minWidth?: number
  showLabels?: boolean
  segmentLabels?: string[]
  groupCount?: number
  selectedNode?: TitanClusterNode | null
  defaultSelectedNode?: TitanClusterNode | null
  onSelectedNodeChange?: (node: TitanClusterNode | null) => void
  withDetailsDialog?: boolean
  emptyState?: string
  className?: string
  style?: CSSProperties
}

export function TitanClusterGraph({
  data,
  height = 420,
  minWidth = 320,
  showLabels = true,
  segmentLabels,
  groupCount,
  selectedNode: controlledSelectedNode,
  defaultSelectedNode = null,
  onSelectedNodeChange,
  withDetailsDialog = true,
  emptyState = 'No graph data available.',
  className,
  style,
}: TitanClusterGraphProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(minWidth)
  const [uncontrolledSelectedNode, setUncontrolledSelectedNode] =
    useState<TitanClusterNode | null>(defaultSelectedNode)

  const isControlled = controlledSelectedNode !== undefined
  const selectedNode = isControlled ? controlledSelectedNode : uncontrolledSelectedNode

  const computedGroupCount = useMemo(() => {
    if (groupCount !== undefined) return groupCount
    if (data.nodes.length === 0) return TITAN_CLUSTER_DEFAULT_GROUP_COUNT
    return Math.max(...data.nodes.map((node) => node.group)) + 1
  }, [groupCount, data.nodes])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const measure = () => {
      const nextWidth = Math.max(minWidth, el.clientWidth)
      setWidth(nextWidth)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [minWidth])

  const setSelectedNode = (node: TitanClusterNode | null) => {
    if (!isControlled) setUncontrolledSelectedNode(node)
    onSelectedNodeChange?.(node)
  }

  if (data.nodes.length === 0) {
    return (
      <div className={className} style={style}>
        <p className="text-secondary" style={{ margin: 0 }}>
          {emptyState}
        </p>
      </div>
    )
  }

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{
        width: '100%',
        minHeight: Math.max(280, height),
        border: '1px solid var(--divider)',
        borderRadius: 'var(--rounded-m)',
        background: 'var(--surface-0)',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div style={{ width: '100%', height }}>
        <TitanClusterGraphCanvas
          width={width}
          height={height}
          data={data}
          onNodeClick={(node) => setSelectedNode(node)}
          showLabels={showLabels}
          groupCount={computedGroupCount}
          segmentLabels={segmentLabels}
        />
      </div>

      {withDetailsDialog && (
        <TitanDialog
          isOpen={selectedNode != null}
          onOpenChange={(open) => {
            if (!open) setSelectedNode(null)
          }}
          aria-label={selectedNode ? `Profile: ${selectedNode.name}` : 'Profile'}
          closeButton="none"
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
                    alignSelf: 'stretch',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: 'calc(-1 * var(--spacing-3xs))',
                  }}
                >
                  <TitanButton variant="secondary" onPress={() => setSelectedNode(null)}>
                    Close
                  </TitanButton>
                </div>
                <div
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: '50%',
                    padding: 4,
                    background: TITAN_CLUSTER_COLORS[selectedNode.group] ?? TITAN_CLUSTER_COLORS[0],
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
                    display: 'inline-block',
                    padding: '8px 14px',
                    borderRadius: 14,
                    fontSize: '12px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-audiense), sans-serif',
                    lineHeight: 1.2,
                    color: 'var(--copy-slot-title)',
                    background: 'var(--surface-0)',
                    border: `2px solid ${TITAN_CLUSTER_COLORS[selectedNode.group] ?? TITAN_CLUSTER_COLORS[0]}`,
                    boxSizing: 'border-box',
                  }}
                >
                  {getTitanClusterSegmentLabel(
                    selectedNode.group,
                    computedGroupCount,
                    segmentLabels,
                  )}
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
      )}
    </div>
  )
}
