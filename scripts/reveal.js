const toggleButtons = document.querySelectorAll('.work-term-report-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = button.getAttribute('data-target');
        const targetText = document.getElementById(targetId);

        if (targetText.classList.contains('hidden')) {
            targetText.classList.remove('hidden');
        } else {
            targetText.classList.add('hidden');
        }
    });
});