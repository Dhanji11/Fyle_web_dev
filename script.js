document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tax-form');
    const errorIcons = document.querySelectorAll('.validation-circle');
    const grossSalaryInput = document.getElementById('field1');
    const extraIncomeInput = document.getElementById('field2');
    const ageInput = document.getElementById('field3');
    const deductionsInput = document.getElementById('field4');

    function showErrorIcon(input, message) {
        const errorIcon = document.getElementById('error-' + input.id);
        errorIcon.style.display = 'inline-flex';
        errorIcon.title = message;
    }

    function hideErrorIcons() {
        errorIcons.forEach(icon => icon.style.display = 'none');
    }

    function validateInputs() {
        hideErrorIcons();
        let isValid = true;

        if (!grossSalaryInput.value || isNaN(grossSalaryInput.value)) {
            showErrorIcon(grossSalaryInput, 'Gross Salary must be a number');
            isValid = false;
        }

        if (!extraIncomeInput.value || isNaN(extraIncomeInput.value)) {
            showErrorIcon(extraIncomeInput, 'Extra Income must be a number');
            isValid = false;
        }

        if (ageInput.value === '') {
            showErrorIcon(ageInput, 'Age Group is mandatory');
            isValid = false;
        }

        if (!deductionsInput.value || isNaN(deductionsInput.value)) {
            showErrorIcon(deductionsInput, 'Deductions must be a number');
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateInputs()) {
            // Perform tax calculation and show modal with results
            const grossSalary = parseFloat(grossSalaryInput.value);
            const extraIncome = parseFloat(extraIncomeInput.value);
            const deductions = parseFloat(deductionsInput.value);
            const ageGroup = ageInput.value;

            // Perform tax calculation based on provided formula
            let taxableAmount = grossSalary + extraIncome - deductions - 8;
            if (taxableAmount <= 0) {
                taxableAmount = 0;
            } else {
                switch (ageGroup) {
                    case '<40':
                        taxableAmount *= 0.3;
                        break;
                    case '>=40&<60':
                        taxableAmount *= 0.4;
                        break;
                    case '>=60':
                        taxableAmount *= 0.1;
                        break;
                
                }
            }

            // Display results in a modal
            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = "<p>Your overall income will be:</p><p>" + taxableAmount.toFixed(2) + "</p><p>after tax deductions</p>";

            // Show the modal
            const modal = document.getElementById('modal');
            modal.style.display = 'block';
        }
    });

    // Close the modal when the close button is clicked
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var errorMessages = {
        field1: "Gross annual income is your total salary in a year before any deduction",
        field2: "Extra income must be a number",
        field3: "Please select your age group",
        field4: "Deductions must be a number"
    };

    var links = document.querySelectorAll('.abc');

    links.forEach(function(link) {
        var errorBox = link.nextElementSibling;
        var fieldId = link.parentElement.querySelector('input, select').id;

        link.addEventListener("mouseover", function() {
            showError(errorBox, errorMessages[fieldId]);
        });

        link.addEventListener("mouseleave", function() {
            hideError(errorBox);
        });
    });

    function showError(errorBox, message) {
        errorBox.innerHTML = message;
        errorBox.style.display = 'block';
    }

    function hideError(errorBox) {
        errorBox.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector('.exe');
    var errorBox = document.querySelector('.errorBox2');
    
    // Function to show error box
    function showError(message) {
        errorBox.innerText = message;
        errorBox.style.display = 'block';
    }

    // Function to hide error box
    function hideError() {
        errorBox.style.display = 'none';
    }

    // Mouseover event handler
    link.addEventListener("mouseover", function() {
        showError("Please Enter a number Only");
    });

    // Mouseleave event handler
    link.addEventListener("mouseleave", function() {
        hideError();
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const numericInputs = document.querySelectorAll('input[type="text"]');
    const errorIcons = document.querySelectorAll('.exe');
    
    
    numericInputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = this.value.trim();
            const isValid = /^\d*\.?\d*$/.test(value); // Check if input is a valid number
            const errorIcon = this.nextElementSibling; // Get the error icon element

            if (!isValid) {
                errorIcon.style.display = 'inline-flex'; // Show error icon if input is not a valid number
            } else {
                errorIcon.style.display = 'none'; // Hide error icon if input is a valid number
            }
        });
    });
});


// box 2

document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector('.exe1');
    var errorBox = document.querySelector('.errorBox3');
    
    // Function to show error box
    function showError(message) {
        errorBox.innerText = message;
        errorBox.style.display = 'block';
    }

    // Function to hide error box
    function hideError() {
        errorBox.style.display = 'none';
    }

    // Mouseover event handler
    link.addEventListener("mouseover", function() {
        showError("Please Enter a number Only");
    });

    // Mouseleave event handler
    link.addEventListener("mouseleave", function() {
        hideError();
    });
});



// box 3

document.addEventListener("DOMContentLoaded", function() {
    var link = document.querySelector('.exe2');
    var errorBox = document.querySelector('.errorBox4');
    
    // Function to show error box
    function showError(message) {
        errorBox.innerText = message;
        errorBox.style.display = 'block';
    }

    // Function to hide error box
    function hideError() {
        errorBox.style.display = 'none';
    }

    // Mouseover event handler
    link.addEventListener("mouseover", function() {
        showError("Please Enter a number Only");
    });

    // Mouseleave event handler
    link.addEventListener("mouseleave", function() {
        hideError();
    });
});