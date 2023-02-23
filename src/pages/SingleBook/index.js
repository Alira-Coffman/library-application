import { useParams } from "react-router-dom"
import { useEffect } from "react";

import useFetch from "../../hooks/useFetch";
import { EDITIONSURL } from "../../constants/bookURLConstants";
export default function SingleBook()
{
    let {id} = useParams();

    const {data, isLoading, error} = useFetch(`${EDITIONSURL}${id}.json`, {}, [id])
    return(
        <>
        {data && <>
        
        
          
           Number of Pages:  {data.number_of_pages}
        </>}
           
        </>
    )
}