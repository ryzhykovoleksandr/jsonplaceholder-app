import axios from "axios";

export const getUsers = () => {
  return axios.get(`https://jsonplaceholder.typocode.com/users`);
};

export const getPostsByUserId = (userId) => {
  return axios.get(`https://jsonplaceholder.typocode.com/posts?userId=${userId}`);
};

export const getAlbumsByUserId = (userId) => {
  return axios.get(`https://jsonplaceholder.typocode.com/albums?userId=${userId}`);
};
