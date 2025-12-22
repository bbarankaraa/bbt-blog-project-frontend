import api from "./axios";

export const postService = {
  getAllPosts: async () => {
    const response = await api.get("/posts");
    return response.data;
  },
  getPostById: async (id) => {
    const numberId = Number(id);
    const response = await api.get(`/posts/${numberId}`);
    return response.data;
  },
  createPost: async (postData) => {
    const response = await api.post("/posts", postData);
    return response.data;
  },
  deletePost: async (id) => {
    const numberId = Number(id)
    const request = await api.delete(`/posts/${numberId}`)
    return request.data;
  }
};
