import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function TextExample(props) {
  console.log(props);
  return (
    <>
      <div className="col">
        <Card>
          <Card.Body>
            <Card.Title>{props.featureJob.job_title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
            {props.featureJob.company_name}
            </Card.Subtitle>
            <a className="btn job_type" href="">{props.featureJob.job_type}</a>
            <Card.Text>
              <div className="row">
                <div className="col-12">
                <i class="fa-solid fa-location-dot"></i> <span>{props.featureJob.company_location}</span> <i class="fa-solid fa-dollar-sign"></i> <span>{props.featureJob.salary}</span>
                </div>
              </div>
            </Card.Text>
            <button className="btn btn-gradient text-white fw-bold">View Details</button>
            
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
