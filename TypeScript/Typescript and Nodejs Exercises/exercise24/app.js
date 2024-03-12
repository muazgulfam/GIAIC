var car = "Toyota";
console.log("Is car == 'Toyotaa'? I predict False.");
console.log(car == "Toyotaa");
console.log("Is car != 'subaru'? I predict True.");
console.log(car != "Toyotaa");
console.log("Is 'String' == 'String'? I predict True.");
console.log("String" == "String");
console.log("Is 'String' != 'String'? I predict False.");
console.log("String" != "String");
console.log("car == car.toLowerCase? I predict False.");
console.log(car == car.toLowerCase());
console.log("car != car.toLowerCase? I predict True.");
console.log(car != car.toLowerCase());
var num = 10;
console.log("num == 10? I predict True.");
console.log(num == 10);
console.log("num != 10? I predict False.");
console.log(num != 10);
console.log("num < 20? I predict True.");
console.log(num < 20);
console.log("num > 20? I predict False.");
console.log(num > 20);
console.log("num <= 10? I predict True.");
console.log(num <= 10);
console.log("num >= 20? I predict False.");
console.log(num >= 20);
console.log("typeof(car || num ) === 'string'? I predict True.");
console.log(typeof (car || num) == 'string');
console.log("typeof(car && num ) === 'string'? I predict False.");
console.log(typeof (car && num) == 'string');
var arr = [1, 2, 3, 4, 5];
console.log("Array.isArray(arr)? I predict True.");
console.log(Array.isArray(arr));
console.log("Array.isArray(car)? I predict False.");
console.log(Array.isArray(car));
var isPresent = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 4) {
        isPresent = true;
    }
}
console.log("Is element 4 present in the Array?\n" + isPresent);
isPresent = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 6) {
        isPresent = true;
    }
}
console.log("Is element 6 present in the Array?\n" + isPresent);
