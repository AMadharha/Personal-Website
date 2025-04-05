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

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    const details = item.querySelector('.timeline-content p');
    details.classList.toggle('show'); // Toggle the visibility of details
  });
});