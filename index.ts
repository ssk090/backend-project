import express from "express";
const PORT = process.env.PORT || 3000;
import restaurantsRouter from "./routes/restaurants.js";
import cuisinesRouter from "./routes/cuisines.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use("/restaurants", restaurantsRouter);
app.use("/cuisines", cuisinesRouter);
app.use(errorHandler);

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.error(error.message);
    process.exit(1);
  });
