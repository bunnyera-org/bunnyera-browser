export function processTask(task){
  return {
    ...task,
    status:"completed"
  };
}
