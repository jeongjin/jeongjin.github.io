const userData = JSON.parse(localStorage.getItem('userData')) || {};
const userGender = userData.gender || '미응답';
const currentYear = new Date().getFullYear();
const userAge = userData.birthYear ? currentYear - userData.birthYear : '미응답';


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
