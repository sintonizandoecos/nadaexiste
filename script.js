document.addEventListener("DOMContentLoaded", function () {
    // Lista de tracks con sus respectivos embeds de Bandcamp
    const tracks = [
        "https://bandcamp.com/EmbeddedPlayer/track=2162206116/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
		"https://bandcamp.com/EmbeddedPlayer/track=4139056394/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
		"https://bandcamp.com/EmbeddedPlayer/track=1183430845/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/",
		"https://bandcamp.com/EmbeddedPlayer/track=2259769743/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
    ];

    // Selección aleatoria de un track
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    const iframe = document.getElementById("random-iframe");
    iframe.src = randomTrack;

    // Fragmentos aleatorios para la biografía surrealista
    const biographyStart = [
        "Nada Existe es un eco atrapado en la resonancia del tiempo.",
        "En un rincón olvidado del universo, Nada Existe nació de una disonancia cósmica.",
        "Cada aparición de Nada Existe es un pliegue en la realidad que nadie recuerda haber visto.",
        "El colectivo se originó en una tormenta de datos perdida en un servidor extraterrestre.",
        "Algunos dicen que Nada Existe es el resultado de un glitch en la historia del arte.",
        "Nada Existe no fue creado, simplemente se filtró en nuestra dimensión.",
        "Desde la intersección de lo inaudito y lo invisible, Nada Existe encontró su voz.",
        "El proyecto surgió de un error en la simulación, un eco de datos corrompidos.",
        "Se dice que Nada Existe comenzó cuando una onda de radio antigua chocó con un sintetizador dañado.",
        "Nada Existe apareció de la nada, como si el tiempo lo hubiera traído por error."
    ];

    const biographyMiddle = [
        "Su sonido se teje entre frecuencias imposibles, vibraciones que desafían la materia.",
        "Cada acorde es una distorsión del presente, cada ritmo, un eco de futuros improbables.",
        "Fusionan realidades alternas con loops hipnóticos, creando paisajes sonoros que nadie puede cartografiar.",
        "Utilizando señales de radio de galaxias distantes, construyen melodías que desafían la entropía.",
        "Nada Existe es la interferencia entre lo audible y lo inaudito, lo visible y lo imaginado.",
        "Sus composiciones son como sueños que olvidaste haber tenido pero que recuerdas al escuchar.",
        "Los patrones rítmicos parecen seguir una lógica que no pertenece a esta realidad.",
        "Sus creaciones son como fragmentos de un lenguaje perdido que se traduce en ondas sonoras.",
        "Exploran la música como una forma de comunicación interdimensional.",
        "Sus pistas están llenas de mensajes en frecuencias que solo algunos pueden captar."
    ];

    const biographyEnd = [
        "Escuchar su música es como abrir un portal que se cierra justo cuando empiezas a comprenderlo.",
        "Cada lanzamiento es una grieta en la continuidad del espacio-tiempo, una anomalía que se autogenera.",
        "Quienes han intentado descifrar sus estructuras musicales han terminado cuestionando su propia existencia.",
        "Cada track es una partícula de antimateria sonora que destruye la lógica de la percepción.",
        "Los que se sumergen en su universo musical aseguran haber visto reflejos de sí mismos en otras dimensiones.",
        "Sus composiciones son trampas de tiempo, atrapando a quienes las escuchan en bucles sonoros.",
        "La música de Nada Existe es como un espejismo: crees entenderlo, pero siempre se desliza fuera de tu alcance.",
        "Algunos aseguran que su sonido altera la percepción del tiempo de maneras inexplicables.",
        "Los tracks de Nada Existe son mapas de realidades que aún no han ocurrido.",
        "Cada acorde parece haber sido tocado antes en un sueño que nunca recuerdas por completo."
    ];

    const weirdEnd = [
        "Algunos aseguran que escucharlos con auriculares invertidos revela mensajes de universos paralelos.",
        "Se rumorea que su último show provocó una anomalía cuántica en la percepción del público.",
        "Nadie ha visto a los integrantes de Nada Existe, pero algunos afirman haber sentido su presencia.",
        "El colectivo dejó de comunicarse en lenguaje humano, ahora sus mensajes solo llegan en frecuencias inaudibles.",
        "Se dice que una vez un oyente dejó de percibir el paso del tiempo tras escuchar su álbum completo.",
        "Algunas de sus melodías han sido registradas en discos de vinilo que nadie recuerda haber fabricado.",
        "Un coleccionista aseguró encontrar un casete de Nada Existe con grabaciones de una época que no ha sucedido aún.",
        "Los efectos de sus canciones en la mente humana aún no han sido completamente estudiados.",
        "En ciertos círculos se dice que Nada Existe no hace música, sino que traduce ecos de otras dimensiones.",
        "Algunos afirman que su sonido no proviene de este mundo, sino de un reflejo espectral de nuestra realidad."
    ];

    // Función para generar una biografía surrealista aleatoria
    function generateRandomBiography() {
        const start = biographyStart[Math.floor(Math.random() * biographyStart.length)];
        const middle = biographyMiddle[Math.floor(Math.random() * biographyMiddle.length)];
        const end = biographyEnd[Math.floor(Math.random() * biographyEnd.length)];
        const weird = weirdEnd[Math.floor(Math.random() * weirdEnd.length)];
        return `${start} ${middle} ${end} ${weird}`;
    }

    // Insertar la biografía generada en el HTML
    document.getElementById("bio").textContent = generateRandomBiography();
});
