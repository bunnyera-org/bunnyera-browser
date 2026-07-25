const proxyStore = new Map();

export function bindProxy(profileId, proxyConfig) {
  proxyStore.set(profileId, proxyConfig);
  return {
    profileId,
    proxy: proxyConfig,
    status: "saved"
  };
}

export function getProxy(profileId) {
  return proxyStore.get(profileId) || null;
}

export function listProxy() {
  return Array.from(proxyStore.entries());
}
