export const CalDate = (date) => {
  let answer = "";
  const targetDate = new Date(date).getTime();
  const nowDate = new Date().getTime();
  //우선 밀리세컨드로 통일해준후
  // 조건문에 따라 배치
  // 1000ms = 1초
  const dateOffset = (nowDate - targetDate) / 1000;
  if (dateOffset < 60) {
    answer = `${dateOffset} 초`;
  } else if (dateOffset < 3600) {
    answer = `${Math.floor(dateOffset / 60)}분`;
  } else if (dateOffset < 3600 * 24) {
    answer = `${Math.floor(dateOffset / 60 / 60)}시간`;
  } else if (dateOffset < 86400 * 7) {
    answer = `${Math.floor(dateOffset / 60 / 60 / 24)}일`;
  } else if (dateOffset < 2592000 * 2) {
    answer = `${Math.floor(dateOffset / 60 / 60 / 24 / 7)}주`;
  } else if (dateOffset < 31536000) {
    answer = `${Math.floor(dateOffset / 60 / 60 / 24 / 7 / 4)}개월`;
  } else {
    answer = `${Math.floor(dateOffset / 60 / 60 / 24 / 7 / 4 / 12)}년`;
  }
  return answer;
};
