// ChildWell360 Frappe Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Contact support button handler
    const supportButton = document.querySelector('.support-button');
    if (supportButton) {
        supportButton.addEventListener('click', function() {
            alert('Please contact your administrator for support.\n\nEmail: support@childwell360.org\nPhone: +256-XXX-XXXXXX');
        });
    }

});