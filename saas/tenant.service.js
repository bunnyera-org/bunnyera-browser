const tenants=[];

export function createTenant(name){
  const tenant={
    name,
    createdAt:new Date().toISOString()
  };

  tenants.push(tenant);
  return tenant;
}

export function listTenants(){
  return tenants;
}
