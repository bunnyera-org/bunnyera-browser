const nodes = new Map();

export function registerNode(node){
  nodes.set(node.id, {
    ...node,
    status:"online",
    createdAt:new Date().toISOString()
  });
  return nodes.get(node.id);
}

export function listNodes(){
  return Array.from(nodes.values());
}
