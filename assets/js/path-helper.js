(function () {
  if (typeof BASE_PATH === "undefined") {
    console.error("BASE_PATH not defined");
    return;
  }

  // Rewrite <a data-link="">
  document.querySelectorAll("[data-link]").forEach(el => {
    const path = el.getAttribute("data-link");
    el.setAttribute("href", `${BASE_PATH}/${path}`);
  });

  // Rewrite <img data-src="">
  document.querySelectorAll("img[data-src]").forEach(img => {
    const path = img.getAttribute("data-src");
    img.setAttribute("src", `${BASE_PATH}/${path}`);
  });

  // Rewrite <script data-src="">
  document.querySelectorAll("script[data-src]").forEach(script => {
    const path = script.getAttribute("data-src");
    script.setAttribute("src", `${BASE_PATH}/${path}`);
  });

  // Rewrite <link data-href=""> (CSS)
  document.querySelectorAll("link[data-href]").forEach(link => {
    const path = link.getAttribute("data-href");
    link.setAttribute("href", `${BASE_PATH}/${path}`);
  });
})();
