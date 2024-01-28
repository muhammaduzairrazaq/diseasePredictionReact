import ProgressBar from "react-bootstrap/ProgressBar";
import "../../App.css";

function Progress() {
  const pa = 80;
  const es = 40;
  const pp = 100;
  const et = 25;
  return (
    <div>
      <p className="progressbar-tags">ChatBot Message</p>
      <ProgressBar
        striped
        variant="success"
        animated
        now={pa}
        label={`${pa}%`}
      />
      <p className="progressbar-tags">User Response</p>
      <ProgressBar striped variant="info" animated now={es} label={`${es}%`} />
      <p className="progressbar-tags">Text Message</p>
      <ProgressBar
        striped
        variant="warning"
        animated
        now={pp}
        label={`${pp}%`}
      />
      <p className="progressbar-tags">Voice Message</p>
      <ProgressBar
        striped
        variant="danger"
        animated
        now={et}
        label={`${et}%`}
      />
    </div>
  );
}

export default Progress;
