import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

router.get("/data", (_req, _res) => {
  console.log("attempting get");
  // step 1: read from the json file
  const jobsData = fs.readFileSync("./data/data.json");
  // step 2: parse the json file
  const parsedJsonData = JSON.parse(jobsData);
  // step 3: return the read data back to the front end
  return _res.status(200).json(parsedJsonData);
});

router.post("/", (_req, _res) => {
  console.log("post api called");
  // check if the request body is present in the POST request
  if (Object.keys(_req.body).length === 0) {
    return _res.status(400).json({ message: "Request body is not present" });
  }

  // step 1: create a new cat Object
  const newJob = {
    id: uuidv4(), // this creates a random new id everytime
    job_title: _req.body.job_title,
    company: _req.body.company,
    job_link: _req.body.job_link,
    deadline: _req.body.deadline,
  };

  // step 2: read from the json file
  const jobsData = fs.readFileSync("./data/data.json");

  // step 3: parse the json file
  const parsedJsonData = JSON.parse(jobsData);

  // step 4: push the new object in the parsedJsonData
  parsedJsonData.push(newJob);

  // step 5: to overwrite the data.json file
  fs.writeFileSync("./data/data.json", JSON.stringify(parsedJsonData));

  // Respond with the cat that was created
  return _res.status(200).send(200);
});
export default router;
