window.addEventListener("load", () => {

    function setupEye(eyeId) {
        const element = document.getElementById(eyeId);
        const boundingClientRect = element.getBoundingClientRect();
        return {
            element: element,
            originAbsolute: {
                x: boundingClientRect.x + boundingClientRect.width / 2,
                y: boundingClientRect.y + boundingClientRect.height / 2
            },
            originRelative: {
                x: parseFloat(element.getAttribute("cx")),
                y: parseFloat(element.getAttribute("cy")),
            }
        }
    }

    const eyes = [setupEye("Eye1"), setupEye("Eye2")];
    const radius = 5;

    window.addEventListener("mousemove", (event) => {
        eyes.forEach(eye => {
            const dx = event.clientX - eye.originAbsolute.x;
            const dy = event.clientY - eye.originAbsolute.y;
            const angle = Math.atan2(dy, dx);
            eye.element.setAttribute("cx", eye.originRelative.x + radius * Math.cos(angle));
            eye.element.setAttribute("cy", eye.originRelative.y + radius * Math.sin(angle));
        });
    });


});