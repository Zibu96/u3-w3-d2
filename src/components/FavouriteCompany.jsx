import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavouriteCompany = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.favourite.content);
  console.log(company);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: Your Favourites</h1>
          {company.map((jobData, i) => {
            return (
              <ListGroup>
                <ListGroupItem key={i}>
                  <Link to={`/${jobData.company_name}`}>
                    {jobData.company_name}
                  </Link>
                  <Button
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: i });
                    }}
                  >
                    Delete
                  </Button>
                </ListGroupItem>
              </ListGroup>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteCompany;
