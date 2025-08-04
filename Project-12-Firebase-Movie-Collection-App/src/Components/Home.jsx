import { useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Spinner,
  Carousel,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteMoviesAsync,
  getAllMoviesAsync,
} from "../Services/Actions/MovieAction";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const {user} = useSelector(state => state.userReducer);
  const { movies, isLoading, errMSG } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-movie/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteMoviesAsync(id));
  };
  const handleView = (id) => {
    navigate(`/single-movie/${id}`);
  };

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, []);

    useEffect(()=> {
    if(!user){
      navigate("/signIn");
    }
  }, [user]);

  return (
    <>
    <div className="movie-bg">
      {/* 🔥 Carousel Section */}
      <Carousel fade interval={3000} className="carousel-section mt-3">
        <Carousel.Item>
          <img
            className="d-block w-80 h-70 carousel-img"
            src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1744877848242_revplaycard1240x300.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 h-70 carousel-img"
            src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1751871230107_karatekiddesktop.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 h-70 carousel-img"
            src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1753079976250_chaplinspiritoftrampdesktop.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80 h-70 carousel-img"
            src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1749205596171_krishnaahmedabaddesktopjune.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      
      {/* 🎬 Movie List Section */}
      <Container className="mt-4 mb-5">
      <h2 className="text-start mt-5 fs-4">Recommended Movies</h2>
      </Container>
      {errMSG && <p className="text-center text-danger fs-5">{errMSG}</p>}

      {isLoading ? (
        <div className="text-center mt-5">
          <h2>Loading...</h2>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container className="mt-4 mb-5 ">
          {movies.length === 0 ? (
            <h2 className="text-center mt-5">No Movies Found...</h2>
          ) : (
            <Row className="g-4">
              {movies.map((movie) => (
                <Col key={movie.id} sm={6} md={4} lg={3}>
                  <div className="movie-card">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="movie-image"
                    />
                    <div className="movie-card-body">
                      <div className="movie-title text-center">{movie.title}</div>
                      <div className="movie-info text-center">
                        <strong>Category:</strong> {movie.category}
                      </div>
                      <div className="movie-actions">
                    <Button variant="outline-primary" size="sm" onClick={() => handleEdit(movie.id)}>
                       <FaEdit />Edit
                    </Button>
                    <Button variant="outline-info" size="sm" onClick={() => handleView(movie.id)}>
                       <FaEye />View
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(movie.id)}>
                       <FaRegTrashAlt />Delete
                    </Button>
                  </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      )}
      </div>
    </>
  );
};

export default Home;