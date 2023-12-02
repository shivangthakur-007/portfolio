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

// declare @num as int = 1
// declare @n as int = 0
// declare @i as int = 0
// if (@n >= 2)
// begin 
//     print '2&';
// end
// while @num <= @n
//     begin
//         select @i = 2
//         while @i <= @num -1
//             begin
//                 if (@num % @i = 0)
//                 begin
//                     break;
//                 end
//                 else if (@i = @num-1)
//                 begin
//                     print @num + '&';
//                 break;
//                 end;
//         set @i += 1;
//     end;
//    set @num += 1;
// end;

// 

// https://www.turing.com/kb/handling-memory-management-in-javascript => memory management 


// async function populate(){
//     const requestUrl =
//       "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
//     const request = new Request(requestUrl);
//     const response = await fetch(request);

//     const superheroes= await response.json();

//     console.log(superheroes)
// }
// const a= populate();
// console.log(a)

const n= document.querySelector("#name")
const delay= document.querySelector("#delay")
const btn= document.querySelector("button")
const para= document.querySelector("p")

    function alarm(person, delay){
        return new Promise((res, rej)=>{
            if(delay<0){
                throw new error(`ALarm must not be negative` )
            }
            setTimeout(()=>{
                res(`wake up : ${person}!`)
            }, delay);
        })
 }
btn.addEventListener('click', async ()=>{
    try {
        const message =await alarm(n.value, delay.value)
        console.log(message)
        para.textContent= message;
    } catch (e) {
        para.textContent=`Couldn't set Alarm: ${e}`;
    }
})


