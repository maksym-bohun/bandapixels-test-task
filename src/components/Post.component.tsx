"use client";

import { PostInterface } from "@/app/page";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePostsStore } from "@/store/posts.store";
import { GoHeart, GoHeartFill } from "react-icons/go";

export interface PostProps extends PostInterface {
  avatarColor: string;
}

const Post: React.FC<PostProps> = ({
  id,
  userId,
  title,
  body,
  avatarColor,
}) => {
  const likedPosts = usePostsStore((state) => state.likedPosts);
  const togglePostHandler = usePostsStore((state) => state.toggleFavorite);
  const [postIsLiked, setPostIsLiked] = useState(false);

  useEffect(() => {
    if (likedPosts.find((post) => post.id === id)) {
      setPostIsLiked(true);
    } else {
      setPostIsLiked(false);
    }
  }, [likedPosts]);

  const toggleLikeHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    togglePostHandler({ title, userId, body, id });
  };

  return (
    <Link href={`/posts/${id}`}>
      <Container>
        <AvatarContainer>
          <Avatar style={{ backgroundColor: avatarColor }}>{userId}</Avatar>
        </AvatarContainer>
        <div>
          <Title>{title}</Title>
          <div>{body}</div>
        </div>
        <ActionsContainer>
          {!postIsLiked && (
            <GoHeart
              size={40}
              onClick={toggleLikeHandler}
              style={{ cursor: "pointer" }}
            />
          )}
          {postIsLiked && (
            <GoHeartFill
              size={40}
              onClick={toggleLikeHandler}
              style={{ cursor: "pointer" }}
            />
          )}
        </ActionsContainer>
      </Container>
    </Link>
  );
};

export default Post;

const Container = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  gap: 20px;
  cursor: pointer;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Avatar = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold !important;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;
