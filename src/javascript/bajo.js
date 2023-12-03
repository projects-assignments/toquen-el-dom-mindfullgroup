// console.log("hello")

const context = new AudioContext();

function jsNota(frecuencia) {

    const o = context.createOscillator();

    g = context.createGain();

    o.connect(g);

    o.type = "triangle";
    o.frequency.value = frecuencia;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1.5);
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
            jsNota(73.4162);
            break;
        case 'w':
            jsNota(77.7817);
            break;
        case 's':
            jsNota(82.4069);
            break;
        case 'e':
            jsNota(87.3071);
            break;
        case 'd':
            jsNota(92.4986);
            break;
        case 'r':
            jsNota(97.9989);
            break;
        case 'f':
            jsNota(103.8262);
            break;
        case 'g':
            jsNota(110.0000);
            break;
        case 'y':
            jsNota(116.5409);
            break;
        case 'h':
            jsNota(123.4708);
            break;
        case 'u':
            jsNota(130.8128);
            break;
        case 'j':
            jsNota(138.5913);
            break;
    }
});
