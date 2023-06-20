// Imports
import * as dotenv from "dotenv";
dotenv.config();
import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import userRouter from "./routes/userRoutes";
// import roleRouter from "./routes/roleRoutes";

// Constants
const app = Express();
const port = process.env.PORT || 4003;

// App Configuration Entries
app.disable("x-powered-by");
app.use(cors({ exposedHeaders: ["x-auth-token"] }));
app.use(Express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function root(req, res) {
  res.status(200).json({
    success: true,
    status: res.statusCode,
    request: req.path,
    data: "You have reached the root path",
  });
});

app.listen(port, () => {
  console.log("App is up on port: " + port);
});
