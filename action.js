// Percentage Animation //
let percentageKeyframes = document.createElement("style");
function addLoader(element,percentage){
  let progress_color = percentage < 33.3? "rgb(206, 31, 31)" : percentage < 66.6 ? "yellow" : "rgb(44, 161, 69)";
  percentageKeyframes.innerHTML = `
    @keyframes loading {
      0% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.02}%,grey ${percentage*0.02}%);
      }
      2% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.04}%,grey ${percentage*0.04}%);
      }
      4% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.06}%,grey ${percentage*0.06}%);
      }
      6% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.08}%,grey ${percentage*0.08}%);
      }
      8% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.10}%,grey ${percentage*0.10}%);
      }
      10% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.12}%,grey ${percentage*0.12}%);
      }
      12% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.14}%,grey ${percentage*0.14}%);
      }
      14% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.16}%,grey ${percentage*0.16}%);
      }
      16% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.18}%,grey ${percentage*0.18}%);
      }
      18% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.20}%,grey ${percentage*0.20}%);
      }
      20% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.22}%,grey ${percentage*0.22}%);
        }
      22% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.24}%,grey ${percentage*0.24}%);
      }
      24% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.26}%,grey ${percentage*0.26}%);
      }
      26% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.28}%,grey ${percentage*0.28}%);
      }
      28% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.30}%,grey ${percentage*0.30}%);
      }
      30% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.32}%,grey ${percentage*0.32}%);
      }
      32% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.34}%,grey ${percentage*0.34}%);
      }
      34% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.36}%,grey ${percentage*0.36}%);
      }
      36% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.38}%,grey ${percentage*0.38}%);
      }
      38% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.40}%,grey ${percentage*0.40}%);
      }
      40% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.42}%,grey ${percentage*0.42}%);
      }
      42% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.44}%,grey ${percentage*0.44}%);
      }
      44% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.46}%,grey ${percentage*0.46}%);
      }
      46% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.48}%,grey ${percentage*0.48}%);
      }
      48% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.50}%,grey ${percentage*0.50}%);
      }
      50% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.52}%,grey ${percentage*0.52}%);
      }
      52% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.54}%,grey ${percentage*0.54}%);
      }
      54% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.56}%,grey ${percentage*0.56}%);
      }
      56% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.58}%,grey ${percentage*0.58}%);
      }
      58% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.60}%,grey ${percentage*0.60}%);
      }
      60% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.62}%,grey ${percentage*0.62}%);
        }
      62% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.64}%,grey ${percentage*0.64}%);
      }
      64% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.66}%,grey ${percentage*0.66}%);
      }
      66% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.68}%,grey ${percentage*0.68}%);
      }
      68% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.70}%,grey ${percentage*0.70}%);
      }
      70% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.72}%,grey ${percentage*0.72}%);
      }
      72% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.74}%,grey ${percentage*0.74}%);
      }
      74% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.76}%,grey ${percentage*0.76}%);
      }
      76% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.78}%,grey ${percentage*0.78}%);
      }
      78% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.80}%,grey ${percentage*0.80}%);
      }
      80% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.82}%,grey ${percentage*0.82}%);
      }
      82% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.84}%,grey ${percentage*0.84}%);
      }
      84% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.86}%,grey ${percentage*0.86}%);
      }
      86% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.88}%,grey ${percentage*0.88}%);
      }
      88% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.90}%,grey ${percentage*0.90}%);
      }
      90% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.92}%,grey ${percentage*0.92}%);
      }
      92% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.94}%,grey ${percentage*0.94}%);
      }
      94% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.96}%,grey ${percentage*0.96}%);
      }
      96% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage*0.98}%,grey ${percentage*0.98}%);
      }
      98% {
        background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage}%,grey ${percentage}%);
      }
    }

    .percentage_animation {
      animation: loading 0.8s ease-in  ;
      background-image:conic-gradient(${progress_color} 0% ,${progress_color} ${percentage}%,grey ${percentage}%);
    }`;
  document.head.appendChild(percentageKeyframes);
  element.classList.add("percentage_animation");
}
function removeLoader(element){
  document.head.removeChild(percentageKeyframes);
  element.classList.remove("percentage_animation");
}


// Card Slider

let cards=document.getElementsByClassName("project_cards");
let cardIndex=-1;
let totalCards=cards.length;
let moveArrows=document.getElementsByClassName("move_arrows");
let slideTimeout;
function activeArrow(){
  moveArrows[0].style.opacity=(cardIndex==-1)?"0.4":"1";
  moveArrows[1].style.opacity=(cardIndex==totalCards)?"0.4":"1";
}
function minusCard(){
  clearTimeout(slideTimeout);
  cardIndex=(cardIndex>-1)?cardIndex-1:totalCards-1;
  activeArrow();
  showCard();
}
function plusCard(){
  clearTimeout(slideTimeout);
  cardIndex=(cardIndex<totalCards)?cardIndex+1:0;
  activeArrow();
  showCard();
}
function setCard(idx){
  clearTimeout(slideTimeout);
  cardIndex=(cardIndex==idx)?-1:idx;
  activeArrow();
  showCard();
}
document.head.appendChild(sliderStyles);
function showCard(){
  for(let i=0;i<totalCards;i++){
    if(i==cardIndex){
      cards[i].classList.add("active");
      cards[i].classList.remove("inactive");
    }
    else{
      cards[i].classList.add("inactive");
      cards[i].classList.remove("active");
    }
  }
  slideTimeout = setTimeout(plusCard,3000);
}
