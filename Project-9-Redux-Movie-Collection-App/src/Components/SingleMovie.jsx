import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie } from "../Services/actions/MovieActions";

const SingleMovie = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const { movie, isLoading } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(getSingleMovie(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (!movie) {
    return (
      <div className="text-center mt-5">
        <h2>Movie Not Found</h2>
        <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
    <div className="container my-5">
      <div className="card shadow p-4">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={movie.image}
              alt={movie.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h2>{movie.title}</h2>
            <p><strong>Category:</strong> {movie.category}</p>
            <p><strong>Description:</strong> {movie.desc}</p>
            <p><strong>Price:</strong> ₹{movie.price}</p>
            <Link to="/" className="btn btn-secondary mt-3">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleMovie;
