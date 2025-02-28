<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@rashedmts.ae";  // Replace with the webmaster's email
    $subject = "New Contact Form Submission";

    // Collect form data
    $firstName = isset($_POST['First-Name-3']) ? $_POST['First-Name-3'] : '';
    $lastName = isset($_POST['Last-Name-3']) ? $_POST['Last-Name-3'] : '';
    $email = isset($_POST['Email-Address-2']) ? $_POST['Email-Address-2'] : '';
    $phone = isset($_POST['Phone-2']) ? $_POST['Phone-2'] : '';
    $address = isset($_POST['Address']) ? $_POST['Address'] : '';
    $state = isset($_POST['State-4']) ? $_POST['State-4'] : '';
    $zipCode = isset($_POST['Zip-Code-2']) ? $_POST['Zip-Code-2'] : '';
    $newClient = isset($_POST['Are-you-a-new-client']) ? $_POST['Are-you-a-new-client'] : '';
    $helpMessage = isset($_POST['How-May-We-Help-You']) ? $_POST['How-May-We-Help-You'] : '';
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
    $headers .= "From: info@rashedmts.ae" . "\r\n";  // Replace with your sender email

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
