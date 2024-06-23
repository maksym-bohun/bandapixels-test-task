import { PostInterface } from "@/app/page";
import { create } from "zustand";

interface IPostsStore {
  likedPosts: PostInterface[];
  postAuthorAvatarColor: { [key: number]: string };
  avatarColorsInitialized: boolean;
  setPostAuthorAvatarColor: (colors: { [key: number]: string }) => void;
  toggleFavorite: (post: PostInterface) => void;
  initializeAvatarColors: (posts: PostInterface[]) => void;
}

export const usePostsStore = create<IPostsStore>((set) => ({
  likedPosts: [],
  postAuthorAvatarColor: {},
  avatarColorsInitialized: false,
  setPostAuthorAvatarColor: (colors: { [key: number]: string }) => {
    set((state) => ({
      postAuthorAvatarColor: { ...state.postAuthorAvatarColor, ...colors },
    }));
  },
  toggleFavorite: (post: PostInterface) => {
    set((state) => {
      const isLiked = state.likedPosts.some(
        (currentPost) => currentPost.id === post.id
      );
      if (isLiked) {
        return {
          likedPosts: state.likedPosts.filter(
            (currentPost) => currentPost.id !== post.id
          ),
        };
      }
      return {
        likedPosts: [...state.likedPosts, post],
      };
    });
  },
  initializeAvatarColors: (posts: PostInterface[]) => {
    set((state) => {
      if (state.avatarColorsInitialized) {
        return state;
      }

      const userAvatarColors: { [key: number]: string } = {};
      posts.forEach((post) => {
        if (!userAvatarColors[post.userId]) {
          const letters = "0123456789ABCDEF";
          let color = "#";
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          userAvatarColors[post.userId] = `${color}`;
        }
      });

      return {
        postAuthorAvatarColor: {
          ...state.postAuthorAvatarColor,
          ...userAvatarColors,
        },
        avatarColorsInitialized: true,
      };
    });
  },
}));
