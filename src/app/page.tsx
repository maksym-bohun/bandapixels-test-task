import PostsList from "@/components/PostsList";

export interface PostInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const generateUserAvatarColors = (posts: PostInterface[]) => {
    const userAvatarColors: { [key: number]: string } = {};

    posts.forEach((post) => {
      if (!userAvatarColors[post.userId]) {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        userAvatarColors[post.userId] = `${color}`;
      }
    });

    return userAvatarColors;
  };

  const userAvatarColors = generateUserAvatarColors(posts);

  return <PostsList posts={posts} userAvatarColors={userAvatarColors} />;
}
