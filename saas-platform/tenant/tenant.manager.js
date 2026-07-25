const tenants = [];

export function createTenant(name){
  const tenant = {
    id: Date.now(),
    name,
    createdAt: new Date().toISOString()
  };

  tenants.push(tenant);
  return tenant;
}

export function listTenants(){
  return tenants;
}
