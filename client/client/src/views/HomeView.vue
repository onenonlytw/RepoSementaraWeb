<template>
  <body class="bg-gradient-to-b from-primary-200 to-primary-100/50">
    <div class="container">
      <NavBar />
      <section id="home" class="grid place-items-center -mt-16 px-10">
        <div class="flex items-end justify-between">
          <div class="text-5xl font-bold text-white w-1/2 pb-10">
          <div class="flex items-center">
            <h2>WELCOME TO</h2>      
          </div>
            <h2>MY TODO LIST</h2>
            <p class="pt-5 text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.
            </p> 
          </div>
          <div class="w-[40%]">
            <img src="../assets/home.png" alt="">
          </div>
        </div>
        <div class="grid place-items-center gap-2 text-white font-medium pt-20">
          <svg class="w-5 md:w-6" viewBox="0 0 26 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="24" height="47" rx="12" stroke="white" stroke-width="2"/>
              <circle cx="13" cy="11" r="5" fill="#FF693A"/>
            </svg>
            Scroll
        </div>
      </section>
      <AboutUs />
      <ContactInfo />
      <FooterView />
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import AboutUs from '@/components/AboutUs.vue';
import FooterView from '@/components/FooterView.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ContactInfo,
    AboutUs,
    FooterView
  },
}
</script>
