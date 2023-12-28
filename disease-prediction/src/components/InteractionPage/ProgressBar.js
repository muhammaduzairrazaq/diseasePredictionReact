import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress() {
    const percentage = 80;
    return <CircularProgressbar value={percentage} text={`${percentage}%`} />;
}

export default Progress;
