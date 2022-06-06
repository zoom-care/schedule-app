import providersSelector from '../providersSelector'

describe('providersSelector', () => {
	it('test base case', () => {

		const mockState = {
            clinics: {
                providers: [{
                    id: 1,
                    address: 'address',
					city: 'city',
					name: 'name',
					state: 'state',
					zipcode: 123,
                }],
                appointments: [
                    {
                        clinicId: 1,
                        startTime: "2020-09-22 10:00-17:00",
                        provider: {
                            name: 'provider_name',
                            credentials: 'asd',
                            phoneNumber: 111,
                        }
                    }
                ]
            }
		}

		const selectorResult = {
			providersData: [{
                address: "address",
                city: "city",
                clinicId: 1,
                credentials: "asd",
                name: "name",
                phoneNumber: 111,
                providerName: "provider_name",
                startTimes: [
                    "10:00",
                    "17:00",
                ],
                state: "state",
                zipCode: 123,
            }]
		}

		const selected = providersSelector(mockState)
		expect(selected).toEqual(selectorResult)
	})
})
