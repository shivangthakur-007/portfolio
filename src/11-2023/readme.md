# table 
- html  
    <h1>Planets Data</h1>
    <table>
      <caption>Data about the planets of our solar system (Planetary facts taken from <a href="/"> Nasa's Planetary Fact Sheet - Metric).</a></caption>
      <colgroup span="2"></colgroup>
      <colgroup style="border: 2px solid black;"></colgroup>
      <colgroup span="9"></colgroup>
      <thead>
        <tr>
          <td colspan="2"></td>
          <th scope="col">Name</th>
          <th scope="col">Mass (10 <sup>24</sup>)</th>
          <th scope="col">Diameter (Km)</th>
          <th scope="col">Density</th>
          <th scope="col">Gravity (m/s <sup>2</sup>)</th>
          <th scope="col">Length of Day (hours)</th>
          <th scope="col">Distance From the Sun (10 <sup>6</sup>Km)</th>
          <th scope="col">Mean Temperature (°C)</th>
          <th scope="col">Number of Moons</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowspan="4" colspan="2">Terrestarial Planets</th>
          <th scope="col">Mercury</th>
          <td scope="col">0.330</td>
          <td scope="col">4,879</td>
          <td scope="col">5427</td>
          <td scope="col">3.7</td>
          <td scope="col">4222.6</td>
          <td scope="col">57.9</td>
          <td scope="col">167</td>
          <td scope="col">0</td>
          <td scope="col">Closest to the Sun</td>
        </tr>
        <tr>
          <!-- <td rowspan="2" colspan="4">Terrestarial Planets</td> -->
          <th scope="col">Venus</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col"></td>
        </tr>
        <tr>
          <!-- <td rowspan="2" colspan="4">Terrestarial Planets</td> -->
          <th scope="col">Earth</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col">Our World</td>
        </tr>
        <tr>
          <!-- <td rowspan="2" colspan="4">Terrestarial Planets</td> -->
          <th scope="col">Mars</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col">The Red Planet</td>
        </tr>
        <tr>
          <th rowspan="4">Jovian Planets</th>
          <th rowspan="2">Gas Giants</th>
          <th scope="col">Jupiter</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col">The Largest Planet</td>
        </tr>
        <tr>
          <th scope="col">Saturn</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col"></td>
        </tr>
        <tr>
          <th rowspan="2">Ice Giants</th>
          <th scope="col">Uranus</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col"></td>
        </tr>
        <tr>
          <!-- <td rowspan="2" colspan="4">Terrestarial Planets</td> -->
          <th scope="col">Neptune</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col"></td>
        </tr>
        <tr>
          <th rowspan="1" colspan="2">Dwarf Planets</th>
          <th scope="col">Pluto</th>
          <td scope="col">4.87</td>
          <td scope="col">12,104</td>
          <td scope="col">5243</td>
          <td scope="col">8.9</td>
          <td scope="col">2802.0</td>
          <td scope="col">108.2</td>
          <td scope="col">464</td>
          <td scope="col">0</td>
          <td scope="col">Declassified as a planet in 2006, but this <a href="">remains constant</a></td>
        </tr>
      </tbody>
    </table>

# image genertr
<div class="full-img">
  <img
    class="displayed-img"
    src="https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images/pic1.jpg"
    alt="Closeup of a blue human eye" />
  <div class="overlay"></div>
  <button id='text' class="dark">Darken</button>
</div>

<div class="thumb-bar">
</div> -->

# js 

// const display = document.querySelector(".displayed-img");
// const thumbar = document.querySelector(".thumb-bar");

// const btn = document.querySelector('button');
// const overlay= document.querySelector('.overlay');

//     const pic =
//       "https://mdn.github.io/learning-area/javascript/building-blocks/gallery/images";
//     const images = [
//       "pic1.jpg",
//       "pic2.jpg",
//       "pic3.jpg",
//       "pic4.jpg",
//       "pic5.jpg",
//     ];
//     const alts = {
//       "pic1.jpg": "Closeup of a human eye",
//       "pic2.jpg": "Rock that looks like a wave",
//       "pic3.jpg": "Purple and white pansies",
//       "pic4.jpg": "Section of wall from a pharoah's tomb",
//       "pic5.jpg": "Large moth on a leaf",
//     }

//     for (const image of images) {
//         const newImages = document.createElement('img')
//         newImages.setAttribute('src', `${pic}/${image}`);
//         newImages.setAttribute('alt', alts[image]);
//         thumbar.appendChild(newImages);
//         newImages.addEventListener('click', (e)=>{
//             display.src= e.target.src;
//             display.alt= e.target.alt;
//         })
//     }

// btn.addEventListener('click', ()=>{
//     const btnClass= btn.getAttribute('class');
//     if (btnClass === 'dark') {
//         btn.setAttribute('class', 'light')
//         btn.textContent= 'Lighten';
//         overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
//     }else{
//         btn.setAttribute("class", "dark");
//         btn.textContent = "Darken";
//         overlay.style.backgroundColor = "rgba(0,0,0,0)";
//     }
// });

# new project
- html
<label for="Name">Name: </label>
    <input type="name" id="name" name="name"/>
    <label for="delay">Delay: </label>
    <input type="text" name="delay" id="delay">
    <button type="submit">Set Alarm</button>
    <p></p>
- js

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

