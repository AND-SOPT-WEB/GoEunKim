// local storage 초기화를 위한 util
const deleteStorage = () => {
  const prev = localStorage.getItem('history');
  if (!prev) {
    return;
  } else {
    localStorage.setItem('history', []);
  }
};

export default deleteStorage;
