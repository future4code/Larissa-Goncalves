import axios from "axios";
import { useState, useEffect } from "react";
import { DivMatch } from "./MatchPage-Styled";

const MatchPage = (props) => {
  return (
    <DivMatch>
      <div>
        <button onClick={() => props.changePage("inicialPage")}>
          Voltar aos matchs
        </button>
      </div>
    </DivMatch>
  );
};

export default MatchPage;
