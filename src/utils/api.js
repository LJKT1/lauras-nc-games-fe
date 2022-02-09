import axios from "axios";
import sortOptions from "../constants/sortOptions";

const reviewsApi = axios.create({
  baseURL: "https://lauras-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return reviewsApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, sortOptionIndex) => {
  const params = {};
  if (category && category !== "All") params.category = category;
  if (sortOptionIndex) params.sort_by = sortOptions[sortOptionIndex].sortQuery;
  if (sortOptionIndex) params.order = sortOptions[sortOptionIndex].order;
  return reviewsApi
    .get("/reviews", {
      params,
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getSingleReview = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
