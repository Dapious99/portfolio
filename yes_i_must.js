const myName = ['omotosho','kamaldeen','opeyemi','titilope','akanmu','Dapious']
const digits = [27,64,80,39,1,3,2,4,68,90,2,4,6,5,9,8,10,7,23]
digits.pop()
digits.push('oruko')
digits.pop()
digits.push(23)
digits.shift()
digits.unshift(31)
digits.shift()
console.log(digits)
let mogbe = digits.sort((a,b) => a - b).reverse()
console.log(mogbe)
for(let digit of digits){
    console.log(digit % 2 === 0)
}
if(myName.includes(a)){
    return owanbe
}else{
    return myName.length
}
let call = myName.filter(long => long % 2 !== 0)
console.log(call)


function spelling(word){
    let result = []
    let n = 0
    for (c of word)
    result.push(c.slice(0, ++n))
    return result
}
console.log(spelling("bee"))
console.log(spelling("happy"))
console.log(spelling("eagerly"))