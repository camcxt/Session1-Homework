// bai1
let name = prompt("Hi there, your name please?");
alert("hello "+name);

// bai2
let firsttname = prompt("Enter your first name ");
let lastname = prompt("Enter your last name ");
alert("hello "+lastname+" "+firsttname);

// bai 3
let a = Number(prompt("Nhập độ dài cạnh của một hình vuông: "));
alert("Diện tích hình vuông là: "+(a*a));

// bai4
let r = Number(prompt("Nhập bán kính của một hình tròn: "));
const pi = 3.14;
const s = r*r*pi;
alert("Diện tích hình tròn là: "+s);

//bai 5
let celsius = Number(prompt("Nhập nhiệt độ C: "));
const Fahrenheit = celsius * 1.8 + 32;
alert(celsius+" = "+Fahrenheit);