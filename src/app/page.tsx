import { CommentInterface } from "@/components/CommentsModal.component";
import Home from "@/components/Home.component";
import PostsList from "@/components/PostsList.component";
import Head from "next/head";

export interface PostInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments?: CommentInterface[];
}

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <>
      <Head>
        <title>Home Page</title> <Home posts={posts} />
        <meta name="description" content="This is the home page of our app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}
