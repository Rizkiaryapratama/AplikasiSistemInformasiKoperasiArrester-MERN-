import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';

import RouteBebanUsaha from "./src/DatabaseBebanUsaha/routes/RouteBebanUsaha.js";
import RouteKas from "./src/DatabaseKas/routes/RouteKas.js";
import RouteKontrak from "./src/DatabaseKontrak/routes/RouteKontrak.js";

const app = express();
const CONNECTION_URL = 'mongodb+srv://admin:admin@clusterkoperasiarrester.m4tmbtn.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());
app.use(express.json());
app.use(RouteBebanUsaha, RouteKas, RouteKontrak);

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
;

// mongoose.set('useFindAndModify', false);