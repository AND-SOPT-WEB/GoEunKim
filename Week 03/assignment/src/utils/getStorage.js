// local storage에 있는 값 get하기 위한 util
const getStorage = () => {
  const prev = localStorage.getItem('history');
  if (!prev) {
    return [];
  } else {
    return JSON.parse(prev);
  }
};

export default getStorage;
