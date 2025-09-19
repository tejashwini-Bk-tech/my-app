import mongoose from "mongoose";


type ConnectionObject = {
  isconnected?: number;
};

const connection: ConnectionObject = {};

 export async function dbConnect(): Promise<void> {
  if (connection.isconnected) {
    console.log("Alerady connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
    db.connections[0].readyState;
    console.log("DB connected!!");
  } catch (error) {
    console.log("not connected!!");
    process.exit(1);
  }
}
