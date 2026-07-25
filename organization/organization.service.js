export function createOrganization(name){
  return {
    name,
    createdAt:new Date().toISOString()
  };
}
