import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookPreview(data)
{
   
    return(
        <Link to={data.data.seed[0]}>
            <Card className="m-3">
                <Card.Body>
                    <Card.Title>{data.data.title} </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{data.data.author_name}</Card.Subtitle>
                
                </Card.Body>
            </Card>
        </Link>
    )
}