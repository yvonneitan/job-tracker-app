import express from "express";
import cors from "cors";
import homePageRoutes from "./routes/homepage.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// import photos
app.use(express.static("public"));
console.log("attempt 1");
app.use("/", homePageRoutes);
app.use("/data", homePageRoutes);

const PORT = process.env.PORT;

app.get("/", (_req, _res) => {
  return _res.status(200).send(200);
});
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
