"use client";

import { PostInterface } from "@/app/page";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GoCommentDiscussion, GoHeart, GoHeartFill } from "react-icons/go";

import { usePostsStore } from "@/store/posts.store";
import CommentsModal from "./CommentsModal.component";

const PostContainer: React.FC<PostInterface> = ({
  title,
  userId,
  body,
  id,
  comments,
}) => {
  const likedPosts = usePostsStore((state) => state.likedPosts);
  const togglePostHandler = usePostsStore((state) => state.toggleFavorite);
  const [postIsLiked, setPostIsLiked] = useState(false);
  const [commentsModalIsOpened, setCommentsModalIsOpened] = useState(false);

  useEffect(() => {
    if (likedPosts.find((post) => post.id === id)) {
      setPostIsLiked(true);
    } else {
      setPostIsLiked(false);
    }
  }, [likedPosts]);

  const toggleLikeHandler = () => {
    togglePostHandler({ title, userId, body, id });
  };

  const openCommentsHandler = () => {
    setCommentsModalIsOpened(true);
  };

  const closeModalHandler = () => {
    setCommentsModalIsOpened(false);
  };

  return (
    <>
      <Container>
        <div>Author id: {userId}</div>
        <div>Title: {title}</div>
        <div>Body: {body}</div>
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
          <GoCommentDiscussion
            size={40}
            style={{ cursor: "pointer" }}
            onClick={openCommentsHandler}
          />
        </ActionsContainer>
      </Container>
      <CommentsModal
        postId={id}
        comments={comments}
        modalIsOpened={commentsModalIsOpened}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
};

export default PostContainer;

const Container = styled.div`
  max-width: 500px;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20% auto;
`;

const ActionsContainer = styled.div`
  display: flex;
  margin: 30px 0 15px 0;
  justify-content: space-around;
`;
