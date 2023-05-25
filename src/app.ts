import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("./public"));

app.get("/", (req: Request, res: Response) => {
  res.sendFile("./");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
