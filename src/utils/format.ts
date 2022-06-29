import moment from "moment";

// Formats to a US phone number
export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanedNumber = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleanedNumber.match(/^(\d|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? `${match[1]} ` : "1 ";
    return ["+", intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
      ""
    );
  }
  return cleanedNumber;
};

//Documentation format --> https://momentjs.com/docs/#/displaying/format/
export function formatDate(date: any, newFormat: any) {
  return moment(date).format(newFormat);
}
