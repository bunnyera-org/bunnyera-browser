export function recordUsage(data){
  return {
    ...data,
    recordedAt:new Date().toISOString()
  };
}
