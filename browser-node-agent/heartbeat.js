export function heartbeat(node){
  return {
    node,
    status:"online",
    time:new Date().toISOString()
  };
}
