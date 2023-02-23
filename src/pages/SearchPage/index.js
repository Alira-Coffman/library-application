import { useEffect, useState } from "react"
import SearchForm from "../../components/Forms/SearchForm"
import useFetch from "../../hooks/useFetch"
import { GENERALSEARCHURL, TITLESEARCHURL, AUTHORSEARCHURL } from "../../constants";
import { Spinner } from "react-bootstrap";
import BookPreview from "../../components/BookPreview";
export default function SearchPage()
{
    const [searchQ, setSearchQ] = useState({url: null, type: null});

    const {data, isLoading, error } = useFetch(`${GENERALSEARCHURL}${searchQ.url}`, {}, [searchQ]);
    return (
        <>
        <h2>Search for a book</h2>
        <SearchForm setData={setSearchQ}/>

        {isLoading && 
        <>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
        </>
        }
        <div className="d-flex justify-space-between flex-wrap">
        {
            


           
            data && data.docs.slice(0,10).map((book,i) => {
                return <BookPreview data={book} key={i}/>
            })
        }
        </div>
       
        </>
    )
}