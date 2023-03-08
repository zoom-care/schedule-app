const mockAppointmentSlots = [
    {
        id: 1,
        clinicId: 1,
        durationInMinutes: 30,
        provider: {
            id: 1,
            name: "Provider A",
            credentials: "MD",
            language: "English",
            phoneNumber: "(503) 123-4567"
        },
        startTime: "2020-02-08 16:15"
    },
    {
        id: 2,
        clinicId: 1,
        durationInMinutes: 15,
        provider: {
            id: 2,
            name: "Provider B",
            credentials: "PA-C",
            language: "English, Spanish",
            phoneNumber: "(123) 456-7890"
        },
        startTime: "2020-02-08 04:45-16:45"
    },
    {
        id: 3,
        clinicId: 2,
        durationInMinutes: 30,
        provider: {
            id: 2,
            name: "Provider B",
            credentials: "MD",
            language: "English",
            phoneNumber: "(430) 345-6789"
        },
        startTime: "2020-02-10 10:00-07:00"
    }
]

export { mockAppointmentSlots }
