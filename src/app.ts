import express, { Express } from "express";
import dotenv from "dotenv";
import connectDB from "./database/connect";
import notFound from "./middlewares/not-found";
import errorHandler from "./middlewares/error-handler";
import jobRouter from "./router/jobs";

const app: Express = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/jobs", jobRouter);

app.use(notFound);
app.use(errorHandler);

const mongoConnectionURI = process.env.MONGO_CONNECTION_URI;
if (mongoConnectionURI === undefined) {
  console.error(
    "MongoDB connection URI is missing in the environment variables."
  );
  process.exit(1);
}
connectDB(mongoConnectionURI);

const port: number | string = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
