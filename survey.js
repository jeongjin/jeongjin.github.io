document.addEventListener('DOMContentLoaded', function() {
    var currentStep = 1;
    var totalSteps = 15;

    document.querySelectorAll('form').forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            goToNextStep(currentStep);
        });
    });

    document.querySelectorAll('button').forEach(function(button) {
        button.addEventListener('click', function() {
            if (this.getAttribute('type') === 'button') {
                goToNextStep(currentStep);
            }
        });
    });

    function goToNextStep(step) {
        if (validateForm(currentStep)) {
            document.getElementById('question' + currentStep).style.display = 'none';
            currentStep++;
            if (currentStep <= totalSteps) {
                document.getElementById('question' + currentStep).style.display = 'block';
                updateProgressBar(currentStep, totalSteps);
            } else {
                submitSurvey();
            }
        } else {
            alert('모든 필수 항목을 입력해주세요.');
        }
    }

    function validateForm(currentStep) {
        var isValid = true;
        var form = document.getElementById('form' + currentStep);
        var inputs = form.querySelectorAll('input');

        inputs.forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                if (!document.querySelector('input[name="' + input.name + '"]:checked')) {
                    isValid = false;
                }
            } else {
                if (!input.value.trim()) {
                    isValid = false;
                }
            }
        });

        return isValid;
    }

    function submitSurvey() {
        alert('설문이 제출되었습니다. 감사합니다!');
    }

    window.submitSurvey = submitSurvey;

    function updateProgressBar(currentStep, totalSteps) {
        var progressBar = document.getElementById('progress');
        var progressText = document.getElementById('progress-text');
        var widthPercentage = (currentStep / totalSteps) * 100;

        progressBar.style.width = widthPercentage + '%';
        progressText.textContent = `${currentStep} / ${totalSteps}`;
    }

    updateProgressBar(1, 15);
});

function toggleHealthOptions() {
    const isChecked = document.getElementById('healthNone').checked;
    const healthOptions = document.querySelectorAll('input[name="healthIssue"]');

    healthOptions.forEach(option => {
        option.disabled = isChecked;
    });
}

document.querySelectorAll('input[name="familyHistory"]:not(#familyHistoryNone)').forEach(function(item) {
    item.addEventListener("change", function() {
        document.getElementById("familyHistoryNone").checked = false;
    });
});

document.getElementById("familyHistoryNone").addEventListener("change", function() {
    if(this.checked) {
        document.querySelectorAll('input[name="familyHistory"]:not(#familyHistoryNone)').forEach(function(item) {
            item.checked = false;
        });
    }
});

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
