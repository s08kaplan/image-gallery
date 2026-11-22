import { Link } from "react-router-dom";
import MotionButton from "../../components/Button/MotionButton";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-hero">
      <div className="home-hero__overlay" aria-hidden="true" />
      <div className="home-hero__content">
        <h1 className="home-hero__title">Explore Photo Collections</h1>
        <p className="home-hero__subtitle">Browse curated galleries for nature, travel, and wallpapers.</p>
        <div className="home-hero__actions">
          <MotionButton>
            <Link to="/photos/nature">Nature</Link>
          </MotionButton>
          <MotionButton>
            <Link to="/photos/travel">Travel</Link>
          </MotionButton>
          <MotionButton>
            <Link to="/photos/wallpapers">Wallpapers</Link>
          </MotionButton>
          <MotionButton>
            <Link to="/photos">All Categories</Link>
          </MotionButton>
        </div>
      </div>
    </section>
  );
};

export default Home;
