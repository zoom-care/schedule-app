function parseTimes(time: string) {
    const timesExp = RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s(.*)$/g).exec(time);
    if(timesExp){
        const times = timesExp[1];
        return times.split('-')
    }
}

function hasClinic(clinicsAvailable: Array<any>, clinicId: Number):boolean {
    return clinicsAvailable.some((clinic: any) => clinic.id === clinicId)
}

export {
    parseTimes,
    hasClinic,
}