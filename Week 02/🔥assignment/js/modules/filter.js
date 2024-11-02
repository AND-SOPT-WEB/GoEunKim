// 필터처리 함수
const filterData = (datas, filters) => {
  return datas.filter((member) => {
    // 입력값이 없으면 -> true 처리 (why? 모든 멤버 All 포함 )
    const matchedName = filters.name ? member.name.includes(filters.name) : true;
    const matchedEngName = filters.engName.toLowerCase()
      ? member.englishName.toLowerCase().includes(filters.engName.toLowerCase())
      : true;
    const matchedGithub = filters.github.toLowerCase()
      ? member.github.toLowerCase().includes(filters.github.toLowerCase())
      : true;
    const matchedGender = filters.gender ? member.gender === filters.gender : true;
    const matchedRole = filters.role ? member.role === filters.role : true;
    const matchedWeek1 = filters.week1 ? member.firstWeekGroup == filters.week1 : true;
    const matchedWeek2 = filters.week2 ? member.secondWeekGroup == filters.week2 : true;

    return (
      matchedName && matchedEngName && matchedGithub && matchedGender && matchedRole && matchedWeek1 && matchedWeek2
    );
  });
};

// 필터 초기화 함수
const clear = () => {
  document.getElementById('name').value = '';
  document.getElementById('english-name').value = '';
  document.getElementById('github').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('role').value = '';
  document.getElementById('week1').value = '';
  document.getElementById('week2').value = '';

  window.location.reload();
};

export { filterData, clear };
