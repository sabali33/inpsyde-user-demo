window.addEventListener("load", () => {
	const close_button = document.querySelector(".close-modal");
	const modal_wrap = document.querySelector(
		".wp-block-eliasu-inpsyde-user .modal-wrap"
	);
	const card = document.querySelector(
		".wp-block-eliasu-inpsyde-user .user-card"
	);
	if (close_button) {
		close_button.addEventListener("click", () => {
			modal_wrap.classList.remove("inpsyde-user-active");
		});
	}
	if (card) {
		card.addEventListener("click", () => {
			modal_wrap.classList.add("inpsyde-user-active");
		});
	}
});
