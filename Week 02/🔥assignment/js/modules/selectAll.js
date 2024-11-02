// 전체 선택/해제 관련 함수
const selecteAll = (checkAllBtn) => {
  const checkboxes = document.getElementsByName('selected');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = checkAllBtn.checked;
  });
};

const checkingTop = () => {
  const checkboxes = document.getElementsByName('selected');
  const checkAllBtn = document.querySelector('#check_all');
  const checked = document.querySelectorAll('input[name="selected"]:checked').length;
  const boxCnt = checkboxes.length;

  console.log(checked, boxCnt);

  if (checked == boxCnt) {
    checkAllBtn.checked = true;
  } else {
    checkAllBtn.checked = false;
  }
};

const retrackingcheck = () => {
  const checkboxes = document.getElementsByName('selected');
  checkboxes.forEach((box) => {
    box.addEventListener('click', checkingTop);
  });
};

export { selecteAll, checkingTop, retrackingcheck };
