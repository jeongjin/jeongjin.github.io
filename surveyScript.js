// 사용자의 답변을 저장할 객체 생성
var userData = {};

// 질문 1: 성별
function completeStep1() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    userData['gender'] = gender;
    // 다음 질문으로 이동 (예: display 속성을 변경하여 다음 질문을 보여줌)
    document.getElementById('question2').style.display = 'block';
}

// 질문 2: 출생년도
function completeStep2() {
    var birthYear = document.getElementById('birthYear').value;
    userData['birthYear'] = birthYear;
    // 다음 질문으로 이동
    document.getElementById('question3').style.display = 'block';
}

// 질문 3: 키
function completeStep3() {
    var height = document.getElementById('height').value;
    userData['height'] = height;
    // 다음 질문으로 이동
    document.getElementById('question4').style.display = 'block';
}

// 질문 4: 몸무게
function completeStep4() {
    var weight = document.getElementById('weight').value;
    userData['weight'] = weight;
    // 다음 질문으로 이동
    document.getElementById('question5').style.display = 'block';
}

// 질문 5: 생활습관
function completeStep5() {
    var lifestyle = [];
    var checkboxes = document.getElementsByName('lifestyle');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            lifestyle.push(checkboxes[i].value);
        }
    }
    userData['lifestyle'] = lifestyle;
    // 다음 질문으로 이동
    document.getElementById('question6').style.display = 'block';
}

// 질문 6: 식습관
function completeStep6() {
    var dietHabit = [];
    var checkboxes = document.getElementsByName('dietHabit');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            dietHabit.push(checkboxes[i].value);
        }
    }
    userData['dietHabit'] = dietHabit;
    // 다음 질문으로 이동
    document.getElementById('question7').style.display = 'block';
}

// 질문 7: 과거 질환
function completeStep7() {
    var disease = document.getElementById('disease').value;
    userData['disease'] = disease;
    // 다음 질문으로 이동
    document.getElementById('question8').style.display = 'block';
}

// 질문 8: 복용 중인 의약품
function completeStep8() {
    var medicine = document.getElementById('medicine').value;
    userData['medicine'] = medicine;
    // 다음 질문으로 이동
    document.getElementById('question9').style.display = 'block';
}

// 질문 9: 가족력
function completeStep9() {
    var familyHistory = [];
    var checkboxes = document.getElementsByName('familyHistory');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            familyHistory.push(checkboxes[i].value);
        }
    }
    userData['familyHistory'] = familyHistory;
    // 다음 질문으로 이동
    document.getElementById('question10').style.display = 'block';
}

// 질문 10: 건강 상태 관련 사항
function completeStep10() {
    var healthIssue = [];
    var checkboxes = document.getElementsByName('healthIssue');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            healthIssue.push(checkboxes[i].value);
        }
    }
    userData['healthIssue'] = healthIssue;
    // 다음 질문으로 이동
    document.getElementById('question11').style.display = 'block';
}

// 질문 11: 건강기능식품
function completeStep11() {
    var supplement = document.getElementById('supplement').value;
    userData['supplement'] = supplement;
    // 다음 질문으로 이동
    document.getElementById('question12').style.display = 'block';
}

// 질문 12: 알러지
function completeStep12() {
    var allergy = document.getElementById('allergy').value;
    userData['allergy'] = allergy;
    // 다음 질문으로 이동
    document.getElementById('question13').style.display = 'block';
}

// 질문 13: 여성 건강 사항
function completeStep13() {
    var option = document.querySelector('input[name="option"]:checked').value;
    userData['option'] = option;
    // 다음 질문으로 이동
    document.getElementById('question14').style.display = 'block';
}

// 질문 14: 건강 관심사 사항
function completeStep14() {
    var healthOptions = [];
    var checkboxes = document.querySelectorAll('input[name="healthOptions"]:checked');

    // 체크박스가 3개를 초과하여 선택되었을 경우 경고 창 표시 후 함수 종료
    if (checkboxes.length > 3) {
        alert('최대 3개까지만 선택 가능합니다.');
        return; // 여기서 함수 실행을 중단
    }

    // 선택된 체크박스의 값들을 healthOptions 배열에 추가
    checkboxes.forEach(function(checkbox) {
        healthOptions.push(checkbox.value);
    });

    // 체크박스의 개수가 3개 이하일 경우에만 15번 질문을 표시
    if (checkboxes.length <= 3) {
        document.getElementById('question15').style.display = 'block';
    }
}



