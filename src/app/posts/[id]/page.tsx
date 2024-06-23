import PostContainer from "@/components/PostContainer.component";
import React from "react";

interface PostPageInterface {
  params: {
    id: number;
  };
}

const PostPage: React.FC<PostPageInterface> = async ({ params }) => {
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const commentsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  );
  const post = await postRes.json();
  const comments = await commentsRes.json();

  return <PostContainer {...post} comments={comments} />;
};

export default PostPage;
