export const phoneFormatter = (phone: string) =>
  phone.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
