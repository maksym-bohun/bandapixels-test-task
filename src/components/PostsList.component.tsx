"use client";

import { PostInterface } from "@/app/page";
import React from "react";
import styled from "styled-components";
import Post from "./Post.component";

const PostsList: React.FC<{
  posts: PostInterface[];
  userAvatarColors: { [key: number]: string };
}> = ({ posts, userAvatarColors }) => {
  console.log("userAvatarColors", userAvatarColors);

  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
          avatarColor={userAvatarColors[post.userId]}
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
