import SearchInput from "./SearchInput"
import SearchType from "./SearchType"
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { replaceSpacesWithPlus } from "../../utils/replaceSpace";
export default function SearchForm({setData})
{

    const [searchBy, setSearchBy] = useState('title');
    const [searchQ, setSearchQ] = useState('')
    
    const handleSubmit = () => {
        console.log('submitting');

        if(searchQ.length == 0)
        {
            console.log('error')
            return false;
        }
        else
        {
            setData({url:  replaceSpacesWithPlus(searchQ), type: searchBy});
        }
        //if search query is empty: then, make show error

        //use utility function to clean. 

        
    }

    return(
        <>
            <Form>
                <SearchInput type={searchBy} getSearch={setSearchQ}/>
                <SearchType type={searchBy} setType={setSearchBy}/>
               
                <Button onClick={handleSubmit} className='d-block mx-auto mt-4' variant='primary' type='button'>Search</Button>
            </Form>
         
        </>
    )   
}