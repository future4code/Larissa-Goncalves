import { DivFooter, DivIcons} from "./Footer-Styled";
import imgLogo from "../../img/logoLabeXIMG.png"
import imgLogoText from "../../img/LogoLabeXV.png"
import imgTwitter from "../../img/twitter (1).png"
import imgFacebook from "../../img/facebook.png"
import imgInstagram from "../../img/instagram.png"

const Footer = () => {
    return <DivFooter>
      <div>
        <img src={imgLogo}/>
        <img src={imgLogoText}/>
        
        </div> 
      <DivIcons>
        <img src={imgTwitter}/>
        <img src={imgInstagram}/>
        <img src={imgFacebook}/>
       
      </DivIcons>
    </DivFooter>;
  };
  
  export default Footer;
  