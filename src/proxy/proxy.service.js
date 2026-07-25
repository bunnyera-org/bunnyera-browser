const proxies = new Map();

export function setProxy(profileId, proxy) {
  proxies.set(profileId, {
    profileId,
    proxy,
    updatedAt: new Date().toISOString()
  });
  return proxies.get(profileId);
}

export function getProxy(profileId) {
  return proxies.get(profileId) || null;
}
