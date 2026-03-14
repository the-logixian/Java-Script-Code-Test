function isLeap(year) {
    if (year % 4 === 0) {
        return ( year + " Is a leap year.");
    } 
    if (year % 100 === 0  && year % 400 === 0) {
        return (year + " Is a leap year");
    } else {
        return (year + " Is not a leap year");
    }
}

console.log(isLeap(2020));