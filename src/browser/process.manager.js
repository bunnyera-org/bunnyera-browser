const processes = new Map();

export function registerBrowser(profileId, data) {
  processes.set(profileId, {
    profileId,
    status: "running",
    pid: data?.pid || null,
    startedAt: new Date().toISOString()
  });
  return processes.get(profileId);
}

export function stopBrowser(profileId) {
  const item = processes.get(profileId);
  if (!item) {
    return { profileId, status: "not_found" };
  }

  item.status = "stopped";
  item.stoppedAt = new Date().toISOString();
  return item;
}

export function getBrowserStatus() {
  return Array.from(processes.values());
}
