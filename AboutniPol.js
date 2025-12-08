const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".section");
const footerLinks = document.querySelectorAll(".footer-link");
const header = document.querySelector("header");

// TAB CLICK
function clearActiveTabs() {
  tabs.forEach(tab => tab.classList.remove("active"));
}

function activateTab(tabName) {
  clearActiveTabs();
  const activeTab = [...tabs].find(t => t.dataset.target === tabName);
  if (activeTab) activeTab.classList.add("active");
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    activateTab(id);
    history.replaceState(null, null, "#" + id);
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    scrollToSection(tab.dataset.target);
  });
});

footerLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    scrollToSection(link.getAttribute("href").substring(1));
  });
});

// HEADER SHRINK + ACTIVE TAB ON SCROLL
window.addEventListener("scroll", () => {
  // Shrink header
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }

  // Active tab highlight
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.id;
  });
  if (current) activateTab(current);
});

// Scroll to hash on load
window.addEventListener("load", () => {
  const hash = window.location.hash.substring(1);
  if (hash) scrollToSection(hash);
});
