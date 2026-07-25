export function sendCommand(node, command){
  return {
    node,
    command,
    status:"sent"
  };
}
