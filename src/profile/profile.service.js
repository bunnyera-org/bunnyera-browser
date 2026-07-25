const profiles = new Map();

export function createProfile(profileId) {
  const profile = {
    id: profileId,
    createdAt: new Date().toISOString(),
    status: "stopped"
  };

  profiles.set(profileId, profile);
  return profile;
}

export function listProfiles() {
  return Array.from(profiles.values());
}

export function deleteProfile(profileId) {
  return profiles.delete(profileId);
}
