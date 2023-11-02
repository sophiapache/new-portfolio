import "./Header.css";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
const Header = () => {
  return (
    <div className="headerContainer">
      <LeftHeader />
      <RightHeader />
    </div>
  );
};
export default Header;
