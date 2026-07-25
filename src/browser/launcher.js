import { chromium } from "playwright";
import path from "path";

export async function launchBrowser(profileId){
  const userData = path.resolve("profiles", profileId);
  return chromium.launchPersistentContext(userData,{
    headless:false,
    viewport:{width:1280,height:900}
  });
}
