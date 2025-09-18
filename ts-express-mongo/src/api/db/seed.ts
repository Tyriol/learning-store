import { Post, connectToMongoDb } from "./index.js";

const seedData = [
  {
    content: "Hello, this is the 4th test",
    author: "Ryan Myself",
  },
  {
    content: "Hello, this is the fifth test",
    author: "Ryan Myself",
  },
  {
    content: "Hello, this is the 6th test",
    author: "Ryan Myself",
  },
];

const seed = async () => {
  try {
    connectToMongoDb();
    await Post.create(seedData);
  } catch (error) {
    console.error(error);
  }
};

seed();
