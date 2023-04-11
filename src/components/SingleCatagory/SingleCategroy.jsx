import Card from "react-bootstrap/Card";

export default function SingleCategroy(props) {
  return (
    <>
      <div className="col">
        <Card>
          <Card.Img variant="top" src={props.category.job_logo} />
          <Card.Body>
            <Card.Title>{props.category.job_title}</Card.Title>
            <Card.Text>
            {props.category.available_jobs} Jobs Available
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
