const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const strengthLabel = document.getElementById('strengthLabel');
const strengthFill = document.getElementById('strengthFill');
const strengthMessage = document.getElementById('strengthMessage');
const strengthBar = document.getElementById('strengthBar');
const matchMessage = document.getElementById('matchMessage');
const rules = [
    {
        id: 'lengthRule',
        test: value => value.length >= 8
    },
    {
        id: 'upperRule',
        test: value => /[A-Z]/.test(value)
    },
    {
        id: 'lowerRule',
        test: value => /[a-z]/.test(value)
    },
    {
        id: 'numberRule',
        test: value => /[0-9]/.test(value)
    },
    {
        id: 'specialRule',
        test: value => /[^A-Za-z0-9]/.test(value)
    }
];
function updateStrength() {
    const password = passwordInput.value;
    if (!password) {
        rules.forEach(rule => setRule(rule.id, false));
        strengthLabel.textContent = 'Not entered';
        strengthLabel.style.color = '#748096';
        strengthFill.style.width = '0%';
        strengthFill.style.background = 'transparent';
        strengthMessage.textContent =
            'Enter a password to check its strength.';
        strengthBar.setAttribute('aria-valuenow', '0');
        updateMatch();
        return;
    }
    let score = 0;
    rules.forEach(rule => {
        const passed = rule.test(password);
        setRule(rule.id, passed);
        if (passed) {
            score++;
        }
    });
    let label;
    let color;
    let message;
    if (score <= 2) {
        label = 'Weak';
        color = '#e0525d';
        message = 'Your password needs more variety. Complete the requirements below.';
    } else if (score <= 4) {
        label = 'Medium';
        color = '#e6a12c';
        message = 'Getting better! Complete the remaining requirements.';
    } else {
        label = 'Strong';
        color = '#20a36e';
        message = 'Great work! Your password meets all five requirements.';
    }
    strengthLabel.textContent = label;
    strengthLabel.style.color = color;
    strengthFill.style.width = `${score * 20}%`;
    strengthFill.style.background = color;
    strengthMessage.textContent = message;
    strengthBar.setAttribute('aria-valuenow', String(score));
    updateMatch();
}
function setRule(id, passed) {
    const item = document.getElementById(id);
    item.classList.toggle('met', passed);
    item.querySelector('.rule-icon').textContent =
        passed ? '`' : '○';
}
function updateMatch() {
    const password = passwordInput.value;
    const confirmation = confirmInput.value;
    matchMessage.className = 'match-message';
    if (!confirmation) {
        matchMessage.textContent = '';
    } else if (password === confirmation) {
        matchMessage.textContent = '✓ Passwords match';
        matchMessage.classList.add('match');
    } else {
        matchMessage.textContent = '✕ Passwords do not match';
        matchMessage.classList.add('no-match');
    }
}
function setupToggle(buttonId, input) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
        const showing = input.type === 'password';
        input.type = showing ? 'text' : 'password';
        button.textContent = showing ? 'Hide' : 'Show';
        button.setAttribute('aria-pressed', String(showing));
        button.setAttribute(
            'aria-label',
            showing ? 'Hide password' : 'Show password'
        );
    });
}
passwordInput.addEventListener('input', updateStrength);
confirmInput.addEventListener('input', updateMatch);
setupToggle('togglePassword', passwordInput);
setupToggle('toggleConfirm', confirmInput);
document.getElementById('passwordForm').addEventListener('reset', () => {
    requestAnimationFrame(() => {
        passwordInput.type = 'password';
        confirmInput.type = 'password';
        document.getElementById('togglePassword').textContent = 'Show';
        document.getElementById('toggleConfirm').textContent = 'Show';
        document.getElementById('togglePassword')
            .setAttribute('aria-pressed', 'false');
        document.getElementById('toggleConfirm')
            .setAttribute('aria-pressed', 'false');
        updateStrength();
    });
});
updateStrength();