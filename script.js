const nav=document.getElementById("nav");
const glow=document.querySelector(".cursor-glow");
const menuBtn=document.getElementById("menuBtn");
const mobileMenu=document.getElementById("mobileMenu");

window.addEventListener("scroll",()=>{
  nav.classList.toggle("scrolled",window.scrollY>30);
});
window.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px";
});

menuBtn.addEventListener("click",()=>mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

let players=128;
setInterval(()=>{
  players=Math.max(80,Math.min(220,players+(Math.random()>.5?1:-1)));
  document.getElementById("players").textContent=players;
  document.getElementById("heroPlayers").textContent=players;
},4200);

function copyIP(){
  navigator.clipboard?.writeText("play.praburp.id");
  toast("SERVER IP COPIED");
}
function fakeLink(e,msg){
  e.preventDefault();
  toast(msg);
}
function toast(msg){
  const el=document.getElementById("toast");
  el.textContent=msg;
  el.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer=setTimeout(()=>el.classList.remove("show"),2200);
}
