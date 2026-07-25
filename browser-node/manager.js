const nodes=[];

export function registerNode(node){
  nodes.push({
    ...node,
    status:"online"
  });
  return node;
}

export function listNodes(){
  return nodes;
}
