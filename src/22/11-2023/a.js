// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;
//   if (choice === "sunny") {
//     para.textContent =
//       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//   } else if (choice === "rainy") {
//     para.textContent =
//       "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//   } else {
//     para.textContent = "Invalid choice. Try again.";
//   }
// }

// const select = document.querySelector('select')
// const head = document.querySelector('h1')
// head.style.padding= '10px';

// function update(bgcolor, textcolor){
//     head.style.backgroundColor = bgcolor;
//     head.style.color= textcolor;

// }

//     select.addEventListener('change', ()=>{
//         select.value=== 'black'? update('black', 'white'): update('white','black');
//     });
// const button= document.querySelector('.container');

//     function random(){
//         return Math.floor(Math.random()*100);
//     }

// bgchange=(e)=>{
//     const rndcolor= `#${random()}${random()}${random()}`
//     e.target.style.backgroundColor= rndcolor;
// }

// button.addEventListener('click', bgchange);
// let a=2;
// while(a <1000){
//     // let i=0;
//         if(a == 2){
//             console.log(a+'&')
//         }
//         else if(a%2 == 0 && a%3 == 0){
//             // console.log('not done')
//         }
//         else{
//             console.log(a+'&')
//         }
//     a+=1;
// }

const display = document.querySelector(".displayed-img");
const thumbar = document.querySelector(".thumb-bar");

const btn = document.querySelector('button');
const overlay= document.querySelector('.overlay');

    const pic =
      "https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images";
    const images = [
      "/pic1.jpg",
      "/pic2.jpg",
      "/pic3.jpg",
      "/pic4.jpg",
      "/pic5.jpg",
    ];
    const alts = {
      "pic1.jpg": "Closeup of a human eye",
      "pic2.jpg": "Rock that looks like a wave",
      "pic3.jpg": "Purple and white pansies",
      "pic4.jpg": "Section of wall from a pharoah's tomb",
      "pic5.jpg": "Large moth on a leaf",
    };

    for (const image of images) {
        const newImages = document.createElement('img')
        newImages.setAttribute('src', `${pic}${image}`);
        newImages.setAttribute('alt', alts[image]);
        thumbar.appendChild(newImages);
        newImages.addEventListener('click', (e)=>{
            display.src= e.target.src;
            display.alt= e.target.alt;
        })
    }

btn.addEventListener('click', ()=>{
    const btnClass= btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light')
        btn.textContent= 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});