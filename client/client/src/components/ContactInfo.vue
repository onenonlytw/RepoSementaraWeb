<template>
    <section id="contact" class="flex flex-col items-center py-31 pb-32 mt-12">
        <h2 class="my-10 text-5xl font-bold text-white">Contact Info</h2>
        <div class="grid grid-cols-3 place-items-center">
          <div v-for="contact of categories" :key="contact.title" class="text-white grid place-items-center gap-5 text-center">
            <div class="p-10">
              <img :src="contact.image" class="w-full" alt="">
            </div>
            <h3 class="text-3xl font-bold">{{contact.title}}</h3>
            <p class="w-3/4">{{contact.desc}}</p>
            <p class="w-3/4">{{contact.desc1}}</p>
          </div>
        </div>
    </section>
</template>


<script setup>
import email from '../assets/email.png'
import telp from '../assets/telephone.png'
import loc from '../assets/location.png'

const categories = [
  {
    title: 'Email',
    image: email,
    desc: 'pertiwihn20d@student.unhas.ac.id',
    desc1: 'namds20d@student.unhas.ac.id'
  },
  {
    title: 'Location',
    image: loc,
    desc: 'Jln. Poros Malino KM. 6 Bontomarannu Gowa, 92171, Sulawesi Selatan'
  },
  {
    title: 'Telephone',
    image: telp,
    desc: '0821-9404-3944',
    desc1: '0813-4362-2921'
  }
]
</script>