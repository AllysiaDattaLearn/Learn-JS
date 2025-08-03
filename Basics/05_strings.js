const gameName = new String('allysia')
console.log(gameName[0]) //a this is not an Array, its key value pair
console.log(gameName.toUpperCase()) //ALLYSIA
console.log(gameName.length) //7
console.log(gameName.charAt(2)) //l
console.log(gameName.indexOf('l')) //1

console.log(gameName.substring(0, 4)) //ally 4th is not inculded. if any negative value is provided it will be taken as zero
console.log(gameName.slice(-4, 6)) //ysi

const newString = "      Allysia      "
console.log(newString.trim()) //remove start and end space, you can also do trimStart trimEnd
console.log(newString.includes("ysi")) //true

const url = "www.allysia%20DataTransfer.com"
console.log(url.replace("%20" , "__")) //www.allysia__DataTransfer.com

const checkName = "Allysia_Datta_test_automation"
console.log(checkName.split("_")) //Array ['Allysia', 'Datta', 'test', 'automation']

console.log(`this is new and good way ${url} most used and you can twick things like ${newString.trim()} this`)


