const addData = (datas) => {
  let name = document.getElementById('dialog_name').value;
  let englishName = document.getElementById('dialog_english-name').value;
  let github = document.getElementById('dialog_github').value;
  let gender = document.getElementById('dialog_gender').value;
  let role = document.getElementById('dialog_role').value;
  let firstWeekGroup = document.getElementById('dialog_week1').value;
  let secondWeekGroup = document.getElementById('dialog_week2').value;

  if (
    !name.trim() ||
    !englishName.trim() ||
    !github.trim() ||
    !gender ||
    !role ||
    !firstWeekGroup.trim() ||
    !secondWeekGroup.trim()
  ) {
    alert('빈곳없이 입력해주세요 😤✍🏻');
    return;
  }

  const newData = {
    id: datas.length + 1,
    name: name,
    englishName: englishName,
    github: github,
    gender: gender,
    role: role,
    firstWeekGroup: firstWeekGroup,
    secondWeekGroup: secondWeekGroup,
  };

  // 데이터 변수에 할당 후, 입력창 비워주기
  document.getElementById('dialog_name').value = '';
  document.getElementById('dialog_english-name').value = '';
  document.getElementById('dialog_github').value = '';
  document.getElementById('dialog_gender').value = '';
  document.getElementById('dialog_role').value = '';
  document.getElementById('dialog_week1').value = '';
  document.getElementById('dialog_week2').value = '';
  return newData;
};

export default addData;
