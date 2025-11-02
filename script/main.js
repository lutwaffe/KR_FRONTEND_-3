document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const liveStatus = document.getElementById("liveStatus");

  if (openBtn && modal && overlay) {
    let previousFocus;

    openBtn.addEventListener("click", () => {
      previousFocus = document.activeElement;
      modal.hidden = false;
      overlay.hidden = false;
      modal.focus();
      liveStatus.hidden = false;
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    function closeModal() {
      modal.hidden = true;
      overlay.hidden = true;
      if (previousFocus) previousFocus.focus();
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });
  }
});
