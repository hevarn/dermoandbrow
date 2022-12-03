<template>
  <nav id="nav-main" class="skew">
    <ul>
      <li class="link">Link</li>
      <li class="link">Link</li>
      <li class="link">Link</li>
      <li class="link">Link longer</li>
    </ul>
  </nav>
  <button id="menu-button" class="menu-button" style="mix-blend-mode: exclusion">+</button>
  <div class="content"></div>|
</template>

<script>
import gsap from 'gsap'
export default {
  name: "menuComponent",
  mounted() {
    this.menu()
  },
  methods: {
    menu (){
      const menuAnimation = gsap.timeline({paused: true});
      const menuAnimationBack = gsap.timeline({paused: true, reversed: true});
      const navMain = document.getElementById("nav-main");
      const menuButton = document.getElementById("menu-button");
      let toggle = true;

      gsap.set('.link',{y:30});

      menuAnimation
          .to(navMain, {duration:.8, width: '100%', clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", ease: "power2.inOut", x:0, y:0, z:0})
          .to('.link',{duration:.5,autoAlpha:1,y:0,stagger:.2,ease: "power4.out"});


      menuAnimationBack
          .to('.link',{duration:.5,autoAlpha:0,y:30,stagger:.2,ease: "power4.out"})
          .to(navMain, {duration:0.55,width: 0, clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)", ease: "power4.in", x:0, y:0, z:0});


      menuButton.onclick = function() {
        toggle = !toggle;
        toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);
      };

    }
  }
}
</script>
