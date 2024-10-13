const addData = (datas) => {
  const name = document.getElementById('dialog_name').value.trim();
  const englishName = document.getElementById('dialog_english-name').value.trim();
  const github = document.getElementById('dialog_github').value.trim();
  const gender = document.getElementById('dialog_gender').value;
  const role = document.getElementById('dialog_role').value;
  const firstWeekGroup = document.getElementById('dialog_week1').value.trim();
  const secondWeekGroup = document.getElementById('dialog_week2').value.trim();

  if (!name || !englishName || !github || !gender || !role || !firstWeekGroup || !secondWeekGroup) {
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
  return newData;
};

export default addData;
