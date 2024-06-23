"use client";

import { usePostsStore } from "@/store/posts.store";
import React, { useEffect } from "react";
import PostsList from "./PostsList.component";
import { PostInterface } from "@/app/page";

const Home: React.FC<{
  posts: PostInterface[];
}> = ({ posts }) => {
  const initializeColors = usePostsStore(
    (state) => state.initializeAvatarColors
  );

  useEffect(() => {
    initializeColors(posts);
  }, []);
  return <PostsList posts={posts} />;
};

export default Home;
