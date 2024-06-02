// Hàm kiểm tra email hợp lệ
export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Hàm kiểm tra số điện thoại hợp lệ
export function validatePhone(phone) {
    const re = /^(0|\+84)(3[2-9]|5[2689]|7[0-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    return re.test(String(phone));
}

// Hàm kiểm tra mật khẩu hợp lệ (ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số)
export function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(String(password));
}

// Hàm kiểm tra địa chỉ hợp lệ (tối thiểu 5 ký tự)
export function validateAddress(address) {
    return address.length >= 5;
}

// Hàm kiểm tra toàn bộ form
export function validateForm(data) {
    const errors = {};

    if (!validateEmail(data.email)) {
        errors.email = 'Email không hợp lệ.';
    }

    if (!validatePhone(data.phone)) {
        errors.phone = 'Số điện thoại không hợp lệ.';
    }

    if (!validatePassword(data.password)) {
        errors.password = 'Mật khẩu phải chứa ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số.';
    }

    if (!validateAddress(data.address)) {
        errors.address = 'Địa chỉ phải chứa ít nhất 5 ký tự.';
    }

    return errors;
}
