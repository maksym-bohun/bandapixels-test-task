import Home from "@/components/Home.component";
import PostsList from "@/components/PostsList.component";

export interface PostInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return <Home posts={posts} />;
}
