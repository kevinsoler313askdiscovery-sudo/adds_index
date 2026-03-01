// Logic for audio player

let currentLanguage = '';
let currentTrackIndex = 0;
let isPlaying = false;

// IDs of tours to show (refer to tourAdsGB.js)
const activeTourIds = ['floating', 'chiang_rai', 'tuktuk', 'white_orchid', 'luxury_white', 'royal_princess', 'opulence_luxury', 'yodsiam_sightseeing', 'elephant_sanctuary', 'alangka_luxury'];
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

    heroContainer.innerHTML = ''; // Limpiar por si acaso
    const imageFolder = '../../PICTURES/CANAL TOUR WEB/';

    // Usar la lista global heroImages (cargada desde heroImages.js)
    if (typeof heroImages !== 'undefined' && heroImages.length > 0) {
        heroImages.forEach((fileName, index) => {
            const img = document.createElement('img');
            img.src = imageFolder + fileName;
            img.alt = `Canal Tour ${index + 1}`;
            img.className = 'hero-slider-image';
            // La primera imagen será activa
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
    // Cargar imágenes del hero primero
    loadHeroImages();

    populateLanguages();
    setupEventListeners();

    // Inicializar selector de idiomas como colapsado
    document.getElementById('languageSelectorContainer').classList.add('collapsed');

    // Mostrar publicidad inicial
    const initialPromo = document.getElementById('initialPromoSection');
    if (initialPromo) initialPromo.classList.add('show');

    // Inicializar publicidad inicial
    initPromoSlider();
    startSlider();

    // Inicializar slider del hero
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
    populateLanguages(); // Actualizar estado activo
}

// Mostrar/ocultar dropdown de idiomas
function toggleLanguageDropdown() {
    const container = document.getElementById('languageSelectorContainer');
    const isCollapsed = container.classList.contains('collapsed');

    if (isCollapsed) {
        container.classList.remove('collapsed');
        // Enfocar el buscador al abrir
        setTimeout(() => {
            const searchInput = document.getElementById('languageSearch');
            searchInput.value = '';
            searchInput.focus();
            filterLanguages(); // Resetear filtro
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

// Cargar lista de reproducciÃ³n
function loadPlaylist() {
    const playlistItems = document.getElementById('playlistItems');
    const titleElement = document.getElementById('playlistTitle');

    // Cambia el tÃ­tulo segÃºn el idioma
    const t = translations[currentLanguage] || { playlist: "Playlist" };
    titleElement.textContent = t.playlist || "Playlist";

    // Actualizar secciones de publicidad
    const promoTitles = ['promoTitle', 'initialPromoTitle'];
    promoTitles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t.promoTitle || "OFERTA ESPECIAL";
    });

    const promoSubtitles = ['promoSubtitle', 'initialPromoSubtitle'];
    promoSubtitles.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = t.promoSubtitle || "Â¡No te pierdas esta oportunidad Ãºnica!";
    });

    const promoButtons = ['promoButton', 'initialPromoButton'];
    promoButtons.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t.promoButton || "RESERVAR AHORA";
    });

    // Siempre actualizar el contenido de la promociÃ³n para reflejar el idioma seleccionado
    updatePromoContent();

    // Actualizar placeholder del buscador
    const searchInput = document.getElementById('languageSearch');
    if (searchInput) {
        searchInput.placeholder = t.searchPlaceholder || (currentLanguage === 'espaÃ±ol' ? 'Buscar idioma...' : 'Search language...');
    }

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
    // Asegurarse de que empiece colapsado
    playlist.classList.add('collapsed');
    playlist.classList.remove('expanded');

    // Mostrar secciÃ³n de publicidad principal
    const promoSection = document.getElementById('promoSection');
    if (promoSection) promoSection.classList.add('show');

    // Ocultar secciÃ³n de publicidad inicial
    const initialPromo = document.getElementById('initialPromoSection');
    if (initialPromo) initialPromo.classList.remove('show');

    initPromoSlider();
    startSlider();
}

// LÃ³gica del Slider del Hero
function startHeroSlider() {
    if (heroSliderInterval) clearInterval(heroSliderInterval);
    heroSliderInterval = setInterval(nextHeroSlide, 4000); // Cambia cada 4 segundos
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
    // Generar un índice aleatorio diferente al actual
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
    startHeroSlider(); // Reiniciar el intervalo al cambiar manualmente
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

    // Determinar el idioma para el contenido del anuncio de forma dinÃ¡mica
    let langKey = currentLanguage.toLowerCase();

    // Intentar obtener el contenido en el idioma actual, si no existe, usar 'english' como respaldo
    const content = ad.content[langKey] || ad.content['english'] || Object.values(ad.content)[0];

    promoSections.forEach(section => {
        if (section) section.href = ad.link;
    });

    // Actualizar el porcentaje de descuento en la etiqueta roja
    const priceTags = ['promoNewPrice', 'initialPromoNewPrice'];
    priceTags.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = `${content.discount} OFF`;
    });

    // Actualizar el tÃ­tulo del tour
    const descriptions = ['promoDescription', 'initialPromoDescription'];
    descriptions.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = content.title;
    });

    // Actualizar imÃ¡genes activas
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
    startSlider(); // Reiniciar el intervalo al cambiar manualmente
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
    // Audio events
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

    // Progress bar
    document.getElementById('progressBar').addEventListener('input', (e) => {
        audio.currentTime = e.target.value;
    });



    // Cerrar selector de idiomas al hacer clic fuera
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

    // Actualizar gradientes
    const progressBar = document.getElementById('progressBar');

    progressBar.style.background = updateProgressGradient(audio.currentTime, audio.duration);

}

// Inicializar app
document.addEventListener('DOMContentLoaded', init);
