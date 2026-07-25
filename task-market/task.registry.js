const tasks=[];

export function registerTask(task){
  tasks.push(task);
}

export function listTasks(){
  return tasks;
}
