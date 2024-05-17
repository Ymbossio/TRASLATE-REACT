import { Form } from "react-bootstrap";
import { AUTO_LANGUAJE, SUPPORTED_LANGUAJES } from "../constants";
import React from "react";
import { FromLanguaje, SectionType, type Languaje } from "../types.d";

type Props = 
| { type: SectionType.From, value: FromLanguaje, onChange: (Languaje: FromLanguaje) => void}
| { type: SectionType.To, value: Languaje, onChange: (languaje: Languaje)=> void }


export const LanguajeSelector = ({onChange, type, value} : Props) =>{
    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        onChange(e.target.value as Languaje);
    }

    return (
        <Form.Select aria-Label='Selecciona el idioma' onChange={handleChange} value={value}>
            {type == SectionType.From && <option value={AUTO_LANGUAJE}>Detectar idioma</option>}
            {Object.entries(SUPPORTED_LANGUAJES).map(([key, literal])=>(
                <option key={key} value={key}>{literal}</option>
            ))}
        </Form.Select>
    )
}