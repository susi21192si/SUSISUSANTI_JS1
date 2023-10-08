/* if,else,nested if */
var nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
  
  // Nested if untuk mengecek apakah perlu perbaikan
  if (nilai < 60) {
    console.log("Anda perlu belajar lebih keras untuk memperbaiki nilai Anda.");
  }
}


/* switch case */ 
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu.");
    break;
  case "Kamis":
    console.log("Hari ini adalah hari Kamis.");
    break;
  case "Jumat":
    console.log("Hari ini adalah hari Jumat.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu.");
    break;
  case "Minggu":
    console.log("Hari ini adalah hari Minggu.");
    break;
  default:
    console.log("Hari yang Anda masukkan tidak valid.");
}


/* for statement */ 
// Contoh 1: Perulangan 1 hingga 10
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// Contoh 2: Menampilkan bilangan genap dari 1 hingga 20
for (var j = 2; j <= 20; j += 2) {
  console.log(j);
}

// Contoh 3: Menampilkan bilangan ganjil dari 1 hingga 20
for (var k = 1; k <= 20; k += 2) {
  console.log(k);
}


/* while, do while  */ 
// while
var i = 1;

while (i <= 5) {
  console.log("Iterasi ke-" + i);
  i++;
}
//do while 
var j = 1;

do {
  console.log("Iterasi ke-" + j);
  j++;
} while (j <= 5);


/* fungction  */ 
// fungction untuk menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
  var luas = Math.PI * Math.pow(jariJari, 2);
  return luas;
}

// fungction untuk menghitung keliling lingkaran
function hitungKelilingLingkaran(jariJari) {
  var keliling = 2 * Math.PI * jariJari;
  return keliling;
}

// Menggunakan fungction di atas
var jariJariLingkaran = 5;

var luasLingkaran = hitungLuasLingkaran(jariJariLingkaran);
console.log("Luas lingkaran dengan jari-jari " + jariJariLingkaran + " adalah " + luasLingkaran.toFixed(2));

var kelilingLingkaran = hitungKelilingLingkaran(jariJariLingkaran);
console.log("Keliling lingkaran dengan jari-jari " + jariJariLingkaran + " adalah " + kelilingLingkaran.toFixed(2));