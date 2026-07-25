const workers = [];

export function registerWorker(worker){
  workers.push({
    ...worker,
    status:"online"
  });

  return worker;
}

export function listWorkers(){
  return workers;
}
