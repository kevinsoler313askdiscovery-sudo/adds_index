let currentLanguage = '';
let currentTrackIndex = 0;
let isPlaying = false;

// IDs of tours to show (refer to tourAdsGB.js)
const activeTourIds = ['floating', 'chiang_rai', 'tuktuk', 'canal_tour', 'luxury_white', 'royal_princess', 'opulence_luxury', 'yodsiam_sightseeing', 'elephant_sanctuary', 'alangka_luxury', 'white_orchid'];
const filteredTourAds = activeTourIds
    .map(id => tourAds.find(ad => ad.id === id))
    .filter(ad => ad !== undefined);

let currentSlideIndex = 0;
let sliderInterval;
let heroSlideIndex = 0;
let heroSliderInterval;


const audio = document.getElementById('audioPlayer');
const playIcon = document.getElementById('playIcon');




// Cargar imágenes del hero slider dinámicamente
function loadHeroImages() {
    const heroContainer = document.getElementById('heroSliderContainer');
    if (!heroContainer) return;

    heroContainer.innerHTML = '';
    const imageFolder = '../../PICTURES/';

    if (typeof heroImages !== 'undefined' && heroImages.length > 0) {
        heroImages.forEach((fileName, index) => {
            const img = document.createElement('img');
            img.src = imageFolder + fileName;
            img.alt = `Grand Palace Wat Arun ${index + 1}`;
            img.className = 'hero-slider-image';
            if (index === 0) img.classList.add('active');
            heroContainer.appendChild(img);
        });
        console.log(`Hero Slider: ${heroImages.length} imágenes cargadas.`);
    } else {
        console.error("Hero Slider: No se encontró la lista de imágenes (heroImages).");
    }
}

// Inicializar
function init() {
    loadHeroImages();

    populateLanguages();
    setupEventListeners();

    document.getElementById('languageSelectorContainer').classList.add('collapsed');

    const initialPromo = document.getElementById('initialPromoSection');
    if (initialPromo) initialPromo.classList.add('show');

    initPromoSlider();
    startSlider();

    console.log("Hero Slider: Iniciando animación...");
    startHeroSlider();
}

// Poblar idiomas
function populateLanguages() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.innerHTML = '';

    const languages = Object.keys(audioDatabase).sort((a, b) => {
        if (a === 'english') return -1;
        if (b === 'english') return 1;
        return a.localeCompare(b);
    });

    languages.forEach(lang => {
        const button = document.createElement('button');
        button.className = 'language-option';
        if (lang === currentLanguage) button.classList.add('active');
        const label = translations[lang]?.label || lang.charAt(0).toUpperCase() + lang.slice(1);
        button.textContent = label;
        button.onclick = (e) => {
            e.stopPropagation();
            selectLanguage(lang);
        };
        dropdown.appendChild(button);
    });
}

// Seleccionar idioma
function selectLanguage(lang) {
    currentLanguage = lang;
    currentTrackIndex = 0;
    isPlaying = false;

    const label = translations[lang]?.label || lang.charAt(0).toUpperCase() + lang.slice(1);
    document.getElementById('selectedLanguage').textContent = label;

    toggleLanguageDropdown();
    loadPlaylist();
    showPlayer();
    loadTrack(0);
    populateLanguages();
}

// Mostrar/ocultar dropdown de idiomas
function toggleLanguageDropdown() {
    const container = document.getElementById('languageSelectorContainer');
    const isCollapsed = container.classList.contains('collapsed');

    if (isCollapsed) {
        container.classList.remove('collapsed');
        setTimeout(() => {
            const searchInput = document.getElementById('languageSearch');
            searchInput.value = '';
            searchInput.focus();
            filterLanguages();
        }, 100);
    } else {
        container.classList.add('collapsed');
    }
}

// Filtrar idiomas
function filterLanguages() {
    const searchText = document.getElementById('languageSearch').value.toLowerCase();
    const options = document.querySelectorAll('.language-option');

    options.forEach(option => {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchText)) {
            option.style.display = 'flex';
        } else {
            option.style.display = 'none';
        }
    });
}

// Cargar lista de reproducción
function loadPlaylist() {
    const playlistItems = document.getElementById('playlistItems');
    const titleElement = document.getElementById('playlistTitle');

    const t = translations[currentLanguage] || { playlist: "Playlist" };
    titleElement.textContent = t.playlist || "Playlist";

    const promoTitles = ['promoTitle', 'initialPromoTitle'];
    promoTitles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t.promoTitle || "OFERTA ESPECIAL";
    });

    const promoSubtitles = ['promoSubtitle', 'initialPromoSubtitle'];
    promoSubtitles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = t.promoSubtitle || "¡No te pierdas esta oportunidad única!";
    });

    const promoButtons = ['promoButton', 'initialPromoButton'];
    promoButtons.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t.promoButton || "RESERVAR AHORA";
    });

    updatePromoContent();

    const searchInput = document.getElementById('languageSearch');
    if (searchInput) {
        searchInput.placeholder = t.searchPlaceholder || 'Search language...';
    }

    updateMapLanguage();

    playlistItems.innerHTML = '';
    const tracks = audioDatabase[currentLanguage];

    tracks.forEach((track, index) => {
        const button = document.createElement('button');
        button.className = 'playlist-item';
        if (index === currentTrackIndex) button.classList.add('active');

        button.innerHTML = `
                    <div class="playlist-icon">
                        <svg class="icon-small" fill="currentColor" viewBox="0 0 24 24">
                            <path d="${isPlaying && index === currentTrackIndex ? 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' : 'M8 5v14l11-7z'}"/>
                        </svg>
                    </div>
                    <div class="playlist-title">${track.title}</div>
                `;

        button.onclick = () => selectTrack(index);
        playlistItems.appendChild(button);
    });
}

// Mostrar reproductor
function showPlayer() {
    document.getElementById('player').classList.add('show');
    const playlist = document.getElementById('playlist');
    playlist.classList.add('show');
    playlist.classList.add('collapsed');
    playlist.classList.remove('expanded');

    const mapSection = document.querySelector('.map-section');
    if (mapSection) {
        mapSection.classList.add('show');
        setTimeout(() => {
            initMap();
            if (leafletMap) leafletMap.invalidateSize();
        }, 50);
    }

    const promoSection = document.getElementById('promoSection');
    if (promoSection) promoSection.classList.add('show');

    const initialPromo = document.getElementById('initialPromoSection');
    if (initialPromo) initialPromo.classList.remove('show');

    initPromoSlider();
    startSlider();
}

// Lógica del Slider del Hero
function startHeroSlider() {
    if (heroSliderInterval) clearInterval(heroSliderInterval);
    heroSliderInterval = setInterval(nextHeroSlide, 4000);
}

function showHeroSlide(index) {
    const slides = document.querySelectorAll('.hero-slider-image');
    if (index >= slides.length) heroSlideIndex = 0;
    else if (index < 0) heroSlideIndex = slides.length - 1;
    else heroSlideIndex = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === heroSlideIndex);
    });
}

function nextHeroSlide() {
    const slides = document.querySelectorAll('.hero-slider-image');
    if (slides.length <= 1) {
        console.warn("Hero Slider: No hay suficientes imágenes para rotar.");
        return;
    }

    let newIndex;
    let attempts = 0;
    do {
        newIndex = Math.floor(Math.random() * slides.length);
        attempts++;
    } while (newIndex === heroSlideIndex && attempts < 10);

    console.log(`Hero Slider: Cambiando a imagen aleatoria índice ${newIndex}`);
    showHeroSlide(newIndex);
}

function prevHeroSlide() {
    showHeroSlide(heroSlideIndex - 1);
    startHeroSlider();
}

function initPromoSlider() {
    const containers = [
        document.getElementById('sliderContainer'),
        document.getElementById('initialSliderContainer')
    ];

    containers.forEach(container => {
        if (!container) return;
        container.innerHTML = '';
        filteredTourAds.forEach((ad, index) => {
            const img = document.createElement('img');
            img.src = '../../' + ad.background;
            img.alt = `Tour ${index + 1}`;
            img.className = `slider-image ${index === 0 ? 'active' : ''}`;
            container.appendChild(img);
        });
    });

    updatePromoContent();
}

function updatePromoContent() {
    if (filteredTourAds.length === 0) return;
    const ad = filteredTourAds[currentSlideIndex];
    const promoSections = [
        document.getElementById('promoSection'),
        document.getElementById('initialPromoSection')
    ];

    let langKey = currentLanguage.toLowerCase();
    const content = ad.content[langKey] || ad.content['english'] || Object.values(ad.content)[0];

    promoSections.forEach(section => {
        if (section) section.href = ad.link;
    });

    const priceTags = ['promoNewPrice', 'initialPromoNewPrice'];
    priceTags.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = `${content.discount} OFF`;
    });

    const descriptions = ['promoDescription', 'initialPromoDescription'];
    descriptions.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = content.title;
    });

    const slides = document.querySelectorAll('.slider-image');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i % filteredTourAds.length === currentSlideIndex);
    });
}

function startSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    if (filteredTourAds.length === 0) return;
    currentSlideIndex = (currentSlideIndex + 1) % filteredTourAds.length;
    updatePromoContent();
}

function prevSlide() {
    if (filteredTourAds.length === 0) return;
    currentSlideIndex = (currentSlideIndex - 1 + filteredTourAds.length) % filteredTourAds.length;
    updatePromoContent();
    startSlider();
}

// Cargar pista
function loadTrack(index) {
    const tracks = audioDatabase[currentLanguage];
    if (!tracks || !tracks[index]) return;

    currentTrackIndex = index;
    const track = tracks[index];

    audio.src = track.url;
    document.getElementById('trackTitle').textContent = track.title;
    document.getElementById('trackLanguage').textContent =
        translations[currentLanguage]?.label || currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);

    loadPlaylist();

    if (isPlaying) {
        audio.play();
    }
}

// Seleccionar pista
function selectTrack(index) {
    loadTrack(index);
    isPlaying = true;
    audio.play();
    updatePlayIcon();
}

// Toggle play/pause
function togglePlay() {
    if (!currentLanguage) return;

    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }

    isPlaying = !isPlaying;
    updatePlayIcon();
    loadPlaylist();
}

// Pista anterior
function previousTrack() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
    } else if (currentTrackIndex > 0) {
        loadTrack(currentTrackIndex - 1);
        if (isPlaying) audio.play();
    }
}

// Pista siguiente
function nextTrack() {
    const tracks = audioDatabase[currentLanguage];
    if (currentTrackIndex < tracks.length - 1) {
        loadTrack(currentTrackIndex + 1);
        if (isPlaying) audio.play();
    } else {
        loadTrack(0);
        isPlaying = false;
        updatePlayIcon();
    }
}

// Actualizar icono de play
function updatePlayIcon() {
    playIcon.innerHTML = isPlaying
        ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
        : '<path d="M8 5v14l11-7z"/>';
}

// Formatear tiempo
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Actualizar gradiente de barras
function updateProgressGradient(value, max) {
    const percentage = (value / max) * 100;
    const isDark = document.body.classList.contains('dark');
    const bgColor = isDark ? '#374151' : '#e5e7eb';
    return `linear-gradient(to right, #9f24e7 0%, #f200c4 ${percentage}%, ${bgColor} ${percentage}%, ${bgColor} 100%)`;
}

// Event listeners
function setupEventListeners() {
    audio.addEventListener('timeupdate', () => {
        const progressBar = document.getElementById('progressBar');
        progressBar.max = audio.duration || 0;
        progressBar.value = audio.currentTime;
        progressBar.style.background = updateProgressGradient(audio.currentTime, audio.duration);
        document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        document.getElementById('duration').textContent = formatTime(audio.duration);
    });

    audio.addEventListener('ended', () => {
        nextTrack();
    });

    document.getElementById('progressBar').addEventListener('input', (e) => {
        audio.currentTime = e.target.value;
    });

    document.addEventListener('click', (e) => {
        const container = document.getElementById('languageSelectorContainer');
        if (!container.contains(e.target)) {
            container.classList.add('collapsed');
        }
    });
}

// Toggle playlist visibility
function togglePlaylist() {
    const playlist = document.getElementById('playlist');
    if (playlist.classList.contains('collapsed')) {
        playlist.classList.remove('collapsed');
        playlist.classList.add('expanded');
    } else {
        playlist.classList.add('collapsed');
        playlist.classList.remove('expanded');
    }
}

// Toggle tema
function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    const isDark = document.body.classList.contains('dark');
    const icon = document.getElementById('themeIcon');

    if (isDark) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
    }

    const progressBar = document.getElementById('progressBar');
    progressBar.style.background = updateProgressGradient(audio.currentTime, audio.duration);
}

// Inicializar mapa (lazy - solo cuando la sección es visible)
let leafletMap = null;
let mapMarkers = [];

// Puntos del tour: Grand Palace → Wat Arun → Wat Pho
const tourMapPoints = [
    {
        lat: 13.749861010687969, 
        lng: 100.4915657711645,
        url: 'https://monkeytravel.co'
    },
    {
        lat: 13.743901675746288, 
        lng: 100.48843327116452,
        url: 'https://monkeytravel.co'
    },
    {
        lat: 13.746418489235563, 
        lng: 100.49278402883549,
        url: 'https://monkeytravel.co'
    },
];

function buildPopupHTML(name, desc, url) {
    const descHtml = desc ? `<p style="margin:4px 0 8px;font-size:0.85rem;color:#9ca3af;">${desc}</p>` : '';
    const linkHtml = url
        ? `<a href="${url}" target="_blank" rel="noopener"
              style="display:inline-block;padding:6px 14px;border-radius:8px;
                     background:linear-gradient(to right,#9f24e7,#f200c4);
                     color:white;font-size:0.8rem;font-weight:700;text-decoration:none;">
            Pictures and information
           </a>`
        : '';
    return `<div style="min-width:160px;line-height:1.4;text-align:center;">
        ${descHtml}
        ${linkHtml}
    </div>`;
}

function initMap() {
    if (leafletMap) return;

    const firstPoint = tourMapPoints[0] || { lat: 13.75, lng: 100.49 };
    leafletMap = L.map('map').setView([firstPoint.lat, firstPoint.lng], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(leafletMap);

    const safeMapStops = typeof tourMapStops !== 'undefined' ? tourMapStops : {};
    const fallbackStops = safeMapStops['english'] || [];
    const stops = safeMapStops[currentLanguage] || fallbackStops;

    tourMapPoints.forEach((point, i) => {
        const stop = stops[i] || {};
        const name = stop.name || `Stop ${i + 1}`;
        const desc = stop.description || '';
        const url = point.url || '';

        const circle = L.circle([point.lat, point.lng], {
            color: point.color || '#9f24e7',
            fillColor: point.fillColor || '#f200c4',
            fillOpacity: point.fillOpacity ?? 0.35,
            radius: point.radius || 200
        })
            .addTo(leafletMap)
            .bindTooltip(`<strong>${name}</strong>`, {
                permanent: true,
                direction: 'top',
                interactive: true,
                className: 'poi-tooltip'
            })
            .bindPopup(buildPopupHTML(name, desc, url), { maxWidth: 240 });

        mapMarkers.push(circle);
    });

    if (mapMarkers.length > 0) {
        const group = L.featureGroup(mapMarkers);
        leafletMap.fitBounds(group.getBounds().pad(0.3));
    }

    updateMapLanguage();
}

function updateMapLanguage() {
    const mapTitleEl = document.querySelector('.map-title');
    if (mapTitleEl) {
        const t = translations[currentLanguage] || translations['english'];
        mapTitleEl.textContent = t.mapTitle || 'Location';
    }

    if (mapMarkers.length > 0) {
        const safeMapStops = typeof tourMapStops !== 'undefined' ? tourMapStops : {};
        const fallbackStops = safeMapStops['english'] || [];
        const stops = safeMapStops[currentLanguage] || fallbackStops;

        mapMarkers.forEach((marker, i) => {
            const stop = stops[i] || {};
            const name = stop.name || `Stop ${i + 1}`;
            const desc = stop.description || '';
            const url = tourMapPoints[i]?.url || '';

            marker.setTooltipContent(`<strong>${name}</strong>`);
            marker.setPopupContent(buildPopupHTML(name, desc, url));
        });
    }
}

// Inicializar app
document.addEventListener('DOMContentLoaded', init);
