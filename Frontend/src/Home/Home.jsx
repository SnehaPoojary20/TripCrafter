
import './Home.css';


const Home = () => {
  const ratingChanged = (newRating) => {
    console.log(`You rated: ${newRating}`);
  };

  return (
    <>
      <p className="Welcome">Welcome to TripCrafter where you craft every detail</p>
      <br /><br /><br />
      <div className='cards'>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./image4.jpg" alt="Card image" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
          <b> Top 10 Must-Visit Travel Destinations in 2025</b>
          </p>
          </div>
      </div>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./image2.jpg" alt="Card image" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
          <b> Top 10 Romantic Getaways for Couples in 2025</b>
          </p>
          </div>
      </div>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./image3.jpg" alt="Card image" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <br></br>
          <b> Top 10 Budget-Friendly Vacation Spots in 2025</b>
          </p>
          </div>
      </div>
        <div className="card" style={{ width: '18rem' }}>
        <img src="./image1.jpg" alt="Card image" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
          <b> Top 10 Adventure Travel Locations for Thrill-Seekers in 2025</b>
          </p>
          </div>
      </div>

      </div>
    </>
  );
};

export default Home;


