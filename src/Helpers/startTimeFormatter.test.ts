import { startTimeFormatter } from './startTimeFormatter'

describe('startTimeFormatter', () => {
  it('Converts "2020-02-08 16:15" correctly', () => {
    const input = '2020-02-08 16:15'
    const expectedOutput = ['4:15 PM']
    const result = startTimeFormatter(input)
    expect(result).toEqual(expectedOutput)
  })

  it('Converts "2023-05-15 16:45-04:45" correctly', () => {
    const input = '2023-05-15 16:45-16:45'
    const expectedOutput = ['4:45 PM', '4:45 PM']
    const result = startTimeFormatter(input)
    expect(result).toEqual(expectedOutput)
  })
})
