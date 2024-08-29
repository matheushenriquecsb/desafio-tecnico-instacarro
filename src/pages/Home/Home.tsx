import Favorites from "../../components/Favorites/Favorites";
import { Header } from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

export const Home = () => {
  return (
    <div className="container">
      <div className="form-input">
        <Header />
        <SearchBar />
        <Favorites />
      </div>
    </div>
  );
};

export default Home;
