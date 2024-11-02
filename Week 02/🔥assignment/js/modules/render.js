const render = (isModalData = false, tableBody, datas) => {
  tableBody.innerHTML = '';

  datas.forEach((data) => {
    const { id, name, englishName, github, gender, role, firstWeekGroup, secondWeekGroup } = data;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td class="data_board__shortans"><input data-idx="${id}" type="checkbox" name="selected" /></td>
        <td>${name}</td>
        <td>${englishName}</td>
        <td><a href="https://github.com/${github}" target="_blank">${github}</a></td>
        <td class="data_board__shortans">${gender === 'male' ? '남자' : '여자'}</td>
        <td class="data_board__shortans">${role}</td>
        <td>${firstWeekGroup}</td>
        <td>${secondWeekGroup}</td>
    `;
    if (isModalData) {
      tableBody.appendChild(tr);
    } else {
      tableBody.appendChild(tr);
    }
  });
};

export default render;
