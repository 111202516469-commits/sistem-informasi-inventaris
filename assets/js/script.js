
/* JAVASCRIPT UTAMA SISTEM INVENTARIS */

// 1. Menampilkan tanggal dan waktu
function tampilkanTanggalWaktu() {
    const elemenWaktu = document.getElementById("tanggalWaktu");

    if (!elemenWaktu) {
        return;
    }

    const sekarang = new Date();

    const tanggal = sekarang.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const waktu = sekarang.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    elemenWaktu.textContent = tanggal + " | " + waktu;
}

// 2. Memperbarui jam setiap detik
tampilkanTanggalWaktu();
setInterval(tampilkanTanggalWaktu, 1000);

// 3. Tombol untuk membuka dan menutup sidebar
const tombolMenu = document.getElementById("menuToggle");

if (tombolMenu) {
    tombolMenu.addEventListener("click", function () {
        const layout = document.querySelector(".layout");

        if (layout) {
            layout.classList.toggle("sidebar-hidden");
        }
    });
}

// 4. Validasi form agar kolom wajib diisi
document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
        const kolomWajib = form.querySelectorAll("[required]");
        let valid = true;

        kolomWajib.forEach(function (kolom) {
            if (!kolom.value.trim()) {
                valid = false;
                kolom.focus();
            }
        });

        if (!valid) {
            event.preventDefault();
            alert("Mohon isi semua kolom yang wajib diisi!");
        }
    });
});

// 5. Pesan konfirmasi sebelum menghapus data
document.querySelectorAll(".btn-hapus").forEach(function (tombol) {
    tombol.addEventListener("click", function (event) {
        const yakin = confirm("Apakah kamu yakin ingin menghapus data ini?");

        if (!yakin) {
            event.preventDefault();
        }
    });
});
