import { useState } from "react";
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
export default function SearchType({type, setType})
{

    const radios = [
        { name: 'All', value: 1},
        { name: 'Title', value: 2},
        { name: 'Author', value: 3}
    ]
    return(
        <ToggleButtonGroup name="options" defaultValue={type}>
            {radios.map((radio, idx) => (
            <ToggleButton
            variant="warning"
            id={radio.name} 
            value= {radio.name}
            key={idx}
            onChange={() => {setType(radio.name)}}
            >
            {radio.name}    
            </ToggleButton>
            ))}
      </ToggleButtonGroup>
    )
}