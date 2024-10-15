// 삭제 함수
const deleteSelected = (datas) => {
  const checkedBoxes = document.querySelectorAll('input[name="selected"]:checked');
  const selectedIdxes = [];

  checkedBoxes.forEach((box) => {
    selectedIdxes.push(Number(box.getAttribute('data-idx')));
  });

  // 인덱스로 받으면 중간 값 삭제시 제대로 동작 x -> id로 필터링
  return datas.filter((data) => !selectedIdxes.includes(data.id));
};

export default deleteSelected;
