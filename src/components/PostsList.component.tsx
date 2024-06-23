"use client";

import { PostInterface } from "@/app/page";
import React, { useEffect } from "react";
import styled from "styled-components";
import Post from "./Post.component";
import { usePostsStore } from "@/store/posts.store";

const PostsList: React.FC<{
  posts: PostInterface[];
}> = ({ posts }) => {
  const avatarColors = usePostsStore((state) => state.postAuthorAvatarColor);

  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
          avatarColor={avatarColors[post.userId]}
        />
      ))}
    </Container>
  );
};

export default PostsList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
