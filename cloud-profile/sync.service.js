export function syncProfile(profileId){
  return {
    profileId,
    synced:true,
    syncedAt:new Date().toISOString()
  };
}
