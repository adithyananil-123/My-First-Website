document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Feedback submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your feedback!');
        
        // Reset form
        form.reset();
    });
});