// var a = 10
// var b = 20 
// console.log(window.a)
// console.log(this.b)
// console.log(b)
// console.log(a)
// console.log(window.alert())
// console.log(window.console.log())

var a = 10;
function b() {
    console.log("hello ! ")
    function c() {
        console.log("How are You !")
        console.log(a)
    }
    c()
 }

 b()