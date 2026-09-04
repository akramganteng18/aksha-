document.addEventListener("DOMContentLoaded", function () {

    // Efek animasi muncul saat halaman dibuka
    const elements = document.querySelectorAll(
        ".polaroid, .story-card, .timeline-item, .place-card, .love-note, .memory-card"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform += " translateY(30px)";

        setTimeout(() => {

            element.style.transition = "0.8s ease";

            element.style.opacity = "1";

            element.style.transform = element.style.transform
                .replace(" translateY(30px)", "");

        }, index * 120);

    });


    // Checkbox bucket list
    const checkboxes = document.querySelectorAll(
        ".bucket-item input"
    );

    checkboxes.forEach((checkbox) => {

        checkbox.addEventListener("change", function () {

            const text = this.nextElementSibling;

            if (this.checked) {

                text.style.textDecoration = "line-through";
                text.style.opacity = "0.5";

            } else {

                text.style.textDecoration = "none";
                text.style.opacity = "1";

            }

        });

    });

});