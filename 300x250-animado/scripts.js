init = function () {
    setTimeout(function () {
        allAnimations();
    }, 200);
}

let cont = 0;

function allAnimations() {
    var setTimer = 250;
    var animCount = 0;
    var animTimer = setInterval(function () { theTimer() }, setTimer),

        fade = document.getElementById('fade'),

        // logo = document.getElementById('logo'),
        logo2 = document.getElementById('logo2'),

        bg1 = document.getElementById('bg1'),
        bg2 = document.getElementById('bg2'),
        bg3 = document.getElementById('bg3'),

        copy1 = document.getElementById('copy1'),
        copy2 = document.getElementById('copy2'),
        copy3 = document.getElementById('copy3'),

        // overlay = document.getElementById('overlay'),
        // legal1 = document.getElementById('legal1'),

        cta = document.getElementById('cta');

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

        if (animCount == second(0)) {
            // Transition start
            logo2.setAttribute('class', 'txt-mini');
            copy1.setAttribute('class', 'left-1');
            copy2.setAttribute('class', 'txt-up');
            copy3.setAttribute('class', 'up-1');
            cta.setAttribute('class', 'transition-txt-scale')
            // Transition end

            bg1.setAttribute('class', 'fade-in');
            bg1.setAttribute('class', 'fade-in scale-1');
            fade.setAttribute('class', 'transition-2 fade-out');
        } else if (animCount == second(0.25)) {
            copy1.setAttribute('class', 'transition-2 fade-in');
            logo2.setAttribute('class', 'transition-txt-2 fade-in');
        } else if (animCount == second(2.25)) {
            copy1.setAttribute('class', 'transition-2 fade-out');
        } else if (animCount == second(0.25)) {
            bg2.setAttribute('class', 'fade-in scale-1');
            bg1.setAttribute('class', 'transition-6 fade-off scale-1');
            copy2.setAttribute('class', 'transition-7 fade-in');
        } else if (animCount == second(2.25)) {
            copy2.setAttribute('class', 'transition-2 fade-out');
        } else if (animCount == second(0.25)) {
            bg3.setAttribute('class', 'fade-in scale-1');
            bg2.setAttribute('class', 'transition-6 fade-off scale-1');
            copy3.setAttribute('class', 'transition-1 fade-in');
            logo2.setAttribute('class', 'transition-1 fade-out');
        } else if (animCount == second(0.5)) {
            cta.setAttribute('class', 'transition-txt-in fade-in');
        } else if (animCount == second(2)) { // alterar o tempo para o looping
            clearInterval(animTimer);
            console.log(contTimer(animCount))

            // ativa looping
            initBanner()
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

    initBanner = () => {
        if (cont < 2) {

            allAnimations()
            
            bg3.setAttribute('class', 'transition-1 fade-out');
            copy3.setAttribute('class', 'transition-1 fade-out');
            cta.setAttribute('class', 'transition-1 fade-out');

            cont++
        } else {
            return
        }
    }
}