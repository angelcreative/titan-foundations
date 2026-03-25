/** Graph types (aligned with github.com/angelcreative/Cluster `types.ts`, without coupling to d3 types). */
export interface GraphNode {
  id: string;
  group: number;
  radius: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  index?: number;
  name: string;
  bio: string;
  avatarUrl: string;
  affinity?: number;
  uniqueness?: number;
  times_more_likely?: number;
}

export interface GraphLink {
  value: number;
  source: string | GraphNode;
  target: string | GraphNode;
}

export interface GroupCenter {
  x: number;
  y: number;
  label: string;
  color: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
