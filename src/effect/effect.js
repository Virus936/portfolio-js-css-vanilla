export async function splitToSpan(id, spanClass,step) {
  const contentToSpan = [...id.textContent];

  id.textContent = null;
  contentToSpan.forEach((e,i) => {
    setTimeout(()=>{
      const span = document.createElement('span');
      span.classList.add(spanClass);
      span.style.display = 'inline-block'
      span.textContent = e;
      id.append(span);
    },i*step)
  });
}

export function displayMenu() {

  const toggle = document.querySelector('#menu-toggle')
  toggle.classList.toggle('active')
  const nav = document.querySelector('.header_nav')
  nav.classList.toggle('menu-active')
};

export const displayCard = new IntersectionObserver((elements, observer)=>{
  elements.forEach(el => {
    el.target.style.transition = '0.8s'
    if (el.isIntersecting) {
      el.target.style.transform = 'scale(1)'
      el.target.style.opacity = 1
    }else{
      el.target.style.transform = 'scale(0)'
      el.target.style.opacity = 1
    }
  })
},{threshold:0.4})
