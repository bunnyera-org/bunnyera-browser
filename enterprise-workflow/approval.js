export function requestApproval(action){
  return {
    action,
    status:"pending_approval"
  };
}
