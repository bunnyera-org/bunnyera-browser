const tasks=[];

export function addTask(task){
  tasks.push({
    ...task,
    createdAt:new Date().toISOString()
  });
  return tasks;
}

export function listTasks(){
  return tasks;
}
