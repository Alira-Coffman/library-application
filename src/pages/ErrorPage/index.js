import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
        <div className="text-center mt-5 ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-danger fw-bold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </Container>
    
  );
}