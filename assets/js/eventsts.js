const translations = {
    ar: {
      title: "دليل فعاليات المدينة",
      navHome: "الرئيسية",
      navEvents: "الفعاليات",
      navAbout: "عن الدليل",
      navContact: "اتصل بنا",
      pageHeader: "جميع الفعاليات",
      searchPlaceholder: "ابحث عن فعالية...",
      detailsButton: "التفاصيل",
      footerText: "© 2025 دليل فعاليات المدينة",
      similarTitle: "فعاليات مشابهة",
      addToCalendar: "أضف إلى التقويم",
      shareButton: "شارك",
      galleryTitle: "معرض الصور",
      catAll: "الكل",
      catMusic: "موسيقى",
      catCulture: "ثقافة",
      catSports: "رياضة",
      catFamily: "عائلي"
    },
    en: {
      title: "City Events Guide",
      navHome: "Home",
      navEvents: "Events",
      navAbout: "About",
      navContact: "Contact",
      pageHeader: "All Events",
      searchPlaceholder: "Search for an event...",
      detailsButton: "Details",
      footerText: "© 2025 City Events Guide",
      similarTitle: "Similar Events",
      addToCalendar: "Add to Calendar",
      shareButton: "Share",
      galleryTitle: "Photo Gallery",
      catAll: "All",
      catMusic: "Music",
      catCulture: "Culture",
      catSports: "Sports",
      catFamily: "Family"
    }
  };

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || '';
}

window.addEventListener('DOMContentLoaded', function () {
  const eventsList = document.getElementById('eventsList');
  const searchInput = document.getElementById('searchInput');
  const governorateFilter = document.getElementById('governorateFilter');
  let currentCategory = getQueryParam('category');
  const dateFilterInput = document.createElement('input');
  dateFilterInput.type = 'text';
  dateFilterInput.placeholder = 'ابحث بالتاريخ...';
  dateFilterInput.className = 'form-control w-50 d-inline-block my-2';
  searchInput.parentNode.insertBefore(dateFilterInput, searchInput.nextSibling);
  
  function renderEvents() {
    let filteredEvents = eventsData;
    const searchVal = searchInput.value.trim().toLowerCase();
    const dateVal = dateFilterInput.value.trim();
    const governorate = governorateFilter.value;
    const category = currentCategory;
    
    if (searchVal) {
      filteredEvents = filteredEvents.filter(e =>
        e.title.ar.toLowerCase().includes(searchVal) ||
        e.title.en.toLowerCase().includes(searchVal) ||
        e.location.ar.toLowerCase().includes(searchVal) ||
        e.location.en.toLowerCase().includes(searchVal) ||
        e.description.ar.toLowerCase().includes(searchVal) ||
        e.description.en.toLowerCase().includes(searchVal)
      );
    }
    if (category) {
      filteredEvents = filteredEvents.filter(e => e.category === category);
    }
    if (dateVal) {
      filteredEvents = filteredEvents.filter(e => 
        e.date.ar.includes(dateVal) || e.date.en.toLowerCase().includes(dateVal.toLowerCase())
      );
    }
    if (governorate) {
      filteredEvents = filteredEvents.filter(e => e.governorate === governorate);
    }
    eventsList.innerHTML = '';
    if (!filteredEvents.length) {
      eventsList.innerHTML = '<div class="py-5 text-center text-danger">لا توجد فعاليات مطابقة</div>';
      return;
    }
    filteredEvents.forEach(e => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
      col.innerHTML = `
          <div class="card">
            <img src="${e.image}" alt="فعالية">
            <div class="card-body">
              <h5>${e.title.ar}</h5>
              <p>${e.date.ar} - ${e.location.ar}</p>
              <a href="event.html?id=${e.id}" class="btn details-btn">التفاصيل</a>
            </div>
          </div>
      `;
      eventsList.appendChild(col);
    });
  }

  renderEvents();

  searchInput.addEventListener('input', renderEvents);
  dateFilterInput.addEventListener('input', renderEvents);
  if (governorateFilter) {
    governorateFilter.addEventListener('change', renderEvents);
  }

  document.querySelectorAll('.category-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Remove active class from all buttons
      document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      // Update current category
      currentCategory = btn.getAttribute('data-category');
      renderEvents();
    });
  });
});
  