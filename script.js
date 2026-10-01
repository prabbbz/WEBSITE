// ===== KONFIGURASI: ganti sesuai servermu =====
const CONFIG = {
  ip: "15.235.175.76:7005",
  discord: "https://discord.gg/aHmX3SKAWr",
  whatsapp: "https://whatsapp.com/channel/0029Vb8uVFI0QeaqwEoDkg2G",
  apk: "https://www.mediafire.com/file/mmwn1um7o7muedn/app-debug.apk/file",
  pc: "https://www.mediafire.com/file/2yw0q66zwf9e4cf/ViceSide_Setup.exe/file",
  trailer: "", // isi link YouTube/video kalau ada
  members: "2.020",
  online: "157"
};
document.querySelectorAll("[data-href]").forEach(e => e.href = CONFIG[e.dataset.href]);
document.querySelectorAll("[data-text]").forEach(e => e.textContent = CONFIG[e.dataset.text]);

const toast = document.getElementById("toast");
function show(msg) {
  toast.textContent = msg; toast.classList.add("on");
  clearTimeout(show.t); show.t = setTimeout(() => toast.classList.remove("on"), 2200);
}
document.getElementById("copyIp").onclick = async () => {
  try { await navigator.clipboard.writeText(CONFIG.ip); show("IP server disalin: " + CONFIG.ip); }
  catch { show("Salin manual: " + CONFIG.ip); }
};
document.getElementById("trailer").onclick = () =>
  CONFIG.trailer ? window.open(CONFIG.trailer, "_blank") : show("Trailer segera hadir");

const nav = document.getElementById("nav"), menu = document.getElementById("menu");
document.getElementById("burger").onclick = () => menu.classList.toggle("open");
menu.querySelectorAll("a").forEach(a => a.onclick = () => menu.classList.remove("open"));

const links = [...menu.querySelectorAll("a")];
const secs = links.map(a => document.querySelector(a.getAttribute("href")));
function onScroll() {
  nav.classList.toggle("solid", scrollY > 30);
  let i = 0; secs.forEach((s, n) => { if (s.getBoundingClientRect().top < innerHeight * .4) i = n; });
  links.forEach((a, n) => a.classList.toggle("on", n === i));
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
