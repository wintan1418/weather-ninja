(()=>{"use strict";const e=e=>1.8*e+32,t=t=>{document.querySelector("#city").innerText=`${t.name}, ${t.sys.country}`,document.querySelector("#temp").innerHTML=`${Math.round(t.main.temp)}&deg;C`,document.querySelector("#min-max").innerHTML=`${Math.floor(t.main.temp_min)}&deg;C (min) / ${Math.ceil(t.main.temp_max)}&deg;C (max)`;const n=document.querySelector("#description");n.innerText=`${t.weather[0].main}`;const r=document.querySelector("#icon");r.innerText=`${t.weather[0].icon}`;const o=document.querySelector("#date"),a=new Date;o.innerText=(e=>{const t=e.getFullYear();return`${["Junuary","February","March","April","May","Jun","July","August","September","October","November","December"][e.getMonth()]} ${e.getDate()} (${["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}), ${t}`})(a),(t=>{const n=e(t.main.temp),r=e(t.main.temp_min),o=e(t.main.temp_max),a=document.querySelector("#temp"),c=document.querySelector("#min-max"),m=document.querySelector("#cToogle");m.addEventListener("click",(()=>{m.checked?(a.innerHTML=`${Math.floor(n)}&deg;F`,c.innerHTML=`${Math.floor(r)}&deg;F (min) / ${Math.floor(o)}&deg;F (max)`):(a.innerHTML=`${Math.round(t.main.temp)}&deg;C`,c.innerHTML=`${Math.floor(t.main.temp_min)}&deg;C (min) / ${Math.ceil(t.main.temp_max)}&deg;C (max)`)}))})(t),document.body.style.backgroundImage=`url('./images/${{Clear:"sun",Clouds:"cloudy",Rain:"rain",Mist:"fog",Snow:"snow",Thunderstorms:"thunder",Haze:"fog"}[n.textContent]}.gif')`,document.querySelector("#icon").src=`./icons/${r.textContent}.png`},n=document.querySelector("#error");n.innerHTML="";const r=document.querySelector("#input-box");r.addEventListener("keypress",(e=>{13===e.keyCode&&((async e=>{try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=2ac2a201f9a298fd6ce2b569bf302448&units=metric`),r=await n.json();t(r)}catch(e){n.innerHTML=`this ${e}`}})(r.value),document.querySelector(".weather").style.display="block")}))})();