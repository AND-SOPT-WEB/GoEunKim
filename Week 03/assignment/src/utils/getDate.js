const getData = () => {
  const currentDate = new Date();
  //시간 형식 포멧팅 (년도-월-일-시:분:초)
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  return formattedDate;
};

export default getData;
