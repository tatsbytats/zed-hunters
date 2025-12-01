<?php
// Read GET parameters with validation
$steamID  = isset($_GET['steamid']) ? $_GET['steamid'] : '';
$userID   = isset($_GET['userid']) ? $_GET['userid'] : '';
$password = isset($_GET['password']) ? $_GET['password'] : '';

// Validate that all fields are provided
if (empty($steamID) || empty($userID) || empty($password)) {
    echo "Error: Missing required parameters!";
    exit;
}

// Hostinger Trigger URL (GET only)
$triggerUrl = "YOUR_HOSTINGER_TRIGGER_URL";

// Build GET URL with parameters
$fullUrl = $triggerUrl . "?steamid=" . urlencode($steamID) .
           "&userid=" . urlencode($userID) .
           "&password=" . urlencode($password);

// Make GET request with error handling
$response = @file_get_contents($fullUrl);

// Check if request was successful
if ($response === false) {
    echo "Error: Unable to connect to the trigger URL. Please check your configuration.";
    exit;
}

// Show confirmation
echo "Your whitelist request has been submitted!";
?>
