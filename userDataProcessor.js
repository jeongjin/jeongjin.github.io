// 로컬 스토리지에서 사용자 데이터를 가져옵니다.
const userData = JSON.parse(localStorage.getItem('userData')) || {};

// 사용자의 성별을 가져오거나 기본값을 설정합니다.
const userGender = userData.gender || '미응답';
console.log("User Gender:", userGender); // 성별 로그 출력

// 사용자의 나이를 계산하는 함수입니다.
function calculateAge(birthDate) {
    const birthYear = parseInt(birthDate.split('-')[0], 10);
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// 사용자의 나이를 계산합니다.
const userAge = userData.birthYear ? calculateAge(userData.birthYear) : null;
console.log("User Age:", userAge); // 나이 로그 출력

// JSON 데이터를 로드하고 처리합니다.
function loadHealthManagementData() {
    fetch('Health_Management_Data.json')
        .then(response => response.json())
        .then(data => {
            // 성별에 따라 데이터를 필터링합니다.
            const genderFilteredItems = filterItemsForUser(userGender, data);
            displayFilteredItems(genderFilteredItems, 'health-recommendations-1');

            // 나이에 따라 데이터를 필터링합니다.
            const ageFilteredItems = filterItemsByAge(userAge, data);
            displayFilteredItems(ageFilteredItems, 'health-recommendations-2');
            console.log("Data Items:", data);
        })
        .catch(error => console.error('Error loading health management data:', error));
}

// 사용자의 성별에 따라 아이템을 필터링하는 함수입니다.
function filterItemsForUser(gender, items) {
    return items.filter(item => {
        return item['성별추천'] === 'TRUE' && item['추천성별'] === gender;
    });
}

// 사용자의 나이에 따라 아이템을 필터링하는 함수입니다.
function filterItemsByAge(age, items) {
    if (age === null) return [];

    return items.filter(item => {
        // '추천나이' 속성이 없거나 빈 문자열인 경우 필터링에서 제외
        if (!item['추천나이'] || item['추천나이'].trim() === '') {
            return false;
        }

        const ageRange = item['추천나이'].split(',').map(range => range.trim());
        console.log("User AgeRange:", ageRange); // 나잇대 로그 출력
        return ageRange.includes(`${Math.floor(age / 10) * 10}대`);
    });
}

// 필터링된 아이템을 화면에 표시하는 함수입니다.
function displayFilteredItems(items, sectionId) {
    const container = document.querySelector('#' + sectionId + ' .recommendations-grid');
    container.innerHTML = ''; // 기존 내용 초기화

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <i class="${item['아이콘']}"></i>
            <h3>${item['항목명']}</h3>
            <p class="title">${item['리포트 타이틀']}</p>
            <p>${item['리포트 콘텐츠_01']}</p>
            <p>${item['리포트 콘텐츠_02']}</p>
        `;
        container.appendChild(card);
    });
}

// 데이터 로드 함수를 실행합니다.
loadHealthManagementData();
