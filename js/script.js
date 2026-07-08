/* ==========================================================================
   FUNGSI OPERASIONAL MODAL (POP-UP) - NPC JAKARTA BARAT
   ========================================================================== */

/**
 * Fungsi untuk membuka modal berdasarkan ID uniknya
 * @param {string} modalId - ID dari elemen modal-overlay di HTML
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active'); // Menampilkan modal dengan CSS
        document.body.style.overflow = 'hidden'; // Mengunci scroll halaman utama agar user fokus
    }
}

/**
 * Fungsi untuk menutup modal berdasarkan ID uniknya
 * @param {string} modalId - ID dari elemen modal-overlay di HTML
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active'); // Menyembunyikan modal
        document.body.style.overflow = 'auto'; // Mengaktifkan kembali scroll halaman utama
    }
}

/**
 * Fitur Aksesibilitas Tambahan: Menutup modal yang sedang aktif 
 * ketika pengguna menekan tombol 'Esc' di keyboard.
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});