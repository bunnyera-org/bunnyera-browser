export function scaleNodes(clusterId, replicas){
  return {
    clusterId,
    replicas,
    action: "scale"
  };
}
