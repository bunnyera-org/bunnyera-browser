import { Router } from "express";
import { createProfile, listProfiles } from "../../profile/manager.js";

const router = Router();

router.get("/", (req,res)=>{
  res.json({
    success:true,
    profiles:listProfiles()
  });
});

router.post("/create",(req,res)=>{
  const result=createProfile(req.body.name);
  res.json({
    success:true,
    profile:result
  });
});

export default router;
