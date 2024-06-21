"use client";

import { PostInterface } from "@/app/page";
import React from "react";
import styled from "styled-components";
import { TiHeartOutline, TiMessage } from "react-icons/ti";

interface PostProps extends PostInterface {
  avatarColor: string;
}

const Post: React.FC<PostProps> = ({
  id,
  userId,
  title,
  body,
  avatarColor,
}) => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar style={{ backgroundColor: avatarColor }}>{userId}</Avatar>
      </AvatarContainer>
      <div>
        <Title>{title}</Title>
        <div>{body}</div>
      </div>
      <ActionsContainer>
        <TiHeartOutline size={40} />
        <TiMessage size={40} />
      </ActionsContainer>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: flex;
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
