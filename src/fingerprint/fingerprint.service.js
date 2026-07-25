const fingerprints = new Map();

export function updateFingerprint(profileId, data) {
  fingerprints.set(profileId, {
    profileId,
    ...data,
    updatedAt: new Date().toISOString()
  });

  return fingerprints.get(profileId);
}

export function getFingerprint(profileId) {
  return fingerprints.get(profileId) || null;
}
