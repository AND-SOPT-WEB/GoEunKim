// 현재 날짜 + 시간을 뽑아내는 util
const getDate = () => {
  const currentDate = new Date();
  //시간 형식 포멧팅 (년도-월-일-시:분:초)
  const formattedDate = `${currentDate.getFullYear()}-${formatting(currentDate.getMonth() + 1)}-${formatting(currentDate.getDate())} ${formatting(currentDate.getHours())}:${formatting(currentDate.getMinutes())}:${formatting(currentDate.getSeconds())}`;
  return formattedDate;
};

// 월/일/시/분/초를 2자리로 고정! 1분의 경우 -> 01분으로 출력해서 기록의 형식을 포멧화
const formatting = (num) => {
  return String(num).padStart(2, '0');
};
export default getDate;
