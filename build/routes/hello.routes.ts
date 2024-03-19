import { Router } from "express";

const helloRouter = Router();


helloRouter.get("/", ()=>{
    return { data: "Server is live!!"};
});

export default helloRouter