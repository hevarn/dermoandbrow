<template>
  <nav id="nav-main" class="skew">
    <ul>
      <a href="#profile" @click="closeMenu">
        <li class="link">À propos</li>
      </a>
      <a>
        <li class="link">Mes Engagements</li>
      </a>
      <a>
        <li class="link">Beauté des sourcils</li>
      </a>
      <a>
        <li class="link">Link longer</li>
      </a>
    </ul>
  </nav>
  <button @click="closeMenu" class="menu-button" style="mix-blend-mode: exclusion">
    +
  </button>
  <div class="content"></div>
  |
</template>

<script>
import gsap from 'gsap'

export default {
  name: "menuComponent",
  data: () => {
    return {
      toggle: false
    }
  },
  mounted() {
    this.menu()
  },
  methods: {
    closeMenu() {
      gsap.set('.link', {y: 30});
      const menuAnimation = this.menu()
      const menuAnimationBack = this.menuBack()

      this.toggle = !this.toggle;
      this.toggle === false ? menuAnimation.play(0) : menuAnimationBack.play(0);

    },
    menuBack() {
      const menuAnimationBack = gsap.timeline({paused: true, reversed: true});
      const navMain = document.getElementById("nav-main");

      return menuAnimationBack
          .to('.link', {duration: .5, autoAlpha: 0, y: 30, stagger: .2, ease: "power4.out"})
          .to(navMain, {
            duration: 0.55,
            width: 0,
            clipPath: "polygon(0 0, -100% 0, 100% 100%, 0 100%)",
            ease: "power4.in",
            x: 0,
            y: 0,
            z: 0
          });
    },
    menu() {
      const menuAnimation = gsap.timeline({paused: true});
      const navMain = document.getElementById("nav-main");
      return menuAnimation
          .to(navMain, {
            duration: .8,
            width: '100%',
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power2.inOut",
            x: 0,
            y: 0,
            z: 0
          })
          .to('.link', {duration: .5, autoAlpha: 1, y: 0, stagger: .2, ease: "power4.out"});
    }
  }
}
</script>
