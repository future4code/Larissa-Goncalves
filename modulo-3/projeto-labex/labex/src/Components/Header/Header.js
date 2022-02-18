import { DivHeader } from "./Header-styled";
import ImgLogo from "../../img/logoLabeXIMG.png";

const Header = () => {
  
  return (
    <DivHeader>
      <div> 
        <img src={ImgLogo}></img>
      </div>
    </DivHeader>
  );
};

export default Header;
