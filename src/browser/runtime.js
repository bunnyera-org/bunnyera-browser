import { chromium } from "playwright";
import path from "path";

const runtimes = new Map();

export async function startRuntime(profileId) {
  const profilePath = path.resolve("profiles", profileId);
  const context = await chromium.launchPersistentContext(profilePath, {
    headless: false,
    viewport: { width: 1280, height: 900 }
  });

  runtimes.set(profileId, {
    profileId,
    status: "running",
    startedAt: new Date().toISOString(),
    context
  });

  return {
    profileId,
    status: "running"
  };
}

export async function stopRuntime(profileId) {
  const runtime = runtimes.get(profileId);

  if (!runtime) {
    return { profileId, status: "not_running" };
  }

  await runtime.context.close();
  runtimes.delete(profileId);

  return { profileId, status: "stopped" };
}

export function getRuntimeStatus() {
  return Array.from(runtimes.values()).map(item => ({
    profileId: item.profileId,
    status: item.status,
    startedAt: item.startedAt
  }));
}
