import nominaUno from '../assets/img/nominaUno.jpg';
import nominaDos from '../assets/img/nominaDos.jpg';
import nominaTres from '../assets/img/nominaTres.jpg';


export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={nominaUno}
            alt=""
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src={nominaDos}
            alt=""
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src={nominaTres}
            alt=""
            className="d-block w-100"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
