const sections=document.querySelectorAll('section');
const options={threshold:0.2};
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');}});
},options);
sections.forEach(section=>{section.classList.add('hidden');observer.observe(section);});
