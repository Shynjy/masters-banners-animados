init = function() {
    setTimeout(function() {
        allAnimations();
    }, 200);
}

function allAnimations() {
    var setTimer = 250;
    var animCount = 0;
    var animTimer = setInterval(function() { theTimer() }, setTimer),

        fade = document.getElementById('fade'),

        replay = document.getElementById('replay'),

        video = document.getElementById('video');

    //  timings

    function theTimer() {
        let timer = 0;

        function second(time) {
            let x = Math.floor(time * 4)
            timer = timer + x;
            return timer
        }

        function contTimer(animCount) {
            let total = animCount * setTimer - 1000
            return `Time banner ${total / 1000}s`
        }

        let videoEnd = video.onended = () => {
            replay.setAttribute('class', 'transition-1 show');
        };

        // video.onended = () => {
        //     replay.setAttribute('class', 'transition-1 show');
        // };

        if (animCount == second(0)) {
            video.play()
            fade.setAttribute('class', 'transition-3 fade-out');
        } else if (animCount == second(6)) {

<<<<<<< HEAD
        } else if (animCount == second(0) + 4) {
=======
        } else if (animCount == second(0)) {
>>>>>>> 7787ca1954b1b94442ec2e6654f217d087ec434b
            clearInterval(animTimer);
            console.log(contTimer(animCount))
        }
        animCount++;
    }

    //  legal stuff

    //  legalOpen.addEventListener('mouseover', showLegal);
    //  legalOpen.addEventListener('mouseleave', hideLegal);

    //  function showLegal(){
    // 	 legal1.setAttribute('class', 'transition-5 fade-in');
    // 	 overlay.setAttribute('class', 'transition-5 fade-half');
    //  }

    //  function hideLegal(){
    // 	 legal1.setAttribute('class', 'transition-5');
    // 	 overlay.setAttribute('class', 'transition-5');
    //  }

    // Replay

    // let replay = document.getElementById('replay')

    replay.addEventListener('click', initBanner)

    function initBanner(e) {
        e.preventDefault()
        replay.setAttribute('class', 'hide');
        allAnimations()
    }

}