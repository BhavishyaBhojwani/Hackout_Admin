// Validate phone number
exports.validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/; // Assuming a 10-digit phone number format
    return phoneRegex.test(phoneNumber);
};

// Validate gender
exports.validateGender = (gender) => {
    const validGenders = ['male', 'female', 'other'];
    return validGenders.includes(gender);
};

// Validate role-specific details
exports.validateRoleDetails = (role, details) => {
    if (role === 'farmer') {
        return details.iCertifiedNumber && /^[0-9]+$/.test(details.iCertifiedNumber); // Assuming certified number is numeric
    } else if (role === 'buyer') {
        return details.gstNumber && /^[0-9A-Z]+$/.test(details.gstNumber); // Assuming GST number has alphanumeric format
    }
    return false;
};
