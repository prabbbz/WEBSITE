
function copyIP(){
  navigator.clipboard?.writeText("play.praburp.id");
  toast("SERVER IP COPIED");
}
function fakeLink(e){
  e.preventDefault();
  toast("LINK BELUM DIATUR — GANTI DENGAN LINK ASLI KAMU");
}
function toast(message){
  const el=document.getElementById("toast");
  el.textContent=message;
  el.classList.add("show");
  setTimeout(()=>el.classList.remove("show"),2200);
}
let players=128;
setInterval(()=>{
  players=Math.max(80,Math.min(220,players+(Math.random()>.5?1:-1)));
  document.getElementById("players").textContent=players;
},4500);
