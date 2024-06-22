import { PostInterface } from "@/app/page";
import { create } from "zustand";

interface IPostsStore {
  likedPosts: PostInterface[];
  toggleFavorite: (post: PostInterface) => void;
}

export const usePostsStore = create<IPostsStore>((set) => ({
  likedPosts: [],
  toggleFavorite: (post: PostInterface) => {
    set((state) => {
      if (!state.likedPosts.find((currentPost) => currentPost.id === post.id)) {
        return {
          likedPosts: [...state.likedPosts, post],
        };
      }
      return {
        likedPosts: state.likedPosts.filter(
          (currentPost) => currentPost.id !== post.id
        ),
      };
    });
  },
}));
