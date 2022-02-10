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

export const getUsers = () => {
  return reviewsApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getUserData = (username) => {
  //not currently implemented
  return reviewsApi.get(`/users/${username}`).then((res) => {
    return res.data.user;
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

export const getReviewComments = (review_id) => {
  return reviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data;
  });
};

export const postReviewComments = (review_id, comment) => {
  //not currently implemented
  return reviewsApi
    .post(`/reviews/${review_id}/comments`, comment)
    .then((res) => {
      return res.data.comment;
    });
};

export const patchReviewVotes = (review_id, vote) => {
  return reviewsApi
    .patch(`/reviews/${review_id}`, { inc_votes: vote })
    .then((res) => {
      return res.data.review;
    });
};
