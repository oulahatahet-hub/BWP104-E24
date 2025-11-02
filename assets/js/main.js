document.addEventListener("DOMContentLoaded", function () {

    let scrollBtn = document.getElementById("scrollTop");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
  
    let langBtn = document.getElementById("langToggle");
    let currentLang = localStorage.getItem("lang") || "ar";
  
    function applyLang(lang) {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
      langBtn.innerText = lang === "ar" ? "EN" : "AR";
  
      localStorage.setItem("lang", lang);
  
      if (lang === "ar") {
        document.title = "دليل فعاليات المدينة";
      } else {
        document.title = "City Events Guide";
      }
    }
  
    langBtn.addEventListener("click", function () {
      let newLang = currentLang === "ar" ? "en" : "ar";
      currentLang = newLang;
      applyLang(newLang);
    });
  
    applyLang(currentLang);
  });
  