const sessions = new Map();

export function startSession(profileId){
  const session={
    profileId,
    status:"running",
    startedAt:new Date().toISOString()
  };
  sessions.set(profileId,session);
  return session;
}

export function stopSession(profileId){
  sessions.delete(profileId);
  return {profileId,status:"stopped"};
}

export function getSessions(){
  return Array.from(sessions.values());
}
