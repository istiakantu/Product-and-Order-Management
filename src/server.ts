import mongoose from "mongoose";
import app from "./app";
import config from "./config";

// Catch all "Not Found" route
app.all("*", (req, res) => {
  {
    res.status(400).json({
      success: false,
      message: "Route not found",
    });
  }
});
async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(
        `Product and order management app listening on port ${config.port}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

main();
