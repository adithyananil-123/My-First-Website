document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create a feedback object
        const feedback = {
            name,
            email,
            message,
            date: new Date().toLocaleString()
        };

        // Get existing feedback from localStorage, or start with an empty array
        const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];

        // Add new feedback
        feedbackList.push(feedback);

        // Save back to localStorage
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

        // Optional: log to console
        console.log('Feedback submitted:', feedback);

        // Show success message
        alert('Thank you for your feedback!');

        // Reset form
        form.reset();
    });
});
document.getElementById('viewFeedback').addEventListener('click', () => {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    const display = document.getElementById('feedbackDisplay');

    if (feedbackList.length === 0) {
        display.innerHTML = "<p>No feedback found.</p>";
        return;
    }

    let html = "<h3>Submitted Feedbacks:</h3><ul>";
    feedbackList.forEach((f, index) => {
        html += `<li>${f.name} <br>${f.email}<br>${f.message}<br></li><hr>`;
    });
    html += "</ul>";

    display.innerHTML = html;
});
