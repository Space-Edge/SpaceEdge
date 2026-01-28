<?php
// Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Set the header to indicate the response is in JSON format
header('Content-Type: application/json');

// This array will hold our response
$response = [];

// Process the form only if it's a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if this is from forms.html (multi-step form) or contact-us.html
    $isMultiStepForm = isset($_POST['bhk_type']) || isset($_POST['package']);

    if ($isMultiStepForm) {
        // Multi-step form data from forms.html
        $name = htmlspecialchars(trim($_POST['name'] ?? ''));
        $email = htmlspecialchars(trim($_POST['email'] ?? ''));
        $phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
        $bhkType = htmlspecialchars(trim($_POST['bhk_type'] ?? 'Not specified'));
        $bhkSize = htmlspecialchars(trim($_POST['bhk_size'] ?? ''));
        $rooms = htmlspecialchars(trim($_POST['rooms'] ?? 'None selected'));
        $package = htmlspecialchars(trim($_POST['package'] ?? 'Not selected'));
        $packageDesc = htmlspecialchars(trim($_POST['package_description'] ?? ''));
        $floorPlan = htmlspecialchars(trim($_POST['floor_plan'] ?? 'Not provided'));
        $idea = htmlspecialchars(trim($_POST['idea'] ?? 'Not provided'));
        $whatsappOptIn = htmlspecialchars(trim($_POST['whatsapp_optin'] ?? 'No'));

        $fullName = $name;
        $number = $phone;
        $company = 'N/A';
        $service = $package;
        $message = "BHK Type: $bhkType" . ($bhkSize ? " - $bhkSize" : "") . "\n\n" .
            "Rooms to Design: $rooms\n\n" .
            "Selected Package: $package" . ($packageDesc ? " - $packageDesc" : "") . "\n\n" .
            "Floor Plan: $floorPlan\n\n" .
            "Customer's Idea: $idea\n\n" .
            "WhatsApp Updates: $whatsappOptIn";
    } else {
        // Original contact form data
        $firstName = htmlspecialchars(trim($_POST['firstName'] ?? ''));
        $lastName = htmlspecialchars(trim($_POST['lastName'] ?? ''));
        $email = htmlspecialchars(trim($_POST['email'] ?? ''));
        $number = htmlspecialchars(trim($_POST['number'] ?? ''));
        $company = htmlspecialchars(trim($_POST['company'] ?? 'Not Provided'));
        $service = htmlspecialchars(trim($_POST['service'] ?? ''));
        $message = htmlspecialchars(trim($_POST['message'] ?? ''));

        $fullName = $firstName . ' ' . $lastName;
    }

    $mail = new PHPMailer(true);

    try {
        // --- Server Settings (Gmail) ---
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Gmail SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'spaced9einteriors@gmail.com';  // Your Gmail address
        $mail->Password = 'Shru@@1993';  // Your Gmail password
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;  // Gmail SSL port

        // --- Recipients ---
        $mail->setFrom('spaced9einteriors@gmail.com', 'Space Edge Interiors Website Form');
        $mail->addAddress('spaced9einteriors@gmail.com');
        $mail->addReplyTo($email, $fullName);

        // --- Content ---
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission from " . $fullName;

        // Create better formatted email body
        if ($isMultiStepForm) {
            $mail->Body = "
                <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
                    <h2 style='color: #B8860B; border-bottom: 2px solid #B8860B; padding-bottom: 10px;'>New Quote Request</h2>
                    
                    <h3 style='color: #4B3A26; margin-top: 20px;'>Customer Information</h3>
                    <table style='width: 100%; border-collapse: collapse;'>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Name:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$fullName</td></tr>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Email:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$email</td></tr>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Phone:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$number</td></tr>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>WhatsApp Updates:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$whatsappOptIn</td></tr>
                    </table>
                    
                    <h3 style='color: #4B3A26; margin-top: 20px;'>Project Details</h3>
                    <table style='width: 100%; border-collapse: collapse;'>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>BHK Type:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$bhkType" . ($bhkSize ? " - $bhkSize" : "") . "</td></tr>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Rooms to Design:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$rooms</td></tr>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Package:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong style='color: #B8860B;'>$package</strong>" . ($packageDesc ? "<br><small style='color: #666;'>$packageDesc</small>" : "") . "</td></tr>
                        <tr><td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Floor Plan:</strong></td><td style='padding: 8px; border-bottom: 1px solid #eee;'>$floorPlan</td></tr>
                    </table>
                    
                    <h3 style='color: #4B3A26; margin-top: 20px;'>Customer's Vision</h3>
                    <div style='background: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #B8860B;'>
                        <p style='margin: 0; white-space: pre-wrap;'>$idea</p>
                    </div>
                </div>
            ";
            $mail->AltBody = "New Quote Request\n\n" .
                "CUSTOMER INFORMATION\n" .
                "Name: $fullName\n" .
                "Email: $email\n" .
                "Phone: $number\n" .
                "WhatsApp Updates: $whatsappOptIn\n\n" .
                "PROJECT DETAILS\n" .
                "BHK Type: $bhkType" . ($bhkSize ? " - $bhkSize" : "") . "\n" .
                "Rooms to Design: $rooms\n" .
                "Package: $package" . ($packageDesc ? " - $packageDesc" : "") . "\n" .
                "Floor Plan: $floorPlan\n\n" .
                "CUSTOMER'S VISION\n$idea";
        } else {
            // Original contact form email format
            $mail->Body = "
                ### New Message from Website
                <p>*Name:* $fullName</p>
                <p>*Email:* $email</p>
                <p>*Phone:* $number</p>
                <p>*Company:* $company</p>
                <p>*Service of Interest:* $service</p>
                ---
                <p>*Message:*<br>" . nl2br($message) . "</p>
            ";
            $mail->AltBody = "Name: $fullName\nEmail: $email\nPhone: $number\nCompany: $company\nService: $service\n\nMessage:\n$message";
        }

        $mail->send();

        // Set success response
        $response['status'] = 'success';
        $response['message'] = 'Message sent successfully!';

    } catch (Exception $e) {
        // Set error response
        $response['status'] = 'error';
        $response['message'] = 'Message could not be sent. Please try again.';
        // Log the detailed error for debugging, but don't show it to the user
        error_log("Mailer Error: {$mail->ErrorInfo}");
    }
} else {
    // Handle invalid request method
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method.';
}

// Finally, echo the response as a JSON string
echo json_encode($response);
?>