import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/mern-blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}