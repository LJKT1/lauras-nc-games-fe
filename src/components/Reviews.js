import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { getCategories } from "../utils/api";
import Queries from "./Queries";
import { titleCase } from "../utils/textFormatting";

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
  const [isPending, setIsPending] = useState(true);

  const navigate = useNavigate();

  const gotoReview = (review_id) => {
    navigate(`/reviews/${review_id}`);
  };

  useEffect(() => {
    getReviews(selectedCategory, selectedSortOptionIndex).then((res) => {
      setReviews(res);
      setIsPending(false);
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
            {isPending && (
              <Spinner
                role="status"
                animation="border"
                variant="primary"
                className="mb-5 mt-5"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {reviews && (
              <Row>
                {reviews.map((review) => {
                  return (
                    <Col key={review.review_id}>
                      <Card className="m-1 review-card">
                        <Card.Body>
                          <Card.Header>
                            <Card.Title className="card-title">
                              {review.title}
                            </Card.Title>
                          </Card.Header>
                          <Card.Subtitle className="mb-1 mt-1">
                            Category: {titleCase(review.category)}
                          </Card.Subtitle>
                          <Card.Img
                            variant="top"
                            className="review-img"
                            src={review.review_img_url}
                            alt={review.title}
                          />
                          <Card.Text className="mb-1 mt-1">
                            Author: {review.owner}{" "}
                          </Card.Text>
                          <Card.Text className="mb-1 mt-1">
                            {review.votes} Votes {review.comment_count} Comments
                          </Card.Text>
                          <Card.Text className="mb-1 mt-1">
                            Created at:
                            {new Date(
                              review.created_at
                            ).toLocaleDateString()}{" "}
                          </Card.Text>
                          <Button onClick={() => gotoReview(review.review_id)}>
                            Go to Review
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Container>
        </ul>
      </main>
    </>
  );
};

export default Reviews;
