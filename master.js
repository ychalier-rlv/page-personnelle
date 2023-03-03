window.addEventListener("load", () => {

    function setupEye(eyeId) {
        const element = document.getElementById(eyeId);
        const boundingClientRect = element.getBoundingClientRect();
        return {
            element: element,
            origine: {
                x: boundingClientRect.x + boundingClientRect.width / 2,
                y: boundingClientRect.y + boundingClientRect.height / 2
            },
        }
    }

    const eyes = [setupEye("Eye1"), setupEye("Eye2")];
    const radius = 5;

    window.addEventListener("mousemove", (event) => {
        eyes.forEach(eye => {
            const angle = Math.atan2(event.clientY - eye.origine.y, event.clientX - eye.origine.x);
            eye.element.style.transform = `translate(${ radius * Math.cos(angle) }px, ${ radius * Math.sin(angle) }px)`;
        });
    });

});