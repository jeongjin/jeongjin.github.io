// 로컬 스토리지에서 사용자 데이터를 가져옵니다.
const userData = JSON.parse(localStorage.getItem('userData')) || {};

// 사용자의 성별을 가져오거나 기본값을 설정합니다.
const userGender = userData.gender || '미응답';
console.log("User Gender:", userGender); // 성별 로그 출력

function loadHealthManagementData() {
    fetch('Health_Management_Data.json')
        .then(response => response.json())
        .then(data => {
            const filteredItems = filterItemsForUser(userGender, data);
            displayFilteredItems(filteredItems, 'health-recommendations-1'); // 섹션 ID 전달
        })
        .catch(error => console.error('Error loading health management data:', error));
}

function filterItemsForUser(gender, items) {
    return items.filter(item => {
        return item['성별추천'] === 'TRUE' && item['추천성별'] === gender;
    });
}

function displayFilteredItems(items, sectionId) {
    const container = document.querySelector('#' + sectionId + ' .recommendations-grid');
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
