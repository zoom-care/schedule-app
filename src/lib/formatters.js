const datetimeConverter = (datetime) => {

    const date = new Date(datetime);
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    
    // Format the time into the "4:45 pm" format
    return  `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

const phoneFormatter = (phoneNumber) => {
    const digits = phoneNumber.match(/\d/g).join('').slice(-10);
    return `(${digits.slice(0, 3)})-${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export {
    datetimeConverter,
    phoneFormatter
}