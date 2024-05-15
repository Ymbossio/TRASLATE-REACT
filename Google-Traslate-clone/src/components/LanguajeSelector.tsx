import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAJES } from "../constants";
import React from "react";
import { type Languaje } from "../types";

interface Props{
    onChange: (Languaje: Languaje)=>void
}

export const LanguajeSelector = ({onChange} : Props) =>{
    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) =>{
        onChange(e.target.value as Languaje);
    }

    return (
        <Form.Select aria-Label='Selecciona el idioma' onChange={handleChange}>
            {Object.entries(SUPPORTED_LANGUAJES).map(([key, literal])=>(
                <option key={key} value={key}>{literal}</option>
            ))}
        </Form.Select>
    )
}