import type { GraphData, GraphLink, GraphNode } from './types';
import { GROUP_LABELS, NODE_COUNT } from './constants';

const NAMES_FIRST = [
  'Alex',
  'Jordan',
  'Taylor',
  'Casey',
  'Morgan',
  'Riley',
  'Avery',
  'Quinn',
  'Skyler',
  'Charlie',
];
const NAMES_LAST = [
  'Smith',
  'Johnson',
  'Williams',
  'Brown',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
];
const BIOS_TEMPLATES = [
  'Passionate about {topic} and building communities.',
  'Digital creator focused on {topic}.',
  'Sharing my journey in {topic}.',
  'Professional expert in {topic}.',
  '{topic} enthusiast and storyteller.',
];

/** Same mock generator as `App.tsx` in github.com/angelcreative/Cluster */
export function buildMockGraphData(
  groupCount: number,
  width: number,
  height: number,
): GraphData {
  const nodes: GraphNode[] = [];
  const links: GraphLink[] = [];
  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < NODE_COUNT; i++) {
    const group = Math.floor(Math.random() * groupCount);
    const groupName = (GROUP_LABELS[group] ?? `Segment ${group}`).split(' ')[0];
    const first = NAMES_FIRST[Math.floor(Math.random() * NAMES_FIRST.length)];
    const last = NAMES_LAST[Math.floor(Math.random() * NAMES_LAST.length)];
    const angle = Math.random() * 2 * Math.PI;
    const r = Math.sqrt(Math.random()) * 140;
    nodes.push({
      id: `node-${i}`,
      group,
      radius: Math.random() > 0.92 ? 12 + Math.random() * 10 : 5 + Math.random() * 5,
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
      name: `${first} ${last}`,
      bio: BIOS_TEMPLATES[Math.floor(Math.random() * BIOS_TEMPLATES.length)].replace(
        '{topic}',
        groupName,
      ),
      avatarUrl: `https://i.pravatar.cc/150?u=${i}`,
    });
  }

  nodes.forEach((source) => {
    const sameGroup = nodes.filter((n) => n.group === source.group && n.id !== source.id);
    const internalConnections = Math.floor(Math.random() * 2) + 1;
    for (let j = 0; j < internalConnections; j++) {
      if (sameGroup.length === 0) break;
      const target = sameGroup[Math.floor(Math.random() * sameGroup.length)];
      links.push({ source: source.id, target: target.id, value: 1 });
    }
  });
  nodes.forEach((source) => {
    if (Math.random() > 0.9) {
      const differentGroupNodes = nodes.filter((n) => n.group !== source.group);
      if (differentGroupNodes.length > 0) {
        const target = differentGroupNodes[Math.floor(Math.random() * differentGroupNodes.length)];
        links.push({ source: source.id, target: target.id, value: 0.5 });
      }
    }
  });

  return { nodes, links };
}
