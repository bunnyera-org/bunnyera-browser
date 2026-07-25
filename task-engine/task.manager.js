const tasks=[];

export function createTask(task){
  tasks.push({
    ...task,
    status:"pending"
  });
  return task;
}

export function getTasks(){
  return tasks;
}
