import './Destinations.css';

const Destination = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Destinations
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Beaches</a></li>
        <li><a className="dropdown-item" href="#">Mountains</a></li>
        <li><a className="dropdown-item" href="#">Forests</a></li>
        <li><a className="dropdown-item" href="#">Deserts</a></li>
        <li><a className="dropdown-item" href="#">Islands</a></li>
        <li><a className="dropdown-item" href="#">Lakesides</a></li>
        <li><a className="dropdown-item" href="#">Historical Sites</a></li>
        <li><a className="dropdown-item" href="#">National Parks</a></li>
      </ul>
    </div>
  );
};

export default Destination;

  