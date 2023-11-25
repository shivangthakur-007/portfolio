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
const button= document.querySelector('body');

    function random(){
        return Math.floor(Math.random()*100);
    }

bgchange=(e)=>{
    const rndcolor= `#${random()}${random()}${random()}`
    e.target.style.backgroundColor= rndcolor;
}

button.addEventListener('click', bgchange);


