import { parseArrayToMap, parseDateStringToLocaleTime, parseIntPhoneToLocalePhone } from "./ParserService";

describe('parseArrayToMap', () => {
  it('should return a Map object with the correct mapping', () => {
    const inputArray = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' }
    ]

    const expectedMap = new Map([
      [1, [{ id: 1, name: 'John' }]],
      [2, [{ id: 2, name: 'Doe' }]]
    ])

    expect(parseArrayToMap(inputArray, 'id')).toEqual(expectedMap)
  })
})

describe('parseDateStringToLocaleTime', () => {
  it('parses an ISO string date to time HH:MM format', () => {
    const input = '2020-02-08 20:30-07:00'
    const output = parseDateStringToLocaleTime(input)
    expect(/^([01]?\d):([0-5]\d) (AM|PM)$/.test(output)).toBeTruthy()
  })
})

describe('parseIntPhoneToLocalePhone', () => {
  it('parses a phone number with country code to a localized phone number', () => {
    const input = '+1 123-456-7890'
    const expectedOutput = '(123) 456-7890'
    const actualOutput = parseIntPhoneToLocalePhone(input)
    expect(actualOutput).toEqual(expectedOutput)
  })

  it('should not parse the original phone number if format is incorrect', () => {
    const input = '123-456-7890'
    const expectedOutput = '123-456-7890'
    const actualOutput = parseIntPhoneToLocalePhone(input)
    expect(actualOutput).toEqual(expectedOutput)
  })
})

