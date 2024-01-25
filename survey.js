document.addEventListener('DOMContentLoaded', function() {
    var currentStep = 1; // 현재 설문 단계를 저장하는 변수입니다.
    var totalSteps = 15; // 전체 설문 단계의 수입니다.
    
    // 모든 폼에 대해 엔터키 제출을 방지하는 이벤트 리스너를 추가합니다.
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // 폼 제출 기본 이벤트를 방지합니다.
            goToNextStep(currentStep); // 다음 단계로 이동하는 함수를 호출합니다.
        });
    });

    // '다음' 버튼에 클릭 이벤트를 바인딩합니다.
    document.querySelectorAll('button').forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.getAttribute('type') === 'button') {
                goToNextStep(currentStep); // 다음 단계로 이동하는 함수를 호출합니다.
            }
        });
    });

    function goToNextStep(step) {
        // 현재 단계의 설문 페이지를 숨깁니다.
        document.getElementById('question' + step).style.display = 'none';
        
        // 다음 단계로 currentStep을 증가시킵니다.
        currentStep++;

        // 다음 단계가 총 단계 수를 초과하지 않는 경우에만 실행합니다.
        if (currentStep <= totalSteps) {
            // 다음 단계의 설문 페이지를 표시합니다.
            document.getElementById('question' + currentStep).style.display = 'block';
        } else {
            // 여기에서 설문 제출 로직을 구현할 수 있습니다.
            alert('설문이 완료되었습니다!'); // 예시 메시지입니다.
        }
    }

    // 설문 제출 함수입니다.
    function submitSurvey() {
        // 여기에서 설문 제출에 관련된 로직을 구현합니다.
        // 예를 들어, 서버에 데이터를 전송하거나 결과 페이지로 이동하는 등의 처리를 할 수 있습니다.
        alert('설문이 제출되었습니다!');
    }

    // 외부에서 submitSurvey 함수를 사용할 수 있도록 window 객체에 할당합니다.
    window.submitSurvey = submitSurvey;
});

function updateProgressBar(currentStep, totalSteps) {
    var progressBar = document.getElementById('progress');
    var progressText = document.getElementById('progress-text');
    var widthPercentage = (currentStep / totalSteps) * 100;

    progressBar.style.width = widthPercentage + '%';
    progressText.textContent = currentStep + ' of ' + totalSteps;
}

function completeStep(currentStep) {
    // 입력값 검증 (예제로 입력값이 있는지만 확인)
    var inputs = document.querySelectorAll('#question' + currentStep + ' input');
    var isValid = Array.from(inputs).every(input => {
        if(input.type === 'checkbox' || input.type === 'radio') {
            return document.querySelector('input[name="' + input.name + '"]:checked');
        }
        return input.value.trim() !== '';
    });

    if (!isValid) {
        alert('모든 필수 항목을 입력해주세요.');
        return; // 유효하지 않은 경우 다음으로 넘어가지 않음
    }

    // 현재 단계의 설문을 숨기고 다음 단계의 설문을 표시
    var totalSteps = 15; // 총 설문 단계 수
    document.getElementById('question' + currentStep).style.display = 'none';
    if (currentStep < totalSteps) {
        document.getElementById('question' + (currentStep + 1)).style.display = 'block';
        updateProgressBar(currentStep + 1, totalSteps);
    } else {
        // 마지막 단계에서는 설문 제출 처리
        submitSurvey();
    }
}

function submitSurvey() {
    // 설문 제출 관련 코드
    alert('설문이 제출되었습니다. 감사합니다!');
    // 여기에 서버로 데이터를 보내는 코드를 추가할 수 있습니다.
}

// 페이지 로드 시 첫 번째 질문과 프로그레스바 초기화
document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar(1, 15);
});

// 폼의 입력값을 검증하는 함수
function validateForm(form) {
    // 필수 입력 필드를 검증하는 로직 구현
    // 예시: 모든 입력 필드를 순회하면서 값이 있는지 확인
    for (let input of form.querySelectorAll('input')) {
        if (input.hasAttribute('required') && !input.value.trim()) {
            return false; // 필수 입력 필드 중 값이 없는 항목이 있으면 false 반환
        }
    }
    return true; // 모든 필수 입력 필드에 값이 있으면 true 반환
}

function updateProgressBar(currentStep, totalSteps) {
    var progressBar = document.getElementById('progress');
    var progressText = document.getElementById('progress-text');
    var widthPercentage = (currentStep / totalSteps) * 100;
    
    progressBar.style.width = widthPercentage + '%';
    progressText.textContent = `${currentStep} / ${totalSteps}`;
}


function uncheckNone(checkbox) {
    if (checkbox.checked) {
        document.getElementById('none').checked = false;
    }
}

function uncheckOthers(checkbox) {
    if (checkbox.checked) {
        document.getElementById('smoking').checked = false;
        document.getElementById('drinking').checked = false;
        document.getElementById('lack_of_exercise').checked = false;
        document.getElementById('lack_of_sunlight').checked = false;
    }
}


function handleDietHabitChange(selectedCheckboxId) {
    var dietHabits = ['dietHighCarb', 'dietHighMeat', 'dietHighFat', 'dietHighCaffeine', 'dietOvereating', 'dietLowFish', 'dietLowVeggies', 'dietNone'];

    if (selectedCheckboxId === 'dietNone') {
        dietHabits.forEach(function(habit) {
            if (habit !== 'dietNone') {
                document.getElementById(habit).checked = false;
            }
        });
    } else {
        document.getElementById('dietNone').checked = false;
    }
}


document.getElementById("familyHistoryNone").addEventListener("change", function() {
    if(this.checked) {
        document.querySelectorAll('input[name="familyHistory"]:not(#familyHistoryNone)').forEach(function(item) {
            item.checked = false;
        });
    }
});

document.querySelectorAll('input[name="familyHistory"]:not(#familyHistoryNone)').forEach(function(item) {
    item.addEventListener("change", function() {
        if(this.checked) {
            document.getElementById("familyHistoryNone").checked = false;
        }
    });
});



function toggleHealthOptions() {
    const isChecked = document.getElementById('healthNone').checked;
    document.getElementById('healthIssue1').disabled = isChecked;
    document.getElementById('healthIssue2').disabled = isChecked;
    document.getElementById('healthIssue3').disabled = isChecked;
    document.getElementById('healthIssue4').disabled = isChecked;
    document.getElementById('healthIssue5').disabled = isChecked;
    document.getElementById('healthIssue6').disabled = isChecked;
    document.getElementById('healthIssue7').disabled = isChecked;
    document.getElementById('healthIssue8').disabled = isChecked;
    document.getElementById('healthIssue9').disabled = isChecked;
    document.getElementById('healthIssue10').disabled = isChecked;

    if (isChecked) {
   document.getElementById('healthIssue1').disabled = isChecked;
    document.getElementById('healthIssue2').disabled = isChecked;
    document.getElementById('healthIssue3').disabled = isChecked;
    document.getElementById('healthIssue4').disabled = isChecked;
    document.getElementById('healthIssue5').disabled = isChecked;
    document.getElementById('healthIssue6').disabled = isChecked;
    document.getElementById('healthIssue7').disabled = isChecked;
    document.getElementById('healthIssue8').disabled = isChecked;
    document.getElementById('healthIssue9').disabled = isChecked;
    document.getElementById('healthIssue10').disabled = isChecked;
    }
}


