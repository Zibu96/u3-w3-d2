import { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { searchJobAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const searchJob = useSelector((state) => state.searchJob.content);
  const hasError = useSelector((state) => state.searchJob.hasError);
  const errorMessage = useSelector((state) => state.searchJob.errorMessage);
  console.log(query);
  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchJobAction(query));
  };
  console.log(hasError);
  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              required
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {hasError ? (
          <Col>
            <Alert variant="danger">{errorMessage}</Alert>
          </Col>
        ) : (
          <>
            <Col xs={10} className="mx-auto mb-5">
              {searchJob &&
                searchJob.map((jobData, i) => (
                  <Job key={jobData._id} data={jobData} i={i} />
                ))}
              <Link to={"company/favourite"}>Go to favourite </Link>
            </Col>{" "}
          </>
        )}
      </Row>
    </Container>
  );
};

export default MainSearch;
