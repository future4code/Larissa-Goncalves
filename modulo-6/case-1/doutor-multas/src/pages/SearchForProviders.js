import { InputLabel } from "@mui/material";
import Car from "../components/accordions/Car";
import Motorcycle from "../components/accordions/Motorcycle";
import Truck from "../components/accordions/Truck";
import DefaultOptions from "../components/animation/defaultOptions";
import { DivSearch } from "./Styled";

const SearchForProviders = () => {
    return(
        <DivSearch>
            <DefaultOptions/>
            <Car/>
            <Motorcycle/>
            <Truck/>
        </DivSearch>
    )
}

export default SearchForProviders;