"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Container>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <Link href="/posts/favorites">
        <Button>Favorites</Button>
      </Link>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 20px 0;
  margin-bottom: 50px;
`;

const Button = styled.div`
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 10px;
`;
