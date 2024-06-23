"use client";

import { usePostsStore } from "@/store/posts.store";
import React from "react";
import PostsList from "./PostsList.component";

const Favorites = () => {
  const likedPosts = usePostsStore((state) => state.likedPosts);

  return <PostsList posts={likedPosts} />;
};

export default Favorites;
