// local storage에 저장하기 위한 util
const saveStorage = (date, time, level) => {
  const newData = [{ date: date, time: time.toFixed(2), level: parseInt(level) }]; // 저장소에 넣을 형식
  const prev = localStorage.getItem('history');
  if (!prev) {
    // 저장소 빈 경우
    localStorage.setItem('history', JSON.stringify(newData));
  } else {
    // 이미 저장소에 데이터가 있는 경우, 뽑아내서 new data push -> 다시 넣기
    let updatedData = JSON.parse(prev);
    updatedData.push(...newData);
    updatedData.sort((a, b) => {
      if (a.level == b.level)
        return a.time - b.time; // 레벨이 같은 경우 시간으로 결정
      else return b.level - a.level; // default는 레벨 내림차순
    });
    localStorage.setItem('history', JSON.stringify(updatedData));
  }
};

export default saveStorage;
