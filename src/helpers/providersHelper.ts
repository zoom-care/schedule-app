function parseTimes(time: string) {
    const timesExp = RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s(.*)$/g).exec(time);
    if(timesExp){
        const times = timesExp[1];
        return times.split('-')
    }
}

export {
    parseTimes
}