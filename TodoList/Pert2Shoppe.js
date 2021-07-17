// //function deklarasi -> feksibel
// function greeting(){
//     console.log("hello there");
// }
// greeting();

// //fungsi ekspresi -> harus dideklarasikan dulu(tydak felksibel harus dsimpan diatas)
// const test = function(){
//     console.log('Hallo Semua');
// }
// test();
// //Nilai pada fungsi dengan parameter
// const firstname = function(nama,age){
//     console.log(`Nama saya adalah ${nama} dan umur saya ${age} `);
// }
// firstname('Kyoko','12');
// // with default parameter
// const lastname = function(nama ='Toshino',age =12){
//     console.log(`Nama saya adalah ${nama} dan umur saya ${age} `);
// }
// lastname();
// //return values in function
// const lingkaran = function(jarijari,){
//     let luas = 3.14 * jarijari**2; //bisa juga langsung di return
//     console.log(luas);
//     return(luas); //untuk menadapatkan hasilnya
// }
// const luas = lingkaran(5);
// // arrow function
// const hitluas = (jari) =>{
//     return 3.14 * jari**2;
// }
// console.log(hitluas(5));
// //more simple arrow function
// const hitluas2 = jari => 3.14 * jari**2;
// console.log(hitluas2(5));

// //fuction to array
// const biaya = function(produk,pajak){ //prodak array
//     let total = 0;

//     for(let i =0; i< produk.length; i++){
//         total += produk[i] + (produk[i] * pajak);
//     }

//     return total;
// }
// console.log(biaya([80,80,70,70],0.1));

// //arraow function with array parameetr
// const biaya2 = (produk,pajak) => {
//     let total = 0;

//     for(let i =0; i< produk.length; i++){
//         total += produk[i] + (produk[i] * pajak);
//     }

//     return total;
// }
// console.log(biaya2([80,80,70,70],0.1));

// // function and method
// const name = 'Mashiro';

// //function
// const salam = () => 'Halo';
// console.log(salam());
// //methode
// let nama2 = name.toUpperCase();
// console.log(nama2);

// //callbacks & foreach
// const myfunc = (callbackfunc) =>{
//     let value = 50;
//     callbackfunc(value);
// }

// myfunc(function(value){
//     console.log(value);
// });

// //with arrow
// myfunc(value =>{
//     console.log(value);
// });

// //foreach
// let people =['Mashiro','Kyoko','Asta','Echida'];
// people.forEach(function(person){
//     console.log(person);
// })

// //with arrow
// people.forEach((person,index) => {
//     console.log(index,person); // + index
// })

// //modification
// const ul = document.querySelector('.people2');
// const people2 = ['Mashiro','Kyoko','Asta','Echida'];

// let html =``;

// people2.forEach(function(person){
//     //html templetes
//     html += `<li style ="color :blue">${person}</li>`;
// });
// console.log(html);
// // ul.innerHTML = html;

// //object literal

// let user = {
//     nama: 'andi',
//     umur : 30,
//     email : 'andi@gail.com',
//     location :'jakarta',
//     blogs: ['web','ml'],
    
//     login: function(){
//         console.log('the useer logged in');
//     },
//     logout: function(){
//         console.log('user has logged out');
//     },
//     logBlogs: function(){
//         console.log('user ini telah menulis')
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         })// semua yang ada dalam satu object
//     }
// };
// user.logBlogs();
// user.login();
// console.log(user.nama);
// user.umur =25;
// console.log(user.umur);
// console.log(user['email']);

// const key ='location';
// console.log(user[key]);

// user.logout();

// const blogs = {
//      title:'visual basic', likes: 30,
//      title: 'data sience', likes: 70 
// };
// console.log(blogs);

//perimitv type
// let score1 =50;
// let score2 = score1;
// console.log(score1,score2);

// score1 = 100;
// console.log(score1,score2);

//reference
// const user1 ={
//     nama: 'shirro',
//     age : 20
// }
// user2 = user1;
// console.log(user1,user2);

// user1.umur =40;  // semuanya keganti karena di tag ke alamatnya 
// console.log(user1,user2);

//DOM (Document Object Model)
// const para = document.querySelector('body > div:nth-child(2) > p:nth-child(2)');
// console.log(para);

// const paras = document.querySelectorAll('p');
// paras.forEach(parass =>{
//     console.log(para);
// })
//--------------------------------------------
// const title = document.getElementById('pagetitle') ;
// console.log(title);
// const eror = document.getElementsByClassName('eror')
// console.log(eror[1]);
// //change value
// const para = document.querySelector('p');
// //get text
// console.log(para.innerText);
// para.innerText = 'Konichiwa minna san';
// console.log(para.innerText);

//--------------------------------------------
//replace style sheet
const title = document.querySelector('h1');
title.setAttribute('style','margin: 50px;color: blue');

//satu satu edit style
// title.style.margin = '50px';
// title.style.color = 'red';
