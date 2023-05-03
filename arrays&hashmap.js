// let data = [2,4,6,8,10,12,13,14,15,16,17,18,19,20,21,22]
// data.shift()
// data.unshift(23,28)
// data.pop()
// data.push(26,61)
// data.forEach(function(val){
    // console.log(val)
// })
// data.sort(function(a,b){
    // return a - b
// })
// data.slice(1,9)
// data.splice(0,3)
// data.map(function(val){
    // return val * 4
// })
// data.filter(val => val % 2 === 0)

political_science_dept = {   
    firstName : "Kamalideen",
}




function myFunction(arr){
let result = arr.every(val => val === arr[0])
return result
}
myFunction([true, true, true, true])
myFunction(['test', 'test', 'test'])

// Count number of negative values in array
// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
function myFunction(a){
return a.filter(val => val < 0).length
}
myFunction([1,-2,2,-4])


// Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
function myFunction(a){
return a.reduce((acc,val) => acc + val, 0);
}
myFunction([10,100,40])
myFunction([10,100,1000,1])


// Return the average of an array of numbers
// Write a function that takes an array of numbers as argument. It should return the average of the numbers.
function myFunction(arr){
return arr.reduce((me , val) => me + val) / arr.length
}
myFunction([10,100,40])
myFunction([10,100,1000])

// Return the longest string from an array of strings
// Write a function that takes an array of strings as argument. Return the longest string.
function myFunction(arr){
    let longest = "";
        arr.filter(function(word) {
        if(word.length > longest.length) {
            longest = word;
        }
    });
        return longest
}
myFunction(['help', 'me'])
myFunction(['I', 'need', 'candy'])


// Return last n array elements
// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
function myFunction(a, n){
return a.slice(- n)
}
myFunction([1, 2, 3, 4, 5], 2)
myFunction([1, 2, 3], 6)
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)



// function maja(arr){
//     let newArr = []
//     arr.forEach(function (a,b){
//         newArr.push(a.length)
//     });
// // }
//     function isAppUsed(social,check){
//         return social.includes(check)
//     }
// console.log(isAppUsed(["Twitter", "Calculator"], "Calculator"))
// console.log(isAppUsed(["Clock", "Calculator"], "Safari"))

function getYear(year, check){
    return year.find(yearval => yearval === check)
}
console.log(getYear([2019, 2020, 2021], 2020))
console.log(getYear([2019, 2020, 2021], 1990))

// Sort array by object property
// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
function myFunction(arr){
return arr.sort((a,b) => a.b - b.b)
}
myFunction([{a:1,b:2},{a:5,b:4}])
myFunction([{a:2,b:10},{a:5,b:4}])
myFunction([{a:1,b:7},{a:2,b:1}])


// Remove a specific array element
// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
function myFunction(a, b){
return a.filter(val => val !== b)
}
myFunction([1,2,3], 2)
myFunction([1,2,'2'], '2')
myFunction([false,'2',1], false)
myFunction([1,2,'2',1], 1)


// object
// Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
function myFunction(a, b){
return a.hasOwnProperty(b)
}
myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:'b',z:'c'},'a')
myFunction({x:'a',y:'b',z:undefined},'z')

// Check if property exists in object and is truthy
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
function myFunction (a, b)
{
return Object.hasOwn(a,b) && Boolean(a[b])
return Boolean(a[b])
}
myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:null,z:'c'},'y')
myFunction({x:'a',b:'b',z:undefined},'z')

// let datas = [1,2,3,4,5,6,7,8,9,10,11, true, false, false, "sidiqah","Opeyemi"]
// datas.forEach(function(data){
//     if(typeof(data) === "string"){
//         return typeof(data)
//     }
// })
// console.log(data)
function me(datas){
const mine = datas.filter(function(data){
    return data % 2
});
 return mine 
}
console.log(me([1,2,3,4,5,6,7,8,9,10,11, true, false, false, "sidiqah","Opeyemi"]))


function me(datas){
    const mine = datas.sort(function(a,b){
        return a - b
    });
     return mine
    }
    console.log(me([1,2,3,4,5,6,7,8,9,10,11, true, false, false, "sidiqah","Opeyemi"]))




    let str = "The man in the kitchen wants meat"
    let res = ''
    let skipped = ''
    for(let i = 0; i < str.length; i++){
        if(str[1] === 'n'){
            skipped = skipped + str.at(i)
            continue
        }
        res = res + str.at(i)
    }
    
    console.log("skipped", skipped)
    console.log("res", res)
    
    const getSomething = (value) => {
        for(val of value){
               console.log(val)   
        }
        return val
    }
    console.log(getSomething(['Mango','Grape','Apple','Orange','Watermelon'])) 

    const data = [1,4,2,38, "troops", "apple", "orange"]
    for(let i = data.length; i <= 0; i--){
        console.log(data[i])
    }
    
    function squareSum(numbers){
        let res = 0
        let squared = numbers.forEach(number => {
          let squaredNum = number * number
          res = res + squaredNum
        });
        return res
      }

      function betterThanAverage(classPoints, yourPoints) {
        // Your code here
        let point = classPoints.reduce((acc,cp) =>{
          return acc + cp
        } ,0)
        
       return ((point / classPoints.length) < yourPoints) ? true : false 
        
      }

      const obj ={
        name: "Niyi",
        age: 23,
        gender: "male",
        likes: ['football', 'ping-pong', 'money', 'jolof'],
        friends: [{name: "Ola", gender: 'male', likes: ['ping-pong', 'money', 'jolof']}, {}, {name: "Player", gender: 'male', likes: ['ping-pong', 'coding', 'jolof']}]
    }
    
    console.log(obj.friends[2].likes[1])
    // Object.keys(obj)
    Object.values(obj)

// Sum object values
// Write a function that takes an object (a) as argument. Return the sum of all object values.
function myFunction(a){
let kobosky = Object.values(a);
return kobosky.reduce((acc,cv) => acc + cv, 0);
}
myFunction({a:1,b:2,c:3})
myFunction({j:9,i:2,x:3,z:4})
myFunction({w:15,x:22,y:13})

// Remove a property from an object
// Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'
function myFunction(obj){
delete obj.b;
return obj
}
myFunction({ a: 1, b: 7, c: 3 })
myFunction({ b: 0, a: 7, d: 8 })
myFunction({ e: 6, f: 4, b: 5, a: 3 })

// Creating Javascript objects three
// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
function myFunction (a, b){
const obj = {};
  a.forEach((element, index) => {
    obj[element] = b[index];
  });
  return obj
}
myFunction(['a','b','c'],[1,2,3])
myFunction(['w','x','y','z'],[10,9,5,2])
myFunction([1,'b'],['a',2])

function myFunction(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
 }

//  Multiply all object values by x
// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
function myFunction (a, b){
const res = {}
for(let keys in a){
res[keys] = a[keys] * b}
return res
}
myFunction({a:1,b:2,c:3},3)
myFunction({j:9,i:2,x:3,z:4},10)
myFunction({w:15,x:22,y:13},5)

function myFunction(a, b) {
    return Object.entries(a).reduce((acc, [key, val]) => {
        return { ...acc, [key]: val * b };
    }, {});
 }

//  Creating Javascript objects two
// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
function myFunction(a, b){
return { [a]: b }
}
myFunction('a','b')
myFunction('z','x')
myFunction('b','w')

// const [x,y,z,...rest] = [64,71,24,89,90,2,4,6,8,10,12,14,16,17,18,20,21,23]
// for(let i = 0; i < rest.length; i++){
    // console.log(rest[i])
// }
 
// const [x,y,z,...rest] = [64,71,24,89,90,2,4,6,8,10,12,14,16,17,18,20,21,23]
// let me = rest.find(rem => rem % 2 === 0)
// console.log(me)

const [x,y,z,...rest] = [64,71,24,89,90,2,4,6,8,10,12,14,16,17,18,20,21,23]
let me = rest.every(rem => rem % 2 === 0)
console.log(me)