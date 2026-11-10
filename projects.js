/* Project descriptions transcribed and edited for web from Bikram Ray's 2026 portfolio PDF. No completed-construction claims. */
const projects = [
  {
    "slug": "studio-apartment",
    "title": "Studio Apartment",
    "category": "residential",
    "type": "Residential Design",
    "location": "Urlabari-03, Morang",
    "pages": "3–4",
    "concept": "Minimalist Living — Less Is More",
    "summary": "A compact, clutter-free space where simplicity, functionality and openness create comfortable living.",
    "details": "Includes a master plan, east, west, south and north elevations, two building sections and interior visualizations."
  },
  {
    "slug": "bike-showroom",
    "title": "Bike Showroom",
    "category": "commercial",
    "type": "Commercial Design",
    "location": "Aaitbare, Morang",
    "pages": "5–8",
    "concept": "Green Ride",
    "summary": "Inspired by eco-friendly mobility, the showroom creates smooth, ride-like circulation around motorcycle displays. Greenery, natural light, ventilation and sustainable materials express responsible transportation.",
    "details": "Includes north-oriented master plan, four elevations, two sections, front view, exterior and interior renderings."
  },
  {
    "slug": "miklajung-residence",
    "title": "Residence",
    "category": "residential",
    "type": "Residential Design",
    "location": "Miklajung, Morang",
    "pages": "9–11",
    "concept": "Modern Living with Nature",
    "summary": "Inspired by Le Corbusier’s Five Points, this residence adapts modern architecture to the sloping landscape of Ramite Dada, using pilotis, a free plan, free façade, ribbon windows and roof gardens.",
    "details": "Includes floor plan, two sections and multiple rendered perspectives of the residence and landscape."
  },
  {
    "slug": "secondary-school",
    "title": "Secondary School",
    "category": "institutional",
    "type": "Educational Architecture",
    "location": "Dharan-14, Bijaypur, Sunsari",
    "pages": "12–15",
    "concept": "Connected Learning Courtyards",
    "summary": "A central datum spine connects school blocks and organizes movement. Courtyards support learning, gathering and play, while shading, ventilation, greenery and orientation respond to the local climate and sloping site.",
    "details": "Site analysis, master plan, site plan, elevations, sections and renderings of the canteen, parking, library and lab, kindergarten, secondary block, administration, sports courts and auditorium."
  },
  {
    "slug": "commercial-complex",
    "title": "Commercial Complex",
    "category": "commercial",
    "type": "Commercial Architecture",
    "location": "Biratnagar, Morang",
    "pages": "16–17",
    "concept": "Efficient Commercial Machine",
    "summary": "A ceiling-fan-inspired form with four curved blades and a central hub organizes commercial activities. The central atrium connects functions through continuous circulation, airflow and movement.",
    "details": "Plot area: 76,160 sq. ft. Includes form transformation diagrams, master plan, site plan, elevations, sections and exterior renderings."
  },
  {
    "slug": "working-drawings",
    "title": "Working Drawings",
    "category": "technical",
    "type": "Technical Documentation",
    "location": "Architectural documentation",
    "pages": "18–20",
    "concept": "From Concept to Technical Detail",
    "summary": "A collection of architectural, building services and structural drawing sheets demonstrating technical documentation across multiple disciplines.",
    "details": "Includes floor plans, elevations, sections, water supply and sanitation layouts, electrical layouts, structural plans and details."
  },
  {
    "slug": "landscape-park",
    "title": "Landscape / Park Design",
    "category": "landscape",
    "type": "Landscape Architecture",
    "location": "Dharan, Sunsari",
    "pages": "21–23",
    "concept": "People-Centred Public Space",
    "summary": "An inclusive public park integrating nature, recreation, water features and community activities through organic planning and fluid spatial connections.",
    "details": "Includes overall park visualization, roof/top plan, water fountain, parking, seating spaces, children's play area and open-air theatre."
  },
  {
    "slug": "additional-designs",
    "title": "Additional Residential & Interior Work",
    "category": "interior",
    "type": "Residential & Interior Visualizations",
    "location": "Gorkha and Itahari, Nepal",
    "pages": "24–25",
    "concept": "Selected Design Explorations",
    "summary": "Additional neoclassical and modern residential visualizations alongside interior work covering living, kitchen, bedroom and bathroom spaces.",
    "details": "Includes neoclassical building at Gorkha, modern residence at Itahari and selected interior renderings."
  }
];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const card=p=>'<article class="project-card real-card"><a href="./project.html?slug='+encodeURIComponent(p.slug)+'"><div class="project-media project-placeholder"><span>'+esc(p.type)+'</span><strong>'+esc(p.title)+'</strong></div><div class="project-info"><div><span class="project-type">'+esc(p.location)+'</span><h2 class="card-title">'+esc(p.title)+'</h2></div><span class="project-arrow" aria-hidden="true">↗</span></div></a></article>';
const list=document.querySelector('#project-list');
if(list){const render=category=>{const selected=projects.filter(p=>category==="all"||p.category===category);list.innerHTML=selected.map(card).join("")};render("all");document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});render(btn.dataset.filter)}))}
const detail=document.querySelector('#project-detail');
if(detail){const slug=new URLSearchParams(location.search).get('slug');const p=projects.find(x=>x.slug===slug);if(!p){detail.innerHTML='<h1 class="hybrid-title">Project not found.</h1><p><a href="./projects.html">Return to projects</a></p>'}else{document.title=p.title+' | Bikram Ray';detail.innerHTML='<p class="eyebrow detail-eyebrow">'+esc(p.type)+' · '+esc(p.location)+'</p><h1 class="hybrid-title">'+esc(p.title)+'</h1><p class="hybrid-intro">'+esc(p.concept)+'</p><div class="project-media project-placeholder detail-art"><span>ARCHITECTURAL PORTFOLIO / '+esc(p.pages)+'</span><strong>'+esc(p.title)+'</strong></div><section class="detail-copy"><h2>Design concept</h2><p>'+esc(p.summary)+'</p><h2>Drawings & presentation</h2><p>'+esc(p.details)+'</p><p class="asset-notice">Original architectural images and drawings are in the supplied portfolio PDF. Image assets are pending repository upload.</p></section><a class="text-link" href="./projects.html">← Explore more projects</a>'}}
