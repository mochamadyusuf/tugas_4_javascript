// tinggi badan siswa
let evan = 170;
let rio = 180;
let adi = 160;

// menentukan siswa dengan tinggi badan paling tertinggi
if (evan > rio && evan > adi) {
  console.log("tinggi badan evan paling tinggi");
} else if (rio > evan && rio > adi) {
  console.log("tinggi badan rio paling tinggi");
} else if (adi > evan && adi > rio) {
  console.log("tinggi badan adi paling tinggi");
} else {
  console.log("tinggi badan sama");
}
