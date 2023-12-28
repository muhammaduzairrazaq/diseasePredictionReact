// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// function Progress() {
//     const percentage = 80;
//     return <CircularProgressbar value={percentage} text={`Accuracy ${percentage}%`} />;
// }

// export default Progress;

import ProgressBar from 'react-bootstrap/ProgressBar';
import "../../App.css"

function Progress() {
    const pa = 80;
    const es = 40;
    const pp = 100;
    const et = 25;
  return (
    <div>
      <p className="progressbar-tags">Prediction Accuracy</p>
      <ProgressBar striped variant="success" animated now={pa} label={`${pa}%`} />
      <p className="progressbar-tags">Entered Symptoms</p>
      <ProgressBar striped variant="info" animated now={es} label={`${es}%`} />
      <p className="progressbar-tags">Provided Precautions</p>
      <ProgressBar striped variant="warning" animated now={pp} label={`${pp}%`} />
      <p className="progressbar-tags">Required Emergencey Treatment</p>
      <ProgressBar striped variant="danger" animated now={et} label={`${et}%`} />
    </div>
  );
}

export default Progress;
