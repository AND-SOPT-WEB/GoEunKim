// 전체 선택/해제 관련 함수
const selecteAll = (checkAllBtn) => {
  const checkboxes = document.getElementsByName('selected');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = checkAllBtn.checked;
  });
};

export default selecteAll;
