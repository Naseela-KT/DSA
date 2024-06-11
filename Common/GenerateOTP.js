function generateOTP() {
    const min=100000;
    const max=999999;
    const otp=Math.floor(Math.random()*(max-min+1))+min
    return otp
}

// Example usage
const otp = generateOTP();
console.log("Generated OTP:", otp);