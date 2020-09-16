let calculate = (point) => {
    if (point >= 81 && point <= 100) {
        return 'A'
    } else if (point >= 71 && point <= 80) {
        return 'B'
    } else if (point >= 61 && point <= 70) {
        return 'C'
    } else if (point >= 51 && point <= 60) {
        return 'D'
    } else if (point >= 0 && point <= 50) {
        return 'F'
    } else {
        return 'IDK'
    }
}
console.log(calculate(30))