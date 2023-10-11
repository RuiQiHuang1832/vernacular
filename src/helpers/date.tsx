//Format eg. "September 10, 2015"
export function getCurrentDate(): string {
    const currentDate: Date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    return formattedDate
}

