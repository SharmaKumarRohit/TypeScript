var person = "Rohit";
console.log(person);
var age = 23;
console.log(age);
var college = "B.C College";
console.log(college);
var name_ = "Rohit";
console.log(name_);
function randomNumber(n) {
    var nums = [];
    for (var i = 0; i < n; i++) {
        var num = Math.floor(Math.random() * 10);
        nums.push(num);
    }
    return nums;
}
console.log(randomNumber(5));
