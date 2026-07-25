import {Router} from "express";
import {bindProxy,listProxy} from "../../proxy/manager.js";

const router=Router();

router.get("/",(req,res)=>{
  res.json(listProxy());
});

router.post("/bind",(req,res)=>{
  res.json(bindProxy(
    req.body.profileId,
    req.body.proxy
  ));
});

export default router;
