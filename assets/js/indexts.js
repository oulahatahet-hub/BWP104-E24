const translations = {
    ar: {
      title: "دليل فعاليات المدينة",
      navHome: "الرئيسية",
      navEvents: "الفعاليات",
      navAbout: "عن الدليل",
      navContact: "اتصل بنا",
      eventsHeader: "فعاليات هذا الأسبوع",
      eventsSubtitle: "استكشف أبرز الفعاليات في مدينتك",
      categoriesTitle: "التصنيفات",
      categoryMusic: "موسيقى",
      categoryCulture: "ثقافة",
      categorySports: "رياضة",
      categoryFamily: "عائلي",
      latestEventsTitle: "أحدث الفعاليات",
      detailsButton: "التفاصيل",
      footerText: "© 2025 دليل فعاليات المدينة - جميع الحقوق محفوظة"
    },
    en: {
      title: "City Events Guide",
      navHome: "Home",
      navEvents: "Events",
      navAbout: "About",
      navContact: "Contact Us",
      eventsHeader: "This Week's Events",
      eventsSubtitle: "Discover the top events in your city",
      categoriesTitle: "Categories",
      categoryMusic: "Music",
      categoryCulture: "Culture",
      categorySports: "Sports",
      categoryFamily: "Family",
      latestEventsTitle: "Latest Events",
      detailsButton: "Details",
      footerText: "© 2025 City Events Guide"
    }
  };

window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.category-badge').forEach(function (badge) {
    badge.addEventListener('click', function () {
      var cat = badge.getAttribute('data-category');
      window.location.href = 'events.html?category=' + encodeURIComponent(cat);
    });
  });
});
  