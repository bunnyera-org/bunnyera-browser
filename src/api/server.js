import express from "express";
import {createProfile,listProfiles} from "../profile/manager.js";

const app=express();
app.use(express.json());

app.get("/api/profiles",(req,res)=>{
 res.json(listProfiles());
});

app.post("/api/profiles",(req,res)=>{
 res.json(createProfile(req.body.name));
});

app.listen(8080,()=>console.log("BunnyEra Browser API :8080"));
