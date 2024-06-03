export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export function validatePhone(phone) {
    const re = /^(0|\+84)(3[2-9]|5[2689]|7[0-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    return re.test(String(phone));
}

export function validateForm(data) {
    const errors = {};

    if (!data.name) {
        errors.name = 'Name is required.';
    }

    if (!validateEmail(data.email)) {
        errors.email = 'Invalid email address.';
    }

    if (!validatePhone(data.phone)) {
        errors.phone = 'Invalid phone number.';
    }

    if (!data.subject) {
        errors.subject = 'Subject is required.';
    }

    if (!data.message) {
        errors.message = 'Message is required.';
    }

    if (!data.address) {
        errors.address = 'Address is required.';
    }

    if (!data.note) {
        errors.note = 'Note is required.';
    }

    return errors;
}
