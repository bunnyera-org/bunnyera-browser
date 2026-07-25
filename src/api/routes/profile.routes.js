import { Router } from "express";
import { createProfile, listProfiles, deleteProfile } from "../../profile/profile.service.js";

const router = Router();

router.get("/", (req,res)=>{
  res.json(listProfiles());
});

router.post("/create",(req,res)=>{
  res.json(createProfile(req.body.profileId));
});

router.delete("/:id",(req,res)=>{
  res.json({
    success: deleteProfile(req.params.id)
  });
});

export default router;
