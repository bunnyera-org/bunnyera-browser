export function checkQuota(tenant){
  return {
    tenant,
    browsers:10,
    status:"available"
  };
}
