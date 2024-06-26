"use client";
import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Comment from "./Comment.component";

export interface CommentInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentsModal: React.FC<{
  postId: number;
  comments: CommentInterface[] | undefined;
  modalIsOpened: boolean;
  closeModalHandler: () => void;
}> = ({ comments, modalIsOpened, closeModalHandler }) => {
  const customStyles = {
    content: {
      maxWidth: "600px",
      maxHeight: "70%",
      margin: "0 auto",
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid #ccc",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Container>
      <Modal
        isOpen={modalIsOpened}
        onRequestClose={closeModalHandler}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Header>Comments</Header>
        {comments?.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
        <ButtonContainer>
          <Button onClick={closeModalHandler}>Return</Button>
        </ButtonContainer>
      </Modal>
    </Container>
  );
};

export default CommentsModal;

const Container = styled.div`
  max-width: 500px;
`;

const Header = styled.h1`
  text-align: center;
  margin: 15px 0 30px;
  font-size: 22px;
  font-weight: 600;
`;

const Button = styled.button`
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
