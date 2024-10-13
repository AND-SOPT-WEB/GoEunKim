import members from '../data/members.js';
import render from './modules/render.js';
import { filterData, clear } from './modules/filter.js';
import deleteSelected from './modules/delete.js';
import selectAll from './modules/selectAll.js';
import addData from './modules/addData.js';

const tableBody = document.querySelector('tbody'); // 테이블 내용 부분
const searchBtn = document.querySelector('.filter__btn--search'); // 필터링 검색 버튼
const clearBtn = document.querySelector('.filter__btn--clear'); // 필터링 초기화 버튼
const deleteBtn = document.querySelector('.data_board--delete'); // 삭제 버튼
const checkAllBtn = document.querySelector('#check_all'); //체크 박스 전체 선택
const openModalBtn = document.querySelector('.data_board--add'); // 모달 열기 버튼
const modal = document.querySelector('#dialog'); // 모달
const closeModalBtn = document.querySelector('#closeDialogBtn'); // 모달 닫기 버튼
const addDataBtn = document.querySelector('#addDataBtn'); // 데이터 추가 버튼
// 초기 로컬 스토리지 세팅
if (!localStorage.getItem('membersData')) {
  localStorage.setItem('membersData', JSON.stringify(members));
}

// 로컬 스토리지에서 데이터 받아오기
let datas = JSON.parse(localStorage.getItem('membersData'));

// 필터 처리 함수
const filtering = () => {
  const filters = {
    name: document.getElementById('name').value,
    engName: document.getElementById('english-name').value,
    github: document.getElementById('github').value,
    gender: document.getElementById('gender').value,
    role: document.getElementById('role').value,
    week1: document.getElementById('week1').value,
    week2: document.getElementById('week2').value,
  };

  const filteredData = filterData(datas, filters);
  render(false, tableBody, filteredData);
};

// 초기 랜더링
render(false, tableBody, members);
// 필터 검색 버튼 이벤트리스너
searchBtn.addEventListener('click', filtering);
// 필터 초기화 버튼 이벤트리스너
clearBtn.addEventListener('click', clear);
// 삭제 버튼 이벤트리스너
deleteBtn.addEventListener('click', () => {
  datas = deleteSelected(datas);
  render(false, tableBody, datas);
  checkAllBtn.checked = false;
});
// 전체 선택 체크박스 이벤트리스너
checkAllBtn.addEventListener('click', (e) => selectAll(e.target));

// 모달 열기 버튼 이벤트리스너
openModalBtn.addEventListener('click', (e) => modal.showModal());

// 모달 닫기
closeModalBtn.addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) modal.close();
});

//데이터 추가 버튼 이벤트리스너
addDataBtn.addEventListener('click', () => {
  const newData = addData(datas);
  datas.push(newData);
  render(false, tableBody, datas);
  clear();
  modal.close();
});
