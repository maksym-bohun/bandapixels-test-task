"use client";

import React from "react";
import styled from "styled-components";
import { CommentInterface } from "./CommentsModal.component";

const Comment: React.FC<CommentInterface> = ({
  postId,
  id,
  name,
  email,
  body,
}) => {
  return (
    <Container>
      <EmailContainer>
        <Email>{email}</Email> commented:
      </EmailContainer>
      <HeadingSecondary>{name}</HeadingSecondary>
      <p>{body}</p>
    </Container>
  );
};

export default Comment;

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const HeadingSecondary = styled.h2`
  font-weight: 500;
  font-size: 18px;
`;

const Email = styled.span`
  font-style: italic;
  color: #333333;
`;

const EmailContainer = styled.div`
  margin-bottom: 10px;
`;
