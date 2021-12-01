import axios from "axios";
import { useState, useEffect } from "react";
import { DivCard } from "./IncialPage-Styled";

const InicialPage = (props) => {
  return(
    <DivCard>
    <div>
      <button onClick={() => props.changePage("MatchPage")}>
        ver matchs
      </button>
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
    <div>
      
    </div>
  </DivCard>
);
};
export default InicialPage;

 