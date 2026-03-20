/* ============================================
   Portfolio App - Modern Minimal + Geo Accents
   ============================================ */

const PROJECTS = [
  {
    id: 'polaris',
    title: 'Polaris Lab UK',
    tag: 'Web GIS',
    thumbnail: 'img/Polaris_Lab_UK_index.png',
    type: 'external',
    description: '<p>Polaris Lab UK is an external web-based GIS project showcasing geospatial analysis and interactive mapping capabilities.</p>',
    techStack: ['Web GIS', 'JavaScript', 'HTML/CSS'],
    externalLink: 'https://gangaraju09.github.io/Polaris-Lab-UK/index.html'
  },
  {
    id: 'vruksh',
    title: 'Project Vruksh - Tree Canopy vs Urban Heat',
    tag: 'Remote Sensing',
    thumbnail: 'img/analysis_trees_temp_2022_index.png',
    type: 'iframe',
    description: '<p>Project Vruksh addresses the escalating challenge of rising urban temperatures. Focusing on the diminishing tree canopy as a central protagonist, the project underscores trees\' critical role in climate regulation and environmental preservation.</p><p>Leveraging GDAL Python programming, NAIP, and LIDAR datasets, the analysis reveals a significant 6% shift in tree cover within Charlotte\'s business district from 2018 to 2022. Heat island identification via Google Earth Engine unveils a striking average temperature change of 10-20°F during the same period.</p>',
    techStack: ['Python', 'GDAL', 'NAIP', 'LiDAR', 'Google Earth Engine', 'ArcGIS StoryMaps'],
    iframeSrc: 'https://storymaps.arcgis.com/stories/5ddbe34a4c554038a322549f6e15c24a',
    images: ['img/analysis_central_district_trees_2018.png', 'img/analysis_central_district_trees_2022.png', 'img/analysis_central_district_temp_2018.png', 'img/analysis_central_district_temp_2022.png'],
    externalLink: 'https://arcg.is/TjzK8'
  },
  {
    id: 'nc-regions',
    title: 'North Carolina Historic Regions',
    tag: 'Cartography',
    thumbnail: 'img/NC_index.png',
    type: 'image',
    description: '<p>A cartographic visualization of North Carolina\'s historic regions, showcasing the state\'s diverse geographic and cultural landscape through carefully designed map symbology and layout.</p>',
    techStack: ['ArcGIS Pro', 'Cartography', 'Map Design'],
    images: ['img/NC%20MAP.png']
  },
  {
    id: 'veterans',
    title: 'USA Army Dominance - Veterans Analysis',
    tag: 'Cartography',
    thumbnail: 'img/Veterans_index.png',
    type: 'image',
    description: '<p>A demographic analysis of U.S. Veterans utilizing ArcGIS tools for spatial analysis on veterans\' distribution and demographics. Features a Chernoff design bivariate map to visualize the relationship between variables, providing insights into the geographic distribution of veteran populations across the country.</p>',
    techStack: ['ArcGIS Pro', 'Bivariate Mapping', 'Chernoff Design'],
    images: ['img/Veterans.png']
  },
  {
    id: 'gdp',
    title: 'GDP Evolution - Interactive Map',
    tag: 'Interactive Viz',
    thumbnail: 'img/GDP_Change_index.png',
    type: 'iframe',
    description: '<p>This project focuses on utilizing GIS & cartography techniques to visualize and analyze the changes in GDP over multiple years in different countries. It employs JavaScript and Leaflet to create a user interface that allows users to interact with various controls and observe GDP changes visually.</p><p>The UI controls allow users to select specific countries, choose time periods, and customize the visual representation through choropleth mapping to enhance understanding of the data.</p>',
    techStack: ['JavaScript', 'Leaflet.js', 'GeoJSON', 'Choropleth'],
    iframeSrc: 'https://gangaraju09.github.io/Interactive_Cartography/JavaScript_leaflet/index.html',
    githubLink: 'https://github.com/gangaraju09/Interactive_Cartography'
  },
  {
    id: 'crime-rate',
    title: 'Crime Rate Analysis in USA',
    tag: 'Data Visualization',
    thumbnail: 'img/CrimeRate_index.png',
    type: 'iframe',
    description: '<p>This project visualizes socioeconomic indicators such as poverty, literacy, population, and GDP leading to each state\'s crime rate. Using MAP and Dot line plot visualization techniques with D3 JavaScript to illustrate the associations between these variables, gaining valuable insights into factors contributing to crime rates across the USA.</p>',
    techStack: ['D3.js', 'JavaScript', 'SVG', 'Data Visualization'],
    iframeSrc: 'https://gangaraju09.github.io/Interactive_Cartography/JavaScript_D3/index.html',
    images: ['img/crimerate.png'],
    githubLink: 'https://github.com/gangaraju09/Interactive_Cartography'
  },
  {
    id: 'gangotri',
    title: 'Gangothri Glacier Change Analysis',
    tag: 'Remote Sensing',
    thumbnail: 'img/GangotriGalcier_Index.png',
    type: 'iframe',
    description: '<p>This project tells the story of glaciers, their importance, and how they have retreated over the past three decades. Focusing on the Gangothri glacier in the Himalayas, India, it shows the observable change over the last 30 years through adjacent images from 1991, 2001, 2011, and 2022.</p>',
    techStack: ['Remote Sensing', 'Satellite Imagery', 'Interactive Visualization'],
    iframeSrc: 'https://gangaraju09.github.io/Interactive_Cartography/Glacier_Change/Glacier_change.html',
    images: ['img/June1991_1.png', 'img/May2001_1.png', 'img/May2011.png', 'img/Glacier%20Change2022.png'],
    githubLink: 'https://github.com/gangaraju09/Interactive_Cartography'
  },
  {
    id: 'africa',
    title: 'Africa Political Continent Map',
    tag: 'Cartography',
    thumbnail: 'img/AFRICA_index.png',
    type: 'image',
    description: '<p>A detailed political map of the African continent, designed using cartographic principles to present a clear and visually compelling overview of national boundaries, capitals, and geographic features.</p>',
    techStack: ['ArcGIS Pro', 'Cartography', 'Map Design'],
    images: ['img/AFRICA_Political%20Map.png']
  },
  {
    id: 'earth-redesign',
    title: 'Redesign of Earth BaseMap',
    tag: 'Cartography',
    thumbnail: 'img/CustomizedEarth_index.png',
    type: 'iframe',
    description: '<p>Inspired by the movie Saaho, this map was designed using Mapbox Studio for display in a gallery exhibit. Orange-shaped icons represent major cities from the movie\'s storyline. The base land color represents building visuals from the cinematic city, while creamy buildings reflect the protagonist\'s skin tone.</p><p>Additional symbols including restaurants, pubs, educational institutions, and hospitals provide context and make the map more informative and engaging.</p>',
    techStack: ['Mapbox Studio', 'CartoCSSS', 'Custom Symbology'],
    iframeSrc: 'https://gangaraju09.github.io/Interactive_Cartography/MapBox_Slippy_Map/index.html',
    githubLink: 'https://github.com/gangaraju09/Interactive_Cartography'
  },
  {
    id: 'cw-farmers',
    title: 'Central Wisconsin Farmers Market',
    tag: 'Web GIS',
    thumbnail: 'img/Central%20Wisconsin_index.png',
    type: 'gallery',
    description: '<p>An online platform providing comprehensive information about farmers markets and SNAP stores in central Wisconsin. Features market locations, community demographics, and spatial boundaries for analysis.</p><p>By combining demographic information with farmers markets and SNAP stores data, users can identify whether high-poverty areas have access to healthy food resources, highlighting gaps in food security.</p>',
    techStack: ['ArcGIS Online', 'Web App', 'Demographics', 'SNAP Data'],
    images: ['img/centralwisconsinapp.png', 'img/CW_image.png'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'covid',
    title: 'Dane County COVID-19 Analysis',
    tag: 'Spatial Analysis',
    thumbnail: 'img/DaneCovid_index.png',
    type: 'gallery',
    description: '<p>A visualization of COVID-19 cases in Dane County, Wisconsin, monitoring dynamic human mobility changes and travel flow patterns at various geographic scales. Used Python geopandas to convert data into GeoJSON format, aggregating census tract information with ZCTA.</p><p>Human mobility data was converted into source & destination coordinates using Google geocoding and visualized with the Kepler spatial data visualization tool.</p>',
    techStack: ['Python', 'GeoPandas', 'GeoJSON', 'Kepler.gl', 'Google Maps API'],
    images: ['img/covid_daneCounty.png', 'img/visitor_flows_53508.png'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'flickr',
    title: 'Flickr Photo Distribution - Disney World',
    tag: 'Spatial Analysis',
    thumbnail: 'img/Photo_distribution.png',
    type: 'gallery',
    description: '<p>Geospatial analysis of geotagged Flickr photos near Disney Land in Orange County using the Flickr API. The Orange County shapefile was converted into a geopandas object, and spatial-within analysis determined photos within specific boundaries.</p><p>K-means clustering grouped similar photos by spatial location, identifying spatial clusters. The combination of geopandas, GeoSeries, Shapely, and K-means proved effective for analyzing geospatial data distribution.</p>',
    techStack: ['Python', 'Flickr API', 'GeoPandas', 'Shapely', 'K-means Clustering'],
    images: ['img/Orange_county.png', 'img/flickr_image_points.png', 'img/no_spatial_within.png', 'img/with_spatial_within.png', 'img/cluster.png'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'network',
    title: 'Madison Network Analysis',
    tag: 'Network Analysis',
    thumbnail: 'img/Network_Analysis_index.png',
    type: 'gallery',
    description: '<p>Utilized OSMnx and NetworkX Python libraries to analyze complex road networks in Madison, Wisconsin. OSMnx accesses OpenStreetMap data while NetworkX provides tools for studying intricate networks.</p><p>Computed edge closeness centrality, betweenness centrality (measuring shortest path frequency), and degree centrality (measuring edge connections per node) to study the structure and dynamics of Madison\'s road network.</p>',
    techStack: ['Python', 'OSMnx', 'NetworkX', 'OpenStreetMap'],
    images: ['img/Network_set.png', 'img/Edge_centrality.png'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'lulc',
    title: 'Land Use Land Cover Change',
    tag: 'Remote Sensing',
    thumbnail: 'img/AralSea_index.gif',
    type: 'gallery',
    description: '<p>Generated two-period maps of land cover in Dane County using Dynamic World data on Google Earth Engine for 2016 and 2022, comparing changes in land use over the six-year period.</p><p>Used Landsat 8 imagery to compute NDVI values for vegetation analysis. Created a Landsat timelapse animation GIF showing environmental changes over time, providing valuable insights for monitoring and analysis.</p>',
    techStack: ['Google Earth Engine', 'Landsat 8', 'NDVI', 'Dynamic World'],
    images: ['img/landcover.png', 'img/Aral_sea_ts.gif'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'gwr',
    title: 'Spatial Autocorrelation & GWR Analysis',
    tag: 'Spatial Statistics',
    thumbnail: 'img/GWR_index.png',
    type: 'gallery',
    description: '<p>Applied Moran\'s I and Geographic Weighted Regression (GWR) using PySAL to analyze wasted votes distribution during the 2020 presidential election in Madison, WI. Identified hotspots and coldspots indicating spatial autocorrelation patterns.</p><p>Also analyzed Airbnb median price variation in Austin, Texas based on mean bedrooms and review scores using GWR, enabling identification of local pricing patterns.</p>',
    techStack: ['PySAL', 'Moran\'s I', 'GWR', 'Spatial Statistics'],
    images: ['img/Coldspots.png', 'img/GWR.png'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'beloit',
    title: 'Beloit Farmers Market Network Analysis',
    tag: 'Network Analysis',
    thumbnail: 'img/BeloitFMRoutes_index.png',
    type: 'image',
    description: '<p>Analyzes the spatial relationship between farmers\' locations and the Beloit Farmers Market using geoprocessing techniques. Calculates distances and estimated travel times between each farmer\'s location and the market.</p><p>The application provides insights into products produced by each farmer, empowering users to assess accessibility and feasibility of market participation while fostering transparency about the market\'s agricultural offerings.</p>',
    techStack: ['ArcGIS', 'Network Analysis', 'Geoprocessing'],
    images: ['img/Beloit%20FM_Routes.png'],
    githubLink: 'https://github.com/gangaraju09/GeoSpatial_BigData'
  },
  {
    id: 'site-selection',
    title: 'Suitable Site Selection',
    tag: 'GIS Analysis',
    thumbnail: 'img/Site_selection_index.png',
    type: 'image',
    description: '<p>A GIS-based site selection analysis using spatial criteria to identify optimal locations. Employs overlay analysis, weighted scoring, and geographic constraints to determine the most suitable sites for development.</p>',
    techStack: ['ArcGIS Pro', 'Overlay Analysis', 'Weighted Scoring'],
    images: ['img/GIS%20LAB08.png']
  },
  {
    id: 'puzzle-map',
    title: 'Dane County Puzzle Map',
    tag: 'Cartography',
    thumbnail: 'img/dane_county_puzzle_map.png',
    type: 'image',
    description: '<p>A creative cartographic piece presenting Dane County, Wisconsin in a puzzle-style map design, blending artistic expression with geographic accuracy.</p>',
    techStack: ['Cartography', 'Map Design', 'Creative Visualization'],
    images: ['img/dane_county_puzzle_map_index.png']
  }
];

/* --- DOM Ready --- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initModal();
});

/* --- Navigation --- */
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');

  // Scroll-aware nav
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close mobile nav
      if (hamburger) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  });

  // Scroll spy
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
  }
}

/* --- Scroll Reveal --- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.fade-in');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* --- Modal System --- */
function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const backdrop = modal.querySelector('.modal-backdrop');
  const closeBtn = modal.querySelector('.modal-close');

  // Click handlers on project cards
  document.querySelectorAll('[data-project-id]').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset.projectId);
    });
  });

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const tagEl = modal.querySelector('.modal-tag');
  const titleEl = modal.querySelector('.modal-title');
  const tagsEl = modal.querySelector('.modal-tags');
  const descEl = modal.querySelector('.modal-description');
  const mediaEl = modal.querySelector('.modal-media');
  const linksEl = modal.querySelector('.modal-links');

  // Populate
  tagEl.textContent = project.tag;
  titleEl.textContent = project.title;

  tagsEl.innerHTML = project.techStack.map(t => `<span>${t}</span>`).join('');
  descEl.innerHTML = project.description;

  // Media
  mediaEl.innerHTML = '';
  if (project.type === 'iframe' && project.iframeSrc) {
    mediaEl.innerHTML = `<div class="iframe-wrapper"><iframe src="${project.iframeSrc}" allowfullscreen loading="lazy"></iframe></div>`;
    // Also show gallery images below iframe if present
    if (project.images && project.images.length > 0) {
      const galleryHTML = project.images.map(img =>
        `<img src="${img}" alt="${project.title}" loading="lazy">`
      ).join('');
      const cols = project.images.length === 1 ? 'single-col' : '';
      mediaEl.innerHTML += `<div class="gallery-grid ${cols}" style="margin-top:16px">${galleryHTML}</div>`;
    }
  } else if (project.type === 'gallery' && project.images) {
    const cols = project.images.length === 1 ? 'single-col' : '';
    mediaEl.innerHTML = `<div class="gallery-grid ${cols}">${
      project.images.map(img => `<img src="${img}" alt="${project.title}" loading="lazy">`).join('')
    }</div>`;
  } else if (project.type === 'image' && project.images) {
    mediaEl.innerHTML = `<div class="gallery-grid single-col">${
      project.images.map(img => `<img src="${img}" alt="${project.title}" loading="lazy">`).join('')
    }</div>`;
  }

  // Links
  linksEl.innerHTML = '';
  if (project.externalLink) {
    linksEl.innerHTML += `<a href="${project.externalLink}" target="_blank" rel="noopener" class="modal-link-btn primary">Visit Project &#8599;</a>`;
  }
  if (project.githubLink) {
    linksEl.innerHTML += `<a href="${project.githubLink}" target="_blank" rel="noopener" class="modal-link-btn secondary">GitHub Repo &#8599;</a>`;
  }

  // Show
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  modal.classList.remove('active');
  document.body.classList.remove('modal-open');

  // Destroy iframes after transition
  setTimeout(() => {
    const mediaEl = modal.querySelector('.modal-media');
    if (mediaEl) mediaEl.innerHTML = '';
  }, 300);
}
