import { Schema, model, connect } from "mongoose";

interface IPost {
  content: string;
  author: string;
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const Post = model<IPost>("Post", postSchema);

const connectToMongoDb = async (): Promise<object> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("MONGO_URI envinronment variable is not set");
    }
    await connect(mongoUri);
    console.log("connected");
    return { status: 200, msg: "OK - Connected" };
  } catch (error) {
    console.error(error);
    return { status: 400, msg: "Bad Request - Could not connect" };
  }
};

export const addPostToMongoDb = async () => {
  try {
    await connectToMongoDb();
    const newPost = new Post({
      content: "Hello, this is a test",
      author: "Ryan Myself",
    });
    await newPost.save();
    console.log("Success addition");
  } catch (error) {
    console.error(error);
  }
};

export default connectToMongoDb;
