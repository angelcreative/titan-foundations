export interface TitanClusterNode {
  id: string
  group: number
  radius: number
  x?: number
  y?: number
  vx?: number
  vy?: number
  fx?: number | null
  fy?: number | null
  index?: number
  name: string
  bio: string
  avatarUrl: string
  affinity?: number
  uniqueness?: number
  times_more_likely?: number
}

export interface TitanClusterLink {
  value: number
  source: string | TitanClusterNode
  target: string | TitanClusterNode
}

export interface TitanClusterGroupCenter {
  x: number
  y: number
  label: string
  color: string
}

export interface TitanClusterData {
  nodes: TitanClusterNode[]
  links: TitanClusterLink[]
}
