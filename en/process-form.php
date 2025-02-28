<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@rashedmts.ae";  // Replace with the webmaster's email
    $subject = "New Contact Form Submission";

    // Collect form data
    $firstName = $_POST['First-Name-3'];
    $lastName = $_POST['Last-Name-3'];
    $email = $_POST['Email-Address-2'];
    $phone = $_POST['Phone-2'];
    $address = $_POST['Address'];
    $state = $_POST['State-4'];
    $zipCode = $_POST['Zip-Code-2'];
    $newClient = $_POST['Are-you-a-new-client'];
    $helpMessage = $_POST['How-May-We-Help-You'];
    $newsletter = isset($_POST['HandyPro-Newsletter']) ? "Subscribed" : "Not Subscribed";
    $giftCertificate = isset($_POST['50-Gift-Certificate']) ? "Requested" : "Not Requested";
    $smsConsent = isset($_POST['I-agree-to-receive-messaging']) ? "Agreed" : "Not Agreed";

    // Construct email message
    $message = "
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $firstName $lastName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Address:</strong> $address</p>
            <p><strong>State:</strong> $state</p>
            <p><strong>Zip Code:</strong> $zipCode</p>
            <p><strong>New Client?</strong> $newClient</p>
            <p><strong>Help Request:</strong> $helpMessage</p>
            <p><strong>Newsletter Subscription:</strong> $newsletter</p>
            <p><strong>Gift Certificate:</strong> $giftCertificate</p>
            <p><strong>SMS Consent:</strong> $smsConsent</p>
        </body>
        </html>
    ";

    // Set headers for email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1" . "\r\n";
    $headers .= "From: no-reply@example.com" . "\r\n";  // Replace with your sender email

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    echo "Invalid Request!";
}
?>
