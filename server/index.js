import express from "express";
import { parse } from "json2csv";
import cors from "cors";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = process.env.PORT || 3001;

const obj = [
  { firstName: "Russell", lastName: "Castillo", age: 23 },
  { firstName: "Christy", lastName: "Harper", age: 35 },
  { firstName: "Eleanor", lastName: "Mark", age: 26 },
];

const csv = parse(obj, { delimiter: "," });

console.log(csv);

app.listen(port, () => {
  console.log(`Listening for API Calls`);
});

app.get("/", (req, res) => {
  res.send(csv);
});
