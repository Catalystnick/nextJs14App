"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export async function addPost(previousState, formData) {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(formData) {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
}

export async function addUser(previousState, formData) {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(formData) {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
  }
}

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};
export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordagain, img } = Object.fromEntries(
    formData
  );

  if (password !== passwordagain) {
    console.log("passwords dont match");
    return { error: "passwords do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      console.log("username already exists");
      return { error: "username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid Credentials" };
    }
    throw error;
  }
};
