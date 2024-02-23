
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Send form data to the server using AJAX
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'form.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert('Form submitted successfully!');
                    form.reset();
                } else {
                    alert('Error submitting form. Please try again later.');
                }
            }
        };
        xhr.send(JSON.stringify(data));
    });
});
