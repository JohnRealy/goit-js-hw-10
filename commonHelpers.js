import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as f}from"./assets/vendor-77e16229.js";let r;const n=document.querySelector("button");n.disabled=!0;const s=document.querySelector(".value[data-days]"),a=document.querySelector(".value[data-hours]"),u=document.querySelector(".value[data-minutes]"),c=document.querySelector(".value[data-seconds]"),v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(Date.now()>t[0]){f.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),n.disabled=!0;return}n.disabled=!1,r=t[0]}};y("#datetime-picker",v);n.addEventListener("click",()=>{let t=d(r-Date.now());n.disabled=!0,s.textContent=e(t.days),a.textContent=e(t.hours),u.textContent=e(t.minutes),c.textContent=e(t.seconds);const o=setInterval(()=>{t=d(r-Date.now()),s.textContent=e(t.days),a.textContent=e(t.hours),u.textContent=e(t.minutes),c.textContent=e(t.seconds),t.seconds===0&&(console.log("Звуки айфонівського будильника"),clearInterval(o))},1e3)});function d(t){const i=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:h}}function e(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
