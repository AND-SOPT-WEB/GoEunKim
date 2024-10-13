// 필터처리 함수
const filterData = (datas, filters) => {
  return datas.filter((member) => {
    // 입력값이 없으면 -> true 처리 (why? 모든 멤버 All 포함 )
    const matchedName = filters.name ? member.name.includes(filters.name) : true;
    const matchedEngName = filters.engName.toLowerCase()
      ? member.engName.toLowerCase().includes(filters.engName)
      : true;
    const matchedGithub = filters.github.toLowerCase() ? member.github.toLowerCase().includes(filters.github) : true;
    const matchedGender = filters.gender ? member.gender === filters.gender : true;
    const matchedRole = filters.role ? member.role === filters.role : true;
    const matchedWeek1 = filters.week1 ? member.firstWeekGroup == filters.week1 : true;
    const matchedWeek2 = filters.week2 ? member.secondWeekGroup == filters.week2 : true;

    return (
      matchedName && matchedEngName && matchedGithub && matchedGender && matchedRole && matchedWeek1 && matchedWeek2
    );
  });
};

export default filterData;
