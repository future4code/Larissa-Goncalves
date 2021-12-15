import { DivHeader } from "./Styled-Header";
import {goToFeed, goToLogin} from "../../rotes/Coordinator"
import { useHistory} from "react-router";


const Header = () => {
    const history = useHistory()

  const goToLogout = () => {
    window.localStorage.removeItem("token");
    window.confirm("deseja sair?") ? goToLogin(history) : goToFeed(history)
  };

    return(
        <DivHeader>
            <h3>Página Inicial</h3>
            <button>Modo light ou dark</button>
            <button onClick={() => goToLogout(history)}>logout</button>
        </DivHeader>
    )
}

export default Header;