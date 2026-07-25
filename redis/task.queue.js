const queue = [];

export function pushTask(task){
  queue.push({
    ...task,
    status:"queued"
  });
}

export function getQueue(){
  return queue;
}
