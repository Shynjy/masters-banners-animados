init = function () {
    setTimeout(function () {
        allAnimations();
    }, 200);
}

function allAnimations() {
    // O setInterval configurado em 1ms
    var setTimer = 100;

    var startVideo = false;
    let EndedVideo = false;

    // Repetidor da função theTimer
    var animTimer = setInterval(function () { theTimer() }, setTimer);

    // Elementos da DOM
    var fade = document.getElementById('fade'),
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

    // Escuta o final do video
    video.onended = () => {
        EndedVideo = true;
    };

    // Listener
    function theTimer() {

        if (!startVideo) {
            video.play()
            fade.setAttribute('class', 'transition temp02 fade-out');
            startVideo = true;
        }

        if (EndedVideo) {
            replay.setAttribute('class', 'transition temp02 show');
            startVideo = false;
            clearInterval(animTimer);
        }
    }
}