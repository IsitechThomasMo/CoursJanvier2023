import "./Movie.css";

function Movie(props) {
  const classes = "movie " + props.className;

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

export default Movie;