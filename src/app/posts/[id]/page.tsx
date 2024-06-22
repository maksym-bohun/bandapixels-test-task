import PostContainer from "@/components/PostContainer.component";
import React from "react";

interface PostPageInterface {
  params: {
    id: number;
  };
}

const PostPage: React.FC<PostPageInterface> = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return <PostContainer {...post} />;
};

export default PostPage;
