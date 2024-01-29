// 로컬 스토리지에서 사용자 데이터를 가져옵니다.
const userData = JSON.parse(localStorage.getItem('userData')) || {};

// 사용자의 성별을 가져오거나 기본값을 설정합니다.
const userGender = userData.gender || '미응답';

// 현재 년도를 기준으로 사용자의 나이를 계산합니다.
const currentYear = new Date().getFullYear();
const userAge = userData.birthYear ? currentYear - userData.birthYear : '미응답';

// 사용자의 나이를 해당하는 연령대로 변환하는 함수입니다.
// 예: 25세 -> '20대'
function isAgeInRange(age, ageRange) {
    if (typeof age !== 'number' || !ageRange) return false;
    
    const ageDecade = Math.floor(age / 10) * 10; // 나이를 10년 단위로 내림
    const ageCategory = `${ageDecade}대`;
    return ageRange.includes(ageCategory);
}


function loadHealthManagementData() {
    fetch('Health_Management_Data.json')
        .then(response => response.json())
        .then(data => {
            const filteredItems = filterItemsForUser(userGender, userAge, data);
            displayFilteredItems(filteredItems);
        })
        .catch(error => console.error('Error loading health management data:', error));
}

function filterItemsForUser(gender, age, items) {
    return items.filter(item => {
        const genderMatch = item['성별추천'] === 'TRUE' ? item['추천 성별'] === gender : true;
        const ageMatch = item['나이 추천'] === 'TRUE' ? isAgeInRange(age, item['추천 나이']) : true;
        return genderMatch && ageMatch;
    });
}

function isAgeInRange(age, ageRange) {
    // 나이 범위 확인 로직
    return ageRange.split(',').some(range => range.trim() === age.toString());
}


function displayFilteredItems(items) {
    const container = document.querySelector('.recommendations-grid');
    container.innerHTML = ''; // 기존 내용 초기화

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${item['항목명']}</h3>
            <p class="title">${item['리포트 타이틀']}</p>
            <p>${item['리포트 콘텐츠_01']}</p>
            <p>${item['리포트 콘텐츠_02']}</p>
        `;
        container.appendChild(card);
    });
}

loadHealthManagementData();
