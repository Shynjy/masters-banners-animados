init = function () {
    setTimeout(function () {
        allAnimations();
    }, 200);
}

var mutedTrue = false;

function controlsAction() {
    let video = document.getElementById('video');

    if (video.paused) {
        video.play();
        controls.setAttribute('class', 'transition-1 show');
    } else {
        video.pause();
        controls.setAttribute('class', 'transition-1 show pause');
    }
}

function muteUnmute() {
    let video = document.getElementById('video');

    if (video.muted) {
        video.muted = false;
        mute.setAttribute('class', 'transition-1 show unmute');
        mutedTrue = true;
    } else {
        video.muted = true;
        mute.setAttribute('class', 'transition-1 show');
        mutedTrue = false;
    }
}

function statesInit() {
    if (mutedTrue) {
        mute.setAttribute('class', 'transition-1 show unmute');
    }
}

function allAnimations() {
    var setTimer = 100;
    var animCount = 0;

    var animTimer = setInterval(function () { theTimer() }, setTimer),

        fade = document.getElementById('fade'),

        controls = document.getElementById('controls'),
        mute = document.getElementById('mute'),
        replay = document.getElementById('replay'),

        video = document.getElementById('video');

    replay.addEventListener('click', initBanner);
    controls.addEventListener('click', controlsAction);
    mute.addEventListener('click', muteUnmute);

    var timeVideo = Math.round(video.duration + 1);

    //  timings

    function theTimer() {
        let timer = 0;

        function second(time) {
            let x = Math.floor(time * 10)
            timer = timer + x;
            return timer
        }

        function contTimer(animCount) {
            let total = animCount * setTimer - 1000
            return `Time banner ${total / 1000}s`
        }

        let videoEnd = video.onended = () => {
            controls.setAttribute('class', 'transition-1 hide');
            mute.setAttribute('class', 'transition-1 hide');
            replay.setAttribute('class', 'transition-1 show');
        };

        if (animCount == second(0)) {
            video.play()
            fade.setAttribute('class', 'transition-3 fade-out');
        } else if (animCount == second(timeVideo + 5)) {
            clearInterval(animTimer);
            console.log(contTimer(animCount - 5))
        }
        animCount++;
    }

    function initBanner(e) {
        e.preventDefault()
        controls.setAttribute('class', 'transition-1 show');
        mute.setAttribute('class', 'transition-1 show');
        replay.setAttribute('class', 'hide');

        statesInit()
        allAnimations()
    }
}