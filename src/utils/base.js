/**
 * @param {Number} time1 
 * @param {Number} time2 
 * @param {"string" | "time"} type 
 * @returns
 */
export function getFriendlyTime(time1, time2 = new Date(), type = "string") {

  const now = new Date(time2).getTime();
  const inputTime1 = new Date(time1).getTime();
  // const inputTime2 = new Date(time2).getTime();
  const diff = now - inputTime1;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (type === "string") {
    if (hours === 0) {
      if (minutes === 0) {
        return `${seconds}秒前`;
      } else if (minutes === 1) {
        return `${minutes}分钟前`;
      } else {
        return `${minutes}分钟前`;
      }
    } else if (hours === 1) {
      return `一小时前`;
    } else {
      return `${hours}小时前`;
    }
  } else {
    return diff;
  }
}