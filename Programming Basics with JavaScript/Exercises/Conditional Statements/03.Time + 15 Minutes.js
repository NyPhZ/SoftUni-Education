function demo(input) {
    let hours = Number(input[0])
    let minutes = Number(input[1]) + 15;
    if (minutes > 59) {
        hours = hours + 1
        minutes = minutes - 60
    }

    if (minutes < 10) {
        minutes = (`0${minutes}`)
    }

    if (hours > 23) {
        hours = hours - 24;
    }
    console.log(`${hours}:${minutes}`)



}