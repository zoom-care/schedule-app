export function parseArrayToMap(array: Record<string, any>[], keyField: string): Map<string | number, Object[]> {
  return array.reduce((map: Map<string | number, Object[]>, obj) => {
    const keyValue = obj[keyField]
    const mapArray = map.get(keyValue) ?? []
    mapArray.push(obj)
    !map.has(keyValue) && map.set(keyValue, mapArray)
    return map
  }, new Map())
}

export function parseDateStringToLocaleTime(dateString: string): string {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  })
}

export function parseIntPhoneToLocalePhone(phone: string): string {
  return phone.replace(/^(\+\d{1,3}) (\d{3})-(\d{3})-(\d{4})$/, "($2) $3-$4");
}
