import { Link } from "react-router-dom";
import MotionButton from "../../components/Button/MotionButton";

const Home = () => {
  return (
    <section>
      <h1>Explore Photo Collections</h1>
      <p>Browse curated galleries for nature, travel, and wallpapers.</p>
      <div style={{ display: "flex", gap: "12px", justifyContent:"center" }}>
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
    </section>
  );
};

export default Home;
