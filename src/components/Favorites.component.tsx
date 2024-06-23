"use client";

import { usePostsStore } from "@/store/posts.store";
import React from "react";
import PostsList from "./PostsList.component";
import styled from "styled-components";

const Favorites = () => {
  const likedPosts = usePostsStore((state) => state.likedPosts);

  return (
    <>
      {likedPosts.length > 0 && <PostsList posts={likedPosts} />}
      {likedPosts.length === 0 && (
        <NoPostsContainer>No favorite posts yet!</NoPostsContainer>
      )}
    </>
  );
};

export default Favorites;

const NoPostsContainer = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 20%;
`;
