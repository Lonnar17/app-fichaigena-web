self.addEventListener("install", (e) => {
  console.log("Service Worker v2");
});

self.addEventListener("fetch", () => {});

self.addEventListener("activate", () => {
  console.log("Nova versão ativa 🚀");
});