import { Schema, model, connect } from "mongoose";
import { MongoClient } from "mongodb";

interface IPost {
  content: string;
  author: string;
}

const postSchema = new Schema<IPost>({
  content: { type: String, required: true },
  author: { type: String, required: true },
});

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("MONGO_URI envinronment variable is not set");
}

export const client = new MongoClient(mongoUri);
export const db = client.db("node-ts-api");

export const Post = model<IPost>("Post", postSchema);

export const connectToMongoDb = async (): Promise<object> => {
  try {
    await connect(mongoUri);
    console.log("connected");
    return { status: 200, msg: "OK - Connected" };
  } catch (error) {
    console.error(error);
    return { status: 400, msg: "Bad Request - Could not connect" };
  }
};

export const fetchAllfromMongoDb = async (): Promise<object> => {
  try {
    await connect(mongoUri);
    const posts = await Post.find();
    console.log(posts);
    return { status: 200, msg: posts };
  } catch (error) {
    console.error(error);
    return { status: 404, msg: "Records not found" };
  }
};

export const addPostToMongoDb = async () => {
  try {
    await connectToMongoDb();
    const newPost = new Post({
      content: "Hello, this is the third test",
      author: "Ryan Myself",
    });
    const addedPost = await newPost.save();
    console.log(addedPost._id.toString());
  } catch (error) {
    console.error(error);
  }
};

export default connectToMongoDb;
