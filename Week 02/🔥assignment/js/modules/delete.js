// 삭제 함수
const deleteSelected = (datas) => {
  const checkedBoxes = document.querySelectorAll('input[name="selected"]:checked');
  const selectedIdxes = [];

  checkedBoxes.forEach((box) => {
    selectedIdxes.push(Number(box.getAttribute('data-idx')));
  });

  return datas.filter((_, index) => !selectedIdxes.includes(index));
};

export default deleteSelected;
