const workflows=[];

export function createWorkflow(data){
  workflows.push(data);
  return data;
}

export function listWorkflows(){
  return workflows;
}
