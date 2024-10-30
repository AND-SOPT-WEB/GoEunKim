const deleteStorage = () => {
  const prev = localStorage.getItem('history');
  if (!prev) {
    return;
  } else {
    localStorage.setItem('history', []);
  }
};

export default deleteStorage;
