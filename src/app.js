import { splitToSpan, displayMenu, displayCard } from './effect/effect';
import Particles from 'particlesjs'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const titleHero = document.querySelector('.title_hero')
splitToSpan(titleHero, 'rotates', 100);

const spanToggle = document.querySelector('#span-toggle')
spanToggle.addEventListener('click', () => displayMenu() )

const linkMenu = document.querySelectorAll('header a')
linkMenu.forEach(e => {
  e.addEventListener('click', () => { 
    const isMenuActive = document.querySelector('#menu-toggle').classList.contains('active')
    if (isMenuActive) displayMenu()
  }) 
})

const portfolioCard = document.querySelectorAll('#portfolio>*')
const target = document.querySelectorAll("#presentation>*")

portfolioCard.forEach( el => {
  displayCard.observe(el)
} )

target.forEach( el => {
  displayCard.observe(el)
})


window.onload = function() {
// https://www.npmjs.com/package/particlesjs 
  Particles.init({
    selector: '.background',
    maxParticles:50,
    connectParticles:true,
    color:'#159191',
    speed:1,
  });
};

//    Animation of me

gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

tl.from('#me_picture',{
  opacity:0,
  duration:.9,
  y:'240px',
  delay:.4,
})
tl.from('#me_mask',{
  opacity:0,
  duration:.9,
  x:'200px',
  delay:.5,
  ease:"elastic.out( 1, 0.3)"
})


tl.from(
  '#me_skill',
  {
    opacity:0,
    duration:.5,
    ease:'none',
  }
)

tl.fromTo(
  '#me_skill',
  {rotationY:0},
  {rotationY:360, duration:3, repeat:-1,ease:'none'}
)



tl.fromTo(
  '#text_hero',
  {y:'0',x:'0'},
  {
    y:'-1400px',
    scrollTrigger:{
      trigger: '#acceuil',
      scrub:0,
    },
    ease:'none'
  },)

tl.fromTo(
  '#me',
  {y:'0',x:'0'},
  {
    x:'-1600px',
    scrollTrigger:{
      trigger: '#acceuil',
      scrub:0,
    },
    ease:'none'
  },)

ScrollTrigger.create({
  trigger:'#accueil',
  start:'top',
  end:'+=650',
  pin:true,
})

