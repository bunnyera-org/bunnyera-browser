const queue = [];

export function addJob(job){
  queue.push({
    ...job,
    status:"pending"
  });
}

export function runNextJob(){
  const job = queue.shift();

  if(!job){
    return null;
  }

  job.status = "running";
  return job;
}
