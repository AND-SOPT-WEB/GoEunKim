const getStorage = () => {
  const prev = localStorage.getItem('history');
  if (!prev) {
    return [];
  } else {
    return JSON.parse(prev);
  }
};

export default getStorage;
