//  alert("Ayayay ga kitta");  
// // debugging
// console.log(2);
// // var
// let ayaya = "Dorime";
// let tahun = 2021
// console.log(ayaya,tahun)

//string 
let nama = "Ayaya ga kita";
console.log(nama);
// concate name
let firstName = 'Kyoko';
let lastName = 'Toshino';

let fullName = lastName + ' ' +  firstName;
console.log(fullName);
console.log(fullName[6]);

// length propety
console.log(fullName.length);
// uppercase
console.log(fullName.toUpperCase());

//index position
let indeks = firstName.indexOf("K");
console.log(indeks);

let lastindex = fullName.lastIndexOf('0');
console.log(lastindex)

// indeks cut
let indexcut = firstName.slice(1,4);
console.log(indexcut);

let subtring = firstName.substr(0,3);
console.log(subtring);

// replace
revers = firstName.replace('o','k'); //o pertama
console.log(revers);

// number
let radius = 10;
const pi = 3.14;
console.log(radius,pi);

// math operation
console.log(10/2);

let luas = pi * radius**2;
console.log(luas);

// order of operation B I D M A S
// bracket,index,division,multiplication,adding,subscritiom
// let bercak = 5 *(10 + 2);
let nilai = 10;
nilai += 5;
console.log(nilai);

// number and string concat

let like = 100;
let author = "Ayaya";
let title ="dorime";

let hasilakhir = "Nama blognya yaitu " + title + "by " + author + "mempunyai " + like + "like ";
console.log(hasilakhir);

//templet string
let hasilakhir2 = `Nama bolgnya yaitu ${title} by ${author} has ${like} likes`;
console.log(hasilakhir2);

// include to html
let html = `
        <h2>${title}</h2>
        <p> By ${author} </p>
        <span> This blog has ${like} likes</span>

`;
console.log(html);

//Arrays
let cars = ['Honda','Yamaha','Ferari','Galardo','Merchi'];
console.log(cars);
console.log(cars[1]);

//change array
cars[1] = 'Eventador';
console.log(cars[1]);
//random index
let random = ['Ayayya',20];
console.log(random.length);

//indexof
let hasil = cars.indexOf('Honda');
console.log(hasil);
// add new index
let concars = cars.concat('Suzuki','Niichan');
console.log(concars);
//push (mengetahui posisi elemen data pada index)
let hasill =cars.push('Suzzkiki');
console.log(hasill);
// pop
let hasill2 = cars.pop('Suzzkiki');
// null and undefinced 
let ages = null;
console.log(ages,ages + 3 , `umurnya adalah ${ages}`);
//boolean

let hasil3 = firstName.includes('K');
console.log(hasil3);

//comparison
let nansai = 20;
console.log(nansai == 30);

let namae = "watashi";
console.log(namae == "watashi");
//strict compasiem
console.log(nansai == '20');
console.log(nansai === '20'); //untuk cek string

//type convertion
console.log(typeof namae);

let nmb = Number("hello world");
console.log(nmb);

let str = String(50);
console.log(str);

let bool = Boolean('0'); //kalau kosong dia false
console.group(bool, typeof bool);

//control flow
//for loops
for(let i = 0; i <5; i++){
    console.log("Loop ke :", i);
}

console.log("Loop finish");

// array looping
const uchi1 = ['Mashiro','Kyoko','Uzaki'];
for(let i = 0 ; i< uchi1.length; i++){
    console.log(uchi1[i]);
    //send output to html
    let html1 = `<div> ${uchi1[i]}</div>`
    console.log(html1);
}

//while loops
let i = 0;
while(i <5){
    console.log(i);
    i++;
}

// do while
do{
    console.log(i);
    i++;
}while(i<5);

// if statment
let agge = 40;
if(agge = 40){
    console.log("omedetou gozaimasu");
}

const password = "syalalalla";
if(password.length == 8){
  if(password.length >= 11){  
    console.log("password anda sangat hebat");
  }if(password.length == 8){
      console.log("haik haik");
  }
}else{
    console.log("Gomenne");
}

// break and continue
const score =[70,45,67,24,83,78];
for(let i = 0; i< score.length; i++){
    if(score[i]=== 70){
        console.log("Lanjutkan");
        continue;
    }
    console.log("Score anda adalah " + score[i]);
    if(score[i] === 83){
        console.log("Selamat score anda adalah yang tertinggi");
        break; //kalau udah ketemu 83 maka looping akan berhenti
    }
}

//switch case statment
const grade = 'A';
switch(grade){
    case 'A' :
        if(grade == 'A'){
            console.log("Anda Lulus dengan Nilai A");
            break;
        }
    case 'B':
        if(grade == 'B'){
            console.log("Anda Lulus dengan Nilai B");
            break;
        }
    case 'C' :
        if(grade == 'C'){
            console.log("Anda Lulus dengan Nilai C");
            break;
        }
    case 'D':
        if(grade == 'D'){
            console.log("Anda Lulus dengan Nilai D");
            break;
        }
    default:
        console.log("Anda tidak lulus")
} 
// var selalu bersifat global