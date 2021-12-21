const jamMasuk = prompt('masukan jam masuk?');
const jamKeluar = prompt('masukan jam keluar?');
const selisih = Number(jamKeluar) - Number(jamMasuk);
const tarifAwal = 3000;
if (selisih <= 2) {
    alert(`biaya keluaran : ${tarifAwal}`);
}
else {
    const tarifAkhir = tarifAwal + (selisih - 2) * 1000;
    alert(`Total biaya : ${tarifAkhir}`);
}