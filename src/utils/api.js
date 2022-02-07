import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://lauras-nc-games.herokuapp.com/api",
});

export const getReviews = () => {
  return reviewsApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};
