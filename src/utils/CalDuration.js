import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);
const calcDuration = (num) => {
  const duration = moment.duration(num).format("h:mm:ss").padStart(4, "0:0");
  return duration;
};

export default calcDuration;
