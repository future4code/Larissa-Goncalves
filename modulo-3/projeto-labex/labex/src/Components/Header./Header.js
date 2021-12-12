import { useHistory } from "react-router-dom";
import { DivHeader } from "./Header-styled";
import ImgLogo from "../../img/logoLabeXIMG.png";

const Header = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <DivHeader>
      <div> 
        <img src={ImgLogo}></img>
       
        
        
      </div>
      <div>
        {/* <button onClick={goToHome}>Home</button>
        <button onClick={goToLogin}>Login</button> */}
      </div>
    </DivHeader>
  );
};

export default Header;
