const contentSlider = document.querySelector(".content-slider");
const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

// Valor do slide container //
let offset = 0;
// ID do Slide incremento //
let slideIncrement = 0;
// ID do Slide decremento //
let slideDecrement = slides.length - 1;

//Posição do drag no axis X//
let dragPosition = 0;
//Valor anterior do drag//
let prev = 0;
// Calculo da posição do drag//
let cacl = 0;
//Cordenada X do cliente//
let x;
// Quantos slides mover//
let slideAmmount;

// Adicionar evento de clique na seta da direita//
arrRight.addEventListener('click', slideNext);

function slideNext(){
    //calcula o numero de slides para mexer com base na largura do carrossel conteiner e a largura do slide unico//
    slideAmmount = Math.round(contentSlider.offsetWidth / slides[0].offsetWidth);

    //desabilita o botão "next" temporáriamente para previnir vários cliques durante a animação//
    arrRight.ariaDisabled = true; 

    //calcula a distância para mover o carrossel conteiner baseado na largura de cada slide individual e o número de slides para mover//
    offset = slides[0].offsetWidth * slideAmmount;

    //Aplica a animação de transição suavemente para mover o conteiner do carrossel//
    container.computedStyleMap.transition = "left ease-in-out 500ms";
    container.computedStyleMap.left = -offset + 'px';

    //Após delay de 500ms (5s), reseta a transição e reorganiza os slides//
    setTimeout(() => {
        //remove a animação de transição//
        container.style.transition = "none";

        //Loop entre os slides para reorganizar a ordem//
        for(let i = 0; i < slideAmmount; i++){
            //Checar se o slide atual ultrapassa o total de número de slides//
            if(slideIncrement > slides.length - 1){
                //se o index exceder o número total de slides é settado uma nova posição//
                slideIncrement = slideIncrement - slides.length;

                //reseta a ordem de todos slides para ordem inicial//
                slides.forEach(slide => {
                    slide.style.order = "initial";
                });
            }
            // seta a ordem dos slides atuais na última posição//
            slides[slideIncrement].style.order = slides.length - 1;

            //icrementa o index do slide para a próxima interção//
            slideIncrement++;
        }
        //reseta a posição da esquerda do container carrossel//
        container.style.left = 0;

        // atualiza o slide decrementado para o index do último slide//
        slideDecrement = slideIncrement - 1;

        //re habilita o botão "next"//
        arrRight.disabled = false;
    }, 500);
}

//adicionar evento de clique na seta esquerda//
arrLeft.addEventListener('click', slidePrev);


