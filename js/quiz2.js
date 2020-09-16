// < 1 >
for (i = 1; i <= 20; i += 1) {
    console.log(i)
}
// < 2 >                       ( ? == if ถ้าทำหน้าผ่าน ออกหลัง)
for (i = 1; i <= 20; i += 1) {
    console.log(i % 2 === 0 ? i : '')
}
// < 3 >
let mul = [-1, 2, 3, 56, 6, -93, 0, 4]
mul.forEach((element) => {
        console.log(element * 2)
    })
    // < 4 >
let filters = [10, 13, 44, 55, 89, 0, 12, 1].filter(el => el % 2 === 0 ? el : '')
console.log(filters)