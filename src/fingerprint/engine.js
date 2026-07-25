export function generateFingerprint(options = {}) {
  return {
    userAgent: options.userAgent || "BunnyEra-Chromium",
    platform: options.platform || "Windows",
    language: options.language || "en-US",
    timezone: options.timezone || "UTC",
    screen: options.screen || {
      width: 1920,
      height: 1080
    }
  };
}

export function saveFingerprint(profileId, fingerprint) {
  return {
    profileId,
    fingerprint,
    updatedAt: new Date().toISOString()
  };
}
