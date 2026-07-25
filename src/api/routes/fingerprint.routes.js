import {Router} from "express";
import {generateFingerprint, saveFingerprint} from "../../fingerprint/engine.js";

const router = Router();

router.post("/generate",(req,res)=>{
  res.json({
    success:true,
    data:generateFingerprint(req.body)
  });
});

router.post("/save",(req,res)=>{
  res.json({
    success:true,
    data:saveFingerprint(
      req.body.profileId,
      req.body.fingerprint
    )
  });
});

export default router;
