for (let i = 1; i <= 20; i += 1) {
    console.log(i)
}
//<===================== (Loop  +1 to 20 ) ======================>

let temp = ['apple', 'banana', 'kiwi']
temp.forEach((Element, idx) => {
    console.log(idx + 1, Element)
});

let newValue = temp.map((Element, idx) => {
    return `${idx+1}.${Element}`
})
console.log(newValue)

//<===================== (Loop  Show each all ) ======================>