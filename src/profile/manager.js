import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

const ROOT = path.resolve("profiles");

export function createProfile(name) {
  const id = name || `PROFILE-${randomUUID().slice(0,8)}`;
  const dir = path.join(ROOT, id);
  fs.mkdirSync(path.join(dir, "Cookies"), {recursive:true});
  fs.mkdirSync(path.join(dir, "Cache"), {recursive:true});
  fs.mkdirSync(path.join(dir, "Local Storage"), {recursive:true});
  fs.writeFileSync(path.join(dir,"profile.json"), JSON.stringify({
    id,
    createdAt:new Date().toISOString()
  }, null, 2));
  return {id, dir};
}

export function listProfiles(){
  if(!fs.existsSync(ROOT)) return [];
  return fs.readdirSync(ROOT).filter(x=>fs.statSync(path.join(ROOT,x)).isDirectory());
}
