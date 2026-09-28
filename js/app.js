document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ABRIR LA INVITACIÓN
    // =========================

    const openButton = document.getElementById("openInvitation");
    const invitation = document.getElementById("invitation");

    if (openButton && invitation) {
    openButton.addEventListener("click", function () {
        invitation.classList.add("is-open");
        openButton.style.display = "none";

        setTimeout(() => {
    window.scrollTo({
        top: invitation.offsetTop,
        behavior: "smooth"
    });
}, 100);
    });
}


    // =========================
    // CUENTA REGRESIVA
    // =========================

    const eventDate = new Date(2026, 9, 3, 17, 0, 0).getTime();

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance <= 0) {
            if (daysElement) daysElement.textContent = "0";
            if (hoursElement) hoursElement.textContent = "0";
            if (minutesElement) minutesElement.textContent = "0";
            if (secondsElement) secondsElement.textContent = "0";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
        if (secondsElement) secondsElement.textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    // =========================
    // CONFIRMACIÓN
    // =========================

    const confirmButton = document.getElementById("confirmButton");
    const confirmationMessage =
        document.getElementById("confirmationMessage");

    if (confirmButton && confirmationMessage) {

        confirmButton.addEventListener("click", function () {

            confirmButton.textContent = "✓ Asistencia confirmada";

            confirmationMessage.textContent =
                "¡Gracias por confirmar! " +
                "Te esperamos para celebrar a Emily. 🦋🎂";

            confirmButton.disabled = true;
        });
    }

});
