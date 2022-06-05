const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
// const sorter = null;
function sorter (arrNama, fungsi){
  let counter=0;
  fungsi(arrNama)
  let ubahUrutan= [];
  while (counter<arrNama.length){
    ubahUrutan.push(1+counter+". "+arrNama[counter]);
    counter++;
  }
  return ubahUrutan;
}


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
// const sortAscending = null;
let sortAscending=(param1) => {
    return param1.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;
let sortDescending=(param1) => {
    return param1.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
