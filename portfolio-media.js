/* Portfolio page index for approved, user-supplied 2026 PDF.
   Upload page-01.jpg ... page-25.jpg into assets/portfolio-pages/ to activate images. */
const portfolioMedia = {
 "studio-apartment":[3,4],
 "bike-showroom":[5,6,7,8],
 "miklajung-residence":[9,10,11],
 "secondary-school":[12,13,14,15],
 "commercial-complex":[16,17],
 "working-drawings":[18,19,20],
 "landscape-park":[21,22,23],
 "additional-designs":[24,25]
};
const pageSrc=n=>"./assets/portfolio-pages/page-"+String(n).padStart(2,"0")+".jpg";
function enhancePortfolio(){
 const detail=document.querySelector("#project-detail");
 if(!detail)return;
 const slug=new URLSearchParams(location.search).get("slug");
 const pages=portfolioMedia[slug];
 if(!pages||!detail.querySelector(".detail-copy"))return;
 const section=document.createElement("section");section.className="portfolio-media-gallery";
 section.innerHTML='<div class="gallery-header"><div><p class="eyebrow">ORIGINAL PORTFOLIO</p><h2>Design presentation</h2></div><span>'+pages.length+' portfolio sheets</span></div><div class="sheet-grid"></div><p class="gallery-fallback" hidden>Original portfolio images are being prepared for web display.</p>';
 detail.querySelector(".detail-copy").before(section);
 const grid=section.querySelector(".sheet-grid");
 let missing=0;
 pages.forEach((n,i)=>{
  const figure=document.createElement("figure");figure.className="sheet";
  const a=document.createElement("a");a.href=pageSrc(n);a.target="_blank";a.rel="noopener";a.setAttribute("aria-label","Open portfolio sheet "+n);
  const img=document.createElement("img");img.src=pageSrc(n);img.alt="Bikram Ray architecture portfolio sheet "+n;img.loading=i===0?"eager":"lazy";img.decoding="async";
  img.onerror=()=>{figure.remove();missing++;if(missing===pages.length){section.querySelector(".gallery-fallback").hidden=false}};
  a.append(img);figure.append(a);const cap=document.createElement("figcaption");cap.textContent="Portfolio page "+n;figure.append(cap);grid.append(figure);
 });
 const pdf=document.createElement("a");pdf.className="text-link portfolio-pdf-link";pdf.href="./assets/portfolio-bikram-2026.pdf";pdf.target="_blank";pdf.rel="noopener";pdf.textContent="View complete 25-page portfolio PDF ↗";
 pdf.hidden=true;
 fetch(pdf.href,{method:"HEAD"}).then(r=>{if(r.ok)pdf.hidden=false}).catch(()=>{});
 section.append(pdf);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",enhancePortfolio);else enhancePortfolio();
