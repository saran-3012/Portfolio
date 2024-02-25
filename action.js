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
let Slider=document.getElementsByClassName("project_slider")[0];
let cards=document.getElementsByClassName("project_cards");
let totalCards=cards.length;
let currCard=0;
let prevCard=totalCards-1;
let nextCard=1;
let moveArrows=document.getElementsByClassName("move_arrows");
let slideTimeout;
function minusCard(){
  clearTimeout(slideTimeout);
  currCard=(currCard>0)?currCard-1:totalCards-1;
  prevCard=(currCard>0)?currCard-1:totalCards-1;
  nextCard=(currCard<totalCards-1)?currCard+1:0;
  reverseCard();
}
function plusCard(){
  clearTimeout(slideTimeout);
  currCard=(currCard<totalCards-1)?currCard+1:0;
  prevCard=(currCard>0)?currCard-1:totalCards-1;
  nextCard=(currCard<totalCards-1)?currCard+1:0;
  forwardCard();
}
forwardCard();
function forwardCard(){
  for(let i=0;i<totalCards;i++){
    console.log(prevCard,currCard,nextCard);
    if(i==prevCard){
      cards[i].classList.add("active_prev");
      cards[i].classList.remove("active");
    }
    else if(i==currCard){
      cards[i].classList.add("active");
      cards[i].classList.remove("active_next");
    }
    else if(i==nextCard){
      cards[i].classList.add("active_next");
      cards[i].classList.remove("inactive");
    }
    else{
      cards[i].classList.add("inactive");
      cards[i].classList.remove("active_prev");
    }
    cards[i].classList.remove("active_prev_reverse");
    cards[i].classList.remove("active_reverse");
    cards[i].classList.remove("active_next_reverse");
  }
  slideTimeout=setTimeout(plusCard,3000);
}
function reverseCard(){
  for(let i=0;i<totalCards;i++){
    if(i==prevCard){
      cards[i].classList.remove("inactive");
      cards[i].classList.add("active_prev_reverse");
    }
    else if(i==currCard){
      cards[i].classList.remove("active_prev_reverse");
      cards[i].classList.add("active_reverse");
    }
    else if(i==nextCard){
      cards[i].classList.remove("active_reverse");
      cards[i].classList.add("active_next_reverse");
    }
    else{
      console.log(i)
      cards[i].classList.remove("active_next_reverse");
      cards[i].classList.add("inactive");
    }
    cards[i].classList.remove("active_prev");
    cards[i].classList.remove("active");
    cards[i].classList.remove("active_next");
  }
  slideTimeout=setTimeout(plusCard,3000);
}

Slider.addEventListener('mouseover', () => clearTimeout(slideTimeout));
Slider.addEventListener('mouseout', () => slideTimeout=setTimeout(plusCard,3000));

// Contact Me Email

document.getElementsByClassName("contact_form_grid")[0].addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("visitor_name").value;
  const email = document.getElementById("visitor_email").value;
  const subject = document.getElementById("visitor_subject").value;
  const message = document.getElementById("visitor_message").value;
  const formUrl = "https://formspree.io/f/xqkrbpav";

  fetch(formUrl, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name,
          email,
          subject,
          message
      })
  })
  .then(response => response.json())
  .then(data => {
      console.log("Success:", data);
      alert("Message sent successfully!");
      document.getElementsByClassName("contact_form_grid")[0].reset();
  })
  .catch(error => {
      console.error("Error:", error);
      alert("An error occurred while sending the message. Please try again later.");
  });
});
