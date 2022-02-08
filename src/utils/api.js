import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://lauras-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category) => {
  let path = `/reviews`;
  if (category) path += `?category=${category}`;
  return reviewsApi.get(path).then((res) => {
    return res.data.reviews;
  });
};
