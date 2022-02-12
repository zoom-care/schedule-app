export const formatPhoneNumber = (phoneNumber: string): string => {
    phoneNumber = phoneNumber.replace(/^\+\d\s/, '').replaceAll('-','')
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}