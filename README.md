# Masters para Banners Animados

## 300x250 animado
Banner animado:
* 6s
* fade de entrada
* animações simples
<<<<<<< HEAD
=======
* adicionado looping
>>>>>>> 7787ca1954b1b94442ec2e6654f217d087ec434b


## 300x250 video
Banner video:
* 6s
* fade de entrada
* play automático, após o termino do fade
* btn replay
<<<<<<< HEAD
* roda em todos os dispositivos 
=======
* roda em todos os dispositivos 

---

### Regras de atribuição de formato
Banner animado
Os formatos devem ser alterados de arquivo para arquivo nos campos dos seguintes arquivos:
> index.html:
* ```<meta name="ad.size" content="width=VALOR DA LARGURA,height=VALOR DA ALTURA">```
> style.css:
* ```:root {  --width: width=VALOR DA LARGURA EM PX; --height: VALOR DA ALTURA EM PX; }```


### Regras de animação
Todas animação são controladas pela função theTimer()
Primeiro é atribuído o estado inicial da animação e depois é executado o retorno à forma padrão. Esses valores devem ser atribuídos no início do if entre o // Transition start e // Transition end e o retorno ao padrão posteriormente nos devidos tempos.
>>>>>>> 7787ca1954b1b94442ec2e6654f217d087ec434b
