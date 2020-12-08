init = function () {
    setTimeout(function () {
        allAnimations();
    }, 200);
}

function allAnimations() {
    // O setInterval configurado em 1ms
    let setTimer = 100;

    // variáveis de condição
    let startVideo = false;
    let EndedVideo = false;

    // Repetidor da função theTimer
    // let animTimer = setInterval(function () { theTimer() }, setTimer);

    // Elementos da DOM
    let fade = document.getElementById('fade'),
        replay = document.getElementById('replay'),
        video = document.getElementById('video');

    // Evento de click no botão replay
    replay.addEventListener('click', initBanner)

    // Função responsável por reiniciar o video
    function initBanner(e) {
        e.preventDefault()
        replay.setAttribute('class', 'hide');
        allAnimations()
    }
    
    theTimer()

    // Escuta o final do video
    video.onended = () => {
        EndedVideo = true;
        theTimer()
    };

    // Listener
    function theTimer() {

        // Inicia o video
        if (!startVideo) {
            video.play()
            fade.setAttribute('class', 'transition temp02 fade-out');
            startVideo = true;
        }

        // habilita o botão replay no final do video
        if (EndedVideo) {
            replay.setAttribute('class', 'transition temp02 show');
            startVideo = false;
            // clearInterval(animTimer);
        }
    }
}