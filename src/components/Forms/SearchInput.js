import { FloatingLabel, Form } from "react-bootstrap"
import { useState } from "react"
export default function SearchInput({type, getSearch})
{
    // const [type, setType] = useState('title')
    
    return(
        <FloatingLabel
        controlId="floatingInput"
        label={`Search by ${type}`}
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Harry Potter" onChange={(e) => getSearch(e.target.value)}/>
      </FloatingLabel>
    )
}