export function uploadProfile(profileId){
  return {
    profileId,
    action:"upload",
    status:"queued"
  };
}

export function downloadProfile(profileId){
  return {
    profileId,
    action:"download",
    status:"queued"
  };
}
