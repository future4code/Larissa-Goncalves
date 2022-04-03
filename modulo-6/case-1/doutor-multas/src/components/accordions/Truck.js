import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router"
import { useState } from "react";
import { BASE_URL } from "../../constants/url/URL"
import useRequestData from "../../hooks/UseRequestData"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DivAccordion, DivMarks } from "./Styled";
import { searchForModelsTruck } from "../request/Request";

const Truck = () => {
    const history = useHistory();
    const marksProviders = useRequestData([], `${BASE_URL}/caminhoes/marcas`);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const providers = marksProviders.map((marks) => {
        const model = (e) => {
            searchForModelsTruck(marks, history)
        }

    marksProviders.sort(function(a, b){
            if(a.nome < b.nome){
                return -1
            }else{
                return true;
            }
    })

        return(
            <DivMarks>
                 {marks.nome}
                <Fab onClick={() => model(marks.codigo)} color="primary" size="small"><AddIcon/></Fab>
            </DivMarks>
        )
    })

    return(
        <DivAccordion>
            <Accordion expanded={expanded === 'panel'} onChange={handleChange('panel')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <h1>Caminhões</h1>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                       <h4>{providers}</h4>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </DivAccordion>
    )
}

export default Truck;