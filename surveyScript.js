// 사용자의 답변을 저장할 객체 생성
var userData = {};
var dataOptionId =[];

// 질문 1: 성별
function completeStep1() {
    var gender = document.querySelector('input[name="gender"]:checked');

    if (gender) {
        userData['gender'] = gender.value;
        var optionID = gender.getAttribute('data-option-id');

        if (optionID) {
            dataOptionId.push(optionID);
        } else {
            console.log('선택된 성별에 data-option-id 속성이 없습니다.');
        }
    } else {
        console.log('성별이 선택되지 않았습니다.');
        return; // 성별이 선택되지 않았으므로 함수를 종료합니다.
    }

    console.log(dataOptionId);
    document.getElementById('question2').style.display = 'block';
}



// 질문 2: 출생년도
function completeStep2() {
    if (validateForm(2)) { // 2번 단계의 유효성 검사
        var birthYear = document.getElementById('birthYear').value;
        userData['birthYear'] = birthYear;

        // 유효성 검사가 통과되면 다음 질문으로 이동
        
        //document.getElementById('question3').style.display = 'block'; // 다음 질문 표시
        
    } else {
        // 유효성 검사 실패 시 경고 메시지
        alert('모든 필수 항목을 입력해주세요.');
    }

}

// 질문 3: 키
function completeStep3() {

    if (validateForm(3)) { // 3번 단계의 유효성 검사
    var height = document.getElementById('height').value;
    userData['height'] = height;
    // 다음 질문으로 이동
    //document.getElementById('question4').style.display = 'block';

    } else {
    // 유효성 검사 실패 시 경고 메시지
    alert('모든 필수 항목을 입력해주세요.');
    }
    
}

// 질문 4: 몸무게
function completeStep4() {

    if (validateForm(4)) { // 4번 단계의 유효성 검사
    var weight = document.getElementById('weight').value;
    userData['weight'] = weight;
    // 다음 질문으로 이동
    document.getElementById('question5').style.display = 'block';
    // 유효성 검사 실패 시 경고 메시지
    alert('모든 필수 항목을 입력해주세요.');

    }
}

// 질문 5: 생활습관
function completeStep5() {
    if (validateForm(5)) { // 5번 단계의 유효성 검사
        var lifestyle = [];
        var checkboxes = document.getElementsByName('lifestyle');

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                // 체크박스의 value 값을 lifestyle 배열에 추가
                lifestyle.push(checkboxes[i].value);

                // 체크박스의 data-option-id 값을 dataOptionID 배열에 추가
                var optionId = checkboxes[i].getAttribute('data-option-id');
                dataOptionId.push(optionId);
            }
        }

        userData['lifestyle'] = lifestyle;

        // 다음 질문으로 이동
        document.getElementById('question6').style.display = 'block';
    } else {
        // 유효성 검사 실패 시 경고 메시지
        alert('모든 필수 항목을 입력해주세요.');
    }
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

    // 체크박스 선택 개수 제한 로직
    if (checkboxes.length > 3) {
        alert('최대 3개까지만 선택 가능합니다.');
        return; // 함수 종료
    }

    // 선택된 체크박스의 값들을 healthOptions 배열에 추가
    checkboxes.forEach(function(checkbox) {
        healthOptions.push(checkbox.value);
    });

    // userData 객체에 건강 관심사 데이터 저장
    userData['healthOptions'] = healthOptions;

    // 다음 질문으로 이동
    if (checkboxes.length <= 3) {
        document.getElementById('question15').style.display = 'block';
    }
}



