export function healthCheck(node){
  return {
    node,
    status:"healthy",
    checkedAt:new Date().toISOString()
  };
}
