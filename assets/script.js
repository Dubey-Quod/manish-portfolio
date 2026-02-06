(function () {
  const root = document.documentElement;
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  // Theme
  const key = "md_theme";
  function setTheme(mode){
    if(mode === "light"){
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem(key, mode);
    const icon = document.querySelector("#themeToggle .icon");
    if(icon) icon.textContent = (mode === "light") ? "☀" : "☾";
  }
  const saved = localStorage.getItem(key);
  if(saved){ setTheme(saved); }

  const toggle = document.getElementById("themeToggle");
  if(toggle){
    toggle.addEventListener("click", () => {
      const isLight = root.getAttribute("data-theme") === "light";
      setTheme(isLight ? "dark" : "light");
    });
  }

  // Mobile menu
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  function closeMenu(){
    if(!mobileNav) return;
    mobileNav.hidden = true;
    burger.setAttribute("aria-expanded", "false");
  }
  function openMenu(){
    if(!mobileNav) return;
    mobileNav.hidden = false;
    burger.setAttribute("aria-expanded", "true");
  }
  if(burger && mobileNav){
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });
    mobileNav.addEventListener("click", (e) => {
      if(e.target && e.target.tagName === "A") closeMenu();
    });
    window.addEventListener("resize", () => {
      if(window.innerWidth > 760) closeMenu();
    });
  }
})();
