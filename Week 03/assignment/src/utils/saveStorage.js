const saveStorage = (date, time, level) => {
  const newData = [{ date: date, time: time.toFixed(2), level: parseInt(level) }];
  const prev = localStorage.getItem('history');
  if (!prev) {
    localStorage.setItem('history', JSON.stringify(newData));
  } else {
    let updatedData = JSON.parse(prev);
    updatedData.push(...newData);
    updatedData.sort((a, b) => {
      if (a.level == b.level) return a.time - b.time;
      else return b.level - a.level;
    });
    localStorage.setItem('history', JSON.stringify(updatedData));
  }
};

export default saveStorage;
