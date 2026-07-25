const queue=[];

export function addTask(task){
  queue.push({
    ...task,
    status:"queued"
  });
}

export function getTasks(){
  return queue;
}
