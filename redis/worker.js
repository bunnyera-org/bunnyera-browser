const queue=[];

export function push(job){
  queue.push({
    ...job,
    status:"waiting"
  });
}

export function workerRun(){
  const job=queue.shift();

  if(!job){
    return null;
  }

  job.status="running";
  return job;
}
