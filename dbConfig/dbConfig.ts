import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (error) => {
      console.log("Connection error" + error);
      process.exit();
    });
  } catch (error) {
    console.log("Error connecting DB");
    console.log(error);
  }
}
