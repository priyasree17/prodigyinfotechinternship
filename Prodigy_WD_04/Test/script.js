document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${Sreedevi}! Your message has been sent.`);
    
    // Optionally, you can add code here to send the form data to your email or server
});
