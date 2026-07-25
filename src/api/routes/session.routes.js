import { Router } from "express";
import {startSession,stopSession,getSessions} from "../../session/session.manager.js";

const router=Router();

router.get("/",(req,res)=>{
 res.json(getSessions());
});

router.post("/start",(req,res)=>{
 res.json(startSession(req.body.profileId));
});

router.post("/stop",(req,res)=>{
 res.json(stopSession(req.body.profileId));
});

export default router;
