export function recordUsage(data){
  return {
    ...data,
    timestamp:new Date().toISOString()
  };
}
