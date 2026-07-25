const jobs=[];

export function scheduleAgentJob(job){
  jobs.push({
    ...job,
    status:"queued",
    createdAt:new Date().toISOString()
  });

  return job;
}

export function listJobs(){
  return jobs;
}
