import { Router } from "express";
import Song from "../models/Song";


const router = Router();

router.get("/", (req,res)=>{

    res.render("index");
});
router.get("/tabla",async (req,res)=>{

    const songs = await Song.find().lean()
    res.render("tabla",{songs:songs});
});

router.post("/Songs/add",async (req,res)=>{
    const song = Song(req.body)
    //console.log(songsaved);
    await song.save()
    
    res.redirect("/")
});

export default router;