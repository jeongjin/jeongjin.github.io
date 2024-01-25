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

// 질문 14: 건강 관리 고민사항
function completeStep14() {
    var healthOptions = [];
    var option1 = document.getElementById('option1').checked;
    var option2 = document.getElementById('option2').checked;
    var option3 = document.getElementById('option3').checked;

    if (option1) {
        healthOptions.push('다이어트');
    }
    if (option2) {
        healthOptions.push('운동 계획');
    }
    if (option3) {
        healthOptions.push('영양제 섭취');
    }

    userData['healthOptions'] = healthOptions;
    // 다음 질문으로 이동
    document.getElementById('question15').style.display = 'block';
}

// 질문 15: 건강관리 예산
function completeStep15() {
    var budget = document.querySelector('input[name="budget"]:checked').value;
    userData['budget'] = budget;

    // 모든 데이터를 로컬 데이터에 저장한 후, 원하는 작업 수행
    // 예를 들어, 저장된 데이터를 서버로 전송하거나 화면에 출력하는 등의 작업을 수행할 수 있습니다.
    console.log(userData);
}
