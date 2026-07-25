export async function executeAction(action){
  return {
    action,
    status:"queued"
  };
}
