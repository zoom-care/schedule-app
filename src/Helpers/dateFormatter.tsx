const dateFormatter = (date: string) => {
    return new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    })
}

export default dateFormatter;