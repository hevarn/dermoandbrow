<template>
  <body-component/>
</template>
<script>
import BodyComponent from "@/components/body/bodyComponent.vue";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Splitting from "splitting";
import Flickity from 'flickity'
export default {
  components: {
    BodyComponent,
  },
  mounted() {
    this.methode()
    this.carousel()
  },
  methods: {
    methode() {

      gsap.registerPlugin(ScrollTrigger);

      let cursor = document.getElementById("cursor");
      const cursorElements = cursor.children
      let body = document.body;
      let links = document.getElementsByTagName("a");
      const about = document.getElementById("description")

      about.addEventListener('mousemove', ()=> {
        cursor.classList.add("revert_color");
      })
      about.addEventListener("mouseout", ()=>{
        cursor.classList.remove("revert_color");
      })

      const values = document.getElementsByClassName("inside_value")
      for (let i = 0; i < values.length; i++) {
        values[i].addEventListener("mousemove", function (event) {
          cursorElements[0].classList.add("show_value");
        });
        values[i].addEventListener("mouseout", function (event) {
          cursorElements[0].classList.remove("show_value");
        });
      }

      let cards = document.getElementsByClassName("inner");
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("mousemove", function (event) {
          cursor.classList.add("active");
        });
        cards[i].addEventListener("mouseout", function (event) {
          cursor.classList.remove("active");
        });
      }

      let link;
      for (link of links) {
        link.addEventListener("mouseover", function (event) {
          cursor.classList.add("linkhover");
        });
        link.addEventListener("mousemove", function (event) {
          cursor.classList.add("linkhover");
        });
        link.addEventListener("mouseout", function (event) {
          cursor.classList.remove("linkhover");
        });
      }

      gsap.set("#cursor", {xPercent: -50, yPercent: -50});
      const pos = {x: window.innerWidth / 2, y: window.innerHeight / 2};
      const mouse = {x: pos.x, y: pos.y};
      const speed = 0.35;

      const xSet = gsap.quickSetter(cursor, "x", "px");
      const ySet = gsap.quickSetter(cursor, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });

      Splitting();

      gsap.utils.toArray(".panel").forEach((section, index) => {
        gsap.to(this, {
          scrollTrigger: {
            trigger: section,
            start: "top 100%",
            end: "bottom 25%",
            scrub: 0,
            onUpdate: (self) => {
              section.style.setProperty("--progress", self.progress);
            }
          }
        });
      });

      gsap.to("body", {
        scrollTrigger: {
          trigger: "body",
          start: "top 100%",
          end: "50% 50%",
          scrub: 0,
          onUpdate: (self) => {
            body.style.setProperty("--progress", String(self.progress));
          }
        }
      });

      document.addEventListener("DOMContentLoaded", function () {
        body.classList.add("loaded");
      });


      function refresh() {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 2500);
      }

      window.addEventListener("resize", refresh);
    },
    carousel() {
      let flkty = new Flickity( '.main-carousel', {
        autoPlay: 8000,
        pauseAutoPlayOnHover: false,
        adaptiveHeight: true
      });
    },
    // magnetic() {
    //   let links = document.getElementsByClassName('hover-me');
    //   let cursor = document.getElementById('cursor');
    //   console.log(links)
    //
    //
    //   const animateMe = function(e) {
    //     const span = this.querySelector('span');
    //     console.log(span)
    //     const { offsetX: x, offsetY: y } = e,
    //         { offsetWidth: width, offsetHeight: height } = this;
    //
    //     const move = 20;
    //     const xMove = x / width * (move * 2) - move;
    //     const yMove = y / height * (move * 2) - move;
    //
    //     span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    //
    //     if (e.type === 'mouseleave') span.style.transform = '';
    //   };
    //
    //   const editCursor = e => {
    //     const { clientX: x, clientY: y } = e;
    //     cursor.style.left = x + 'px';
    //     cursor.style.top = y + 'px';
    //   };
    //   let link;
    //   for (link of links) {
    //     console.log(link)
    //     link.addEventListener("mouseover", animateMe);
    //     link.addEventListener("mouseleave", animateMe);
    //   }
    //
    //   window.addEventListener('mousemove', editCursor);
    // }
  }
}
</script>
<style lang="scss">
#app {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

</style>