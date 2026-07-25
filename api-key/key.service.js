export function createApiKey(){
  return "BE_live_" + Math.random().toString(36).substring(2);
}
