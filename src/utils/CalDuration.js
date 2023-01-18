import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);
export const calcDuration = (num) => {
  const duration = moment.duration(num).format("h:mm:ss").padStart(4, "0:0");
  return duration;
};
