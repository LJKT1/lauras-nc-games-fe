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
  if (category && category !== "all") path += `?category=${category}`;
  return reviewsApi.get(path).then((res) => {
    return res.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
