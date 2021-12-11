import express, { response } from "express";

const app = express();

app.use(express.json());
app.post("/users", (req, res) => {
  const {username , password}  = req.body;
  if (!password || !username){
    res.sendStatus(400)
    return
  }
  //res.sendStatus("200");
  res.send({userId:0});
});


export default app;
