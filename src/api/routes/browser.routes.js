import { Router } from "express";
import { startRuntime, stopRuntime, getRuntimeStatus } from "../../browser/runtime.js";

const router = Router();

router.get("/", (req,res)=>res.json(getRuntimeStatus()));

router.post("/start", async (req,res)=>{
  res.json(await startRuntime(req.body.profileId));
});

router.post("/stop", async (req,res)=>{
  res.json(await stopRuntime(req.body.profileId));
});

export default router;
