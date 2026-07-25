import { Router } from "express";
import { registerBrowser, stopBrowser, getBrowserStatus } from "../../browser/process.manager.js";

const router = Router();

router.get("/", (req,res)=>{
  res.json(getBrowserStatus());
});

router.post("/start",(req,res)=>{
  res.json(registerBrowser(req.body.profileId,{
    pid: process.pid
  }));
});

router.post("/stop",(req,res)=>{
  res.json(stopBrowser(req.body.profileId));
});

export default router;
