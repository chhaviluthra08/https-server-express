import express from "express";
import https from "https";
import fs from "fs";
import path from "path";

const app = express();

// ssl options (use the certs you generated earlier)

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

//routes - normal
app.get("/", (req,res)=>{
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
});
//routes - docs
app.get("/docs", (req,res)=>{
    res.sendFile(path.join(process.cwd(), "public", "docs.html"));
});

https.createServer(options, app).listen(3000, ()=>{
    console.log("Express HTTPS server running at https://localhost:3000/");
});
