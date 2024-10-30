const getData = () => {
  // 현재 날짜와 시간을 가져오기
  const currentDate = new Date();

  // 날짜와 시간을 문자열로 포맷팅
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  console.log(formattedDate);
  // 포맷팅된 날짜와 시간을 출력
  return formattedDate;
};

export default getData;
