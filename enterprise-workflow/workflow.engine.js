export function runWorkflow(workflow){
  return {
    workflow,
    status:"running",
    startedAt:new Date().toISOString()
  };
}
