// =====================================================================================================
// // CLOSURES
// function init() {
//   let nama = "Dhea Ramdani";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// let add = (function () {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// // FACTORY FUNCTION
// // Membuat function sesuai dengan function yang lain
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("PAGI");
// let selamatSiang = ucapkanSalam("SIANG");
// let selamatMalam = ucapkanSalam("MALAM");

// selamatPagi("dhea");
// =====================================================================================================
