// 문서가 완전히 로드되면 실행될 함수를 설정합니다.

document.addEventListener('DOMContentLoaded', function() {
    // 현재 진행 중인 설문 단계와 총 단계 수를 정의합니다.
    var currentStep = 1;
    var totalSteps = 15;

    // 모든 폼에 대해 'submit' 이벤트 리스너를 추가합니다.
    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(event) {
            // 폼 제출 기본 동작을 방지합니다.
            event.preventDefault();
            // 다음 단계로 넘어가는 함수를 호출합니다.
            goToNextStep(currentStep);
        });
    });

    // 모든 버튼에 대해 클릭 이벤트 리스너를 추가합니다.
    document.querySelectorAll('button').forEach(function(button) {
        button.addEventListener('click', function() {
            // 버튼의 타입이 'button'일 경우, 다음 단계로 넘어가는 함수를 호출합니다.
            if (this.getAttribute('type') === 'button') {
                goToNextStep(currentStep);
            }
        });
    });


      // submitSurvey 이벤트 리스너 추가
      var submitSurveyButton = document.getElementById('submitSurvey');
      if (submitSurveyButton) {
          submitSurveyButton.addEventListener('click', function() {
              // 설문 제출 관련 코드
          });
      }
    

    // 다음 단계로 넘어가는 함수입니다.
    function goToNextStep(step) {
    // 현재 단계의 폼 입력을 검증합니다.
    if (validateForm(step)) {
        // 현재 단계를 숨기고 다음 단계를 표시합니다.
  
        document.getElementById('question' + step).style.display = 'none';
        currentStep++;

        if (currentStep <= totalSteps) {
            //각 버튼에 처리하는 형태로 변경
            document.getElementById('question' + currentStep).style.display = 'block';
            // 진행률 표시바를 업데이트합니다.
            updateProgressBar(currentStep, totalSteps);
        } else {
            // 모든 단계를 완료하면 설문을 제출합니다.

            submitSurvey();
        }
        } else {
        // 필수 입력이 완료되지 않았을 경우 경고를 표시합니다.
        alert('모든 필수 항목을 입력해주세요.');
        }
    }

    
    // 현재 단계의 폼 입력을 검증하는 함수입니다.
    function validateForm(currentStep) {
        console.log("Validating form for step:", currentStep);
        var isValid = true;
        var form = document.getElementById('form' + currentStep);
        var inputs = form.querySelectorAll('input');

        // 각 입력 필드를 검사합니다.
        inputs.forEach(input => {
            // 체크박스와 라디오 버튼의 경우 선택된 항목이 있는지 확인합니다.
            if (input.type === 'checkbox' || input.type === 'radio') {
                if (!document.querySelector('input[name="' + input.name + '"]:checked')) {
                    isValid = false;
                }
            } else {
                // 일반 텍스트 입력의 경우 비어 있지 않은지 확인합니다.
                if (!input.value.trim()) {
                    console.log("Invalid input found:", input);
                    isValid = false;
                }
            }
        });
        console.log("Form validation result for step", currentStep, ":", isValid);
        return isValid;
        }


    // 진행률 표시바를 업데이트하는 함수입니다.
    function updateProgressBar(currentStep, totalSteps) {
        var progressBar = document.getElementById('progress');
        var progressText = document.getElementById('progress-text');
        var widthPercentage = (currentStep / totalSteps) * 100;

        // 진행률을 표시바와 텍스트로 업데이트합니다.
        progressBar.style.width = widthPercentage + '%';
        progressText.textContent = `${currentStep} / ${totalSteps}`;
    }

    // 초기 진행률을 설정합니다.
    updateProgressBar(1, 15);
});

// '해당 없음' 체크박스와 관련된 상호작용을 관리하는 코드입니다.
function setupNoneCheckboxInteractions() {
    // 각 질문에 대한 '해당 없음' 체크박스 ID와 해당 체크박스 그룹의 이름을 설정합니다.
    var noneCheckboxIds = ['none', 'dietNone', 'familyHistoryNone', 'healthNone', 'option5'];
    var checkboxGroupNames = ['lifestyle', 'dietHabit', 'familyHistory', 'healthIssue', 'option'];

    // 각 질문에 대한 '해당 없음' 체크박스에 대한 이벤트 리스너를 설정합니다.
    for (var i = 0; i < noneCheckboxIds.length; i++) {
        (function() { // 새로운 스코프 생성
            var noneCheckboxId = noneCheckboxIds[i];
            var checkboxGroupName = checkboxGroupNames[i];
            var noneCheckbox = document.getElementById(noneCheckboxId);

            if (noneCheckbox) {
                noneCheckbox.addEventListener('change', function () {
                    var otherCheckboxes = document.querySelectorAll('input[name="' + checkboxGroupName + '"]:not(#' + noneCheckboxId + ')');
                    
                    // '해당 없음' 체크박스가 선택되었을 때 다른 체크박스를 해제합니다.
                    if (noneCheckbox.checked) {
                        otherCheckboxes.forEach(function (checkbox) {
                            checkbox.checked = false;
                        });
                    }
                });
            }
        })();
    }

    // 다른 체크박스에 대한 이벤트 리스너를 설정합니다.
    for (var i = 0; i < noneCheckboxIds.length; i++) {
        (function() { // 새로운 스코프 생성
            var noneCheckboxId = noneCheckboxIds[i];
            var checkboxGroupName = checkboxGroupNames[i];
            var otherCheckboxes = document.querySelectorAll('input[name="' + checkboxGroupName + '"]:not(#' + noneCheckboxId + ')');

            otherCheckboxes.forEach(function (checkbox) {
                checkbox.addEventListener('change', function () {
                    // 다른 체크박스 중 하나라도 선택되면 '해당 없음' 체크박스를 해제합니다.
                    var noneCheckbox = document.getElementById(noneCheckboxId);
                    if (noneCheckbox) {
                        noneCheckbox.checked = false;
                    }
                });
            });
        })();
    }
}

// '해당 없음' 체크박스 관련 함수를 호출합니다.
setupNoneCheckboxInteractions();


document.getElementById('submitSurvey').addEventListener('click', function() {
    // 선택된 budget 라디오 버튼의 값을 가져옵니다.
    var selectedBudget = document.querySelector('input[name="budget"]:checked');
    
    // 선택된 값이 있는 경우에만 userData 객체에 저장합니다.
    if (selectedBudget) {
        userData['budget'] = selectedBudget.value;
    } else {
        // 선택된 값이 없는 경우, 사용자에게 알림을 표시합니다.
        alert('예산을 선택해주세요.');
        return; // 함수 실행을 중단합니다.
    }

    // 로컬 스토리지에 userData 저장
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('설문이 제출되었습니다. 감사합니다!');
    
    // 결과 페이지로 이동
    window.location.href = 'survey_Results.html';
});