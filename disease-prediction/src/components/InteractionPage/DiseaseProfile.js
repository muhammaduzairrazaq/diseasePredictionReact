// import "../../App.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Report from "../../assets/report.svg";
// import { Link } from "react-router-dom";

// export const DiseaseProfile = () => {
//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={12}>
//           <div className="disease-profile-container">
//             <div className="disease-profile-top-heading">
//               <h2>Name</h2>
//             </div>
//             <div className="disease-profiles-list">
//               <Link to="/diseasereport">
//               <div className="disease-profile">
//                 <img src={Report} alt="plus" />
//                 <p>Disease Name</p>
//                 <div className="disease-space-name"></div>
//                 <p>25-11-2023</p>
//               </div>
//               </Link>
//               <Link to="/diseasereport">
//               <div className="disease-profile">
//                 <img src={Report} alt="plus" />
//                 <p>Disease Name</p>
//                 <div className="disease-space-name"></div>
//                 <p>25-11-2023</p>
//               </div>
//               </Link>
//               <Link to="/diseasereport">
//               <div className="disease-profile">
//                 <img src={Report} alt="plus" />
//                 <p>Disease Name</p>
//                 <div className="disease-space-name"></div>
//                 <p>25-11-2023</p>
//               </div>
//               </Link>
//               <Link to="/diseasereport">
//               <div className="disease-profile">
//                 <img src={Report} alt="plus" />
//                 <p>Disease Name</p>
//                 <div className="disease-space-name"></div>
//                 <p>25-11-2023</p>
//               </div>
//               </Link>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";


export const DiseaseProfile = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="disease-profile-container">
          <Link to="/">
          <span className="back-home">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#251cec", fontSize: "1.5em" }} className="back-to-home" />
          </span>
          </Link>
            <div className="disease-profiles-list">
              <Link to="/diseasereport">
              <div className="disease-profile">
                <p>Disease Name</p>
                <p className="report-date">25-11-2023</p>
                <span className="report-delete"><FontAwesomeIcon icon={faTrash} style={{color: "#215cec",}} /></span>
              </div>
              </Link>
              <Link to="/diseasereport">
              <div className="disease-profile">
                <p>Disease Name</p>
                <p className="report-date">25-11-2023</p>
                <span className="report-delete"><FontAwesomeIcon icon={faTrash} style={{color: "#215cec",}} /></span>
              </div>
              </Link>
              <Link to="/diseasereport">
              <div className="disease-profile">
                <p>Disease Name</p>
                <p className="report-date">25-11-2023</p>
                <span className="report-delete"><FontAwesomeIcon icon={faTrash} style={{color: "#215cec",}} /></span>
              </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
