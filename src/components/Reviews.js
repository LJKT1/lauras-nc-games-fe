import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { getCategories } from "../utils/api";
import Queries from "./Queries";

const Reviews = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState();
  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  const [selectedSortOptionIndex, setSelectedSortOptionIndex] = useState();
  const handleSort = (sortOptionsIndex) => {
    setSelectedSortOptionIndex(sortOptionsIndex);
  };

  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();

  const gotoReview = (review_id) => {
    navigate(`/reviews/${review_id}`);
  };

  useEffect(() => {
    getReviews(selectedCategory, selectedSortOptionIndex).then((res) => {
      setReviews(res);
    });
  }, [selectedCategory, selectedSortOptionIndex]);
  return (
    <>
      <Queries
        selectedCategory={selectedCategory}
        setCategory={handleSelect}
        setSortOrder={handleSort}
        categories={categories}
        selectedSortOptionIndex={selectedSortOptionIndex}
      />
      <main className="Reviews">
        <ul>
          <Container fluid="md">
            <Card style={{ width: "18rem" }}>
              <ListGroup>
                {reviews.map((review) => {
                  return (
                    <ListGroup.Item key={review.review_id}>
                      <Card.Title>{review.title}</Card.Title>
                      <Card.Subtitle>Category: {review.category}</Card.Subtitle>
                      <Card.Img
                        variant="top"
                        src={review.review_img_url}
                        alt={review.title}
                      />
                      <Card.Text>Review by: {review.owner} </Card.Text>
                      <Card.Text>
                        Votes: {review.votes} Comments: {review.comment_count}
                      </Card.Text>
                      <Card.Text>Created at: {review.created_at} </Card.Text>
                      <Button onClick={() => gotoReview(review.review_id)}>
                        Go to Review
                      </Button>
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          </Container>
        </ul>
      </main>
    </>
  );
};

export default Reviews;
