  const openModal = document.getElementById("openModal");
        const modal = document.getElementById("modal");
        const closeModal = document.querySelector(".close-modal");

		 window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
		
        openModal.addEventListener("click", () => {
            modal.style.display = "block";
        });
        
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });