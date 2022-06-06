import { parseTimes, hasClinic } from '../providersHelper'

describe('providersHelper', () => {
	it('parseTimes', () => {
        const times = parseTimes("2020-09-09 17:00-21:00");
		expect(times).toEqual(["17:00", "21:00"])
	})

    it('doesnt hasClinic', () => {
        const clinicId = 2;
        const clinicsAvailable = [{id: 1}]
        const isClinicAvailable = hasClinic(clinicsAvailable, clinicId);
		expect(isClinicAvailable).toBeFalsy()
	})

    it('hasClinic', () => {
        const clinicId = 1;
        const clinicsAvailable = [{id: 1}]
        const isClinicAvailable = hasClinic(clinicsAvailable, clinicId);
		expect(isClinicAvailable).toBeTruthy()
	})
})
