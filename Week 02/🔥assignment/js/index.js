import members from '../data.js';

// 초기 로컬 스토리지 세팅
if (!localStorage.getItem('membersData')) {
  localStorage.setItem('membersData', JSON.stringify(members));
}
const datas = JSON.parse(localStorage.getItem('membersData'));
if (datas.length > 0) {
  const tableBody = document.querySelector('tbody');
  datas.forEach((data) => {
    const { name, englishName, github, gender, role, firstWeekGroup, secondWeekGroup } = data;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="data_board__shortans"><input type="checkbox" name="selected" /></td>
      <td>${name}</td>
      <td>${englishName}</td>
      <td>${github}</td>
      <td class="data_board__shortans">${gender === 'male' ? '남자' : '여자'}</td>
      <td class="data_board__shortans">${role}</td>
      <td>${firstWeekGroup}</td>
      <td>${secondWeekGroup}</td>
  `;
    tableBody.appendChild(tr);
  });
}
