document.addEventListener("DOMContentLoaded", function () {
    // Lista de tracks con sus respectivos embeds de Bandcamp
    const tracks = [
        "https://bandcamp.com/EmbeddedPlayer/track=2674625316/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=781834312/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
		"https://bandcamp.com/EmbeddedPlayer/album=1930963539/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1047204260/transparent=true/",
		"https://bandcamp.com/EmbeddedPlayer/album=1930963539/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=458112382/transparent=true/",
		"https://bandcamp.com/EmbeddedPlayer/album=1930963539/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2839370188/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=1930963539/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1265864217/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=1930963539/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2372408568/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3950859352/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3590405703/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1010525464/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=90105090/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1437763102/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1601787804/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3824317767/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2157156838/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3488676188/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3156581447/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3488676188/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1328776138/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3488676188/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2077956052/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3488676188/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3087974978/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2596562187/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3677029481/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1353658284/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2708922892/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1404108706/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=134713594/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3289059917/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2068487128/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=103084548/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=565989375/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1381908790/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=565989375/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3826988373/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=565989375/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=768935278/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=565989375/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2211233301/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=565989375/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3787277742/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3008928970/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2997954721/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3326143411/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2192298834/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1593158910/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2603748970/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=790660696/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=4239262847/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3542225751/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1083439792/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3542225751/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1361724939/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3542225751/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=40346955/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=3542225751/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=884006070/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2832573463/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1058346465/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2832573463/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=732561677/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2832573463/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3123856703/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2832573463/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3981969316/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=1154184831/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3781471543/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1455515293/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2528946128/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=4192836838/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=447220835/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=3314622712/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1924167964/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2362686258/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=393452566/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1665427109/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=1689248800/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=4003609450/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=720490499/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=372609401/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/track=2302350612/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/album=2685809255/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=3554509313/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=298177790/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=2259769743/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=1183430845/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=4139056394/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/",
        "https://bandcamp.com/EmbeddedPlayer/track=2162206116/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/transparent=true/"
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
