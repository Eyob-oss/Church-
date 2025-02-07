function doPost(e) {
    var name = e.parameter.name;
    var email = e.parameter.email;
    var message = e.parameter.message;

    // Validate email
    if (!validateEmail(email)) {
        return ContentService.createTextOutput("Invalid email format.").setMimeType(ContentService.MimeType.TEXT);
    }

    // Send email
    var to = "eyob0081@gmail.com";
    var subject = "New Contact Form Submission from " + name;
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    MailApp.sendEmail(to, subject, body);

    return ContentService.createTextOutput("Thank you! Your message has been sent.").setMimeType(ContentService.MimeType.TEXT);
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}