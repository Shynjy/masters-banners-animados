window.onload = function () {
  resetBanner();
  adVisible();
};

function adVisible() {
  gsap.to("#banner", 0.25, {
    autoAlpha: 1,
    delay: 0.25,
    onComplete: startAnimation,
  });
}

function resetBanner() {
  gsap.set("#bg1", { scale: 1, autoAlpha: 1 });
  gsap.set("#bg2", { scale: 1, autoAlpha: 0 });
  gsap.set("#bg3", { autoAlpha: 0 });

  gsap.set("#copy1", { x: -300, autoAlpha: 0 });
  gsap.set("#copy2", { y: 20, autoAlpha: 0 });
  gsap.set("#copy3", { y: 20, autoAlpha: 0 });

  gsap.set("#cta", { scale: 1.1, autoAlpha: 0 });

  gsap.set("#logo2", { scale: 0, autoAlpha: 0 });

  gsap.set("#content-brilho", { autoAlpha: 0 });
}

function startAnimation() {
  var a = 0; // Tempo de animação

  //Animação do banner
  gsap.to("#bg1", 4, {
    scale: 1.1,
    delay: a,
  });
  a += 0.25;
  gsap.to("#copy1", 0.5, {
    autoAlpha: 1,
    x: 0,
    ease: "back.out(1.7)",
    delay: a,
  });
  a += 0.1;
  gsap.to("#logo2", 0.25, {
    scale: 1,
    autoAlpha: 1,
    ease: Quad.easeOut,
    delay: a,
  });
  a += 2.5; //troca de step
  gsap.to("#bg2", 0.5, {
    autoAlpha: 1,
    ease: Quad.easeOut,
    delay: a,
  });
  gsap.to("#bg2", 4, {
    scale: 1.1,
    delay: a,
  });
  gsap.to("#copy1", 0.25, {
    autoAlpha: 0,
    delay: a,
  });
  a += 0.25;
  gsap.to("#copy2", 1, {
    autoAlpha: 1,
    y: 0,
    ease: Quad.easeOut,
    delay: a,
  });
  a += 2.5; //troca de step
  gsap.to("#bg3", 0.5, {
    autoAlpha: 1,
    ease: Quad.easeOut,
    delay: a,
  });
  gsap.to("#bg3", 4, {
    scale: 1.1,
    delay: a,
  });
  gsap.to("#copy2", 0.25, {
    autoAlpha: 0,
    delay: a,
  });
  gsap.to("#logo2", 0.25, {
    autoAlpha: 0,
    delay: a,
  });
  a += 0.25;

  gsap.to("#copy3", 0.5, {
    autoAlpha: 1,
    y: 0,
    ease: Quad.easeOut,
    delay: a,
  });
  a += 0.5;
  gsap.to("#cta", 0.25, {
    autoAlpha: 1,
    scale: 1,
    ease: Quad.easeOut,
    delay: a,
  });
  gsap.to("#content-brilho", 0, {
    autoAlpha: 1,
    delay: a,
  });
  

}
