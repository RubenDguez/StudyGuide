<template>
  <v-container>
    <h1 class="text-h1 primary--text">OOP Pillars</h1>
    <h4 class="text-h4 ">Object Oriented Programming Pillars</h4>
    <ul class="body-1">
      <li class="font-italic">
        <router-link
          style="text-decoration: none;"
          to="/oop/oop-pillars/inheritance"
          >Inheritance</router-link
        >
      </li>
      <li class="font-italic">
        <router-link style="text-decoration: none;" to=""
          >Polymorphism</router-link
        >
      </li>

      <li class="font-italic">
        <router-link style="text-decoration: none;" to=""
          >Encapsulation</router-link
        >
      </li>

      <li class="font-italic">
        <router-link style="text-decoration: none;" to=""
          >Abstraction</router-link
        >
      </li>
    </ul>
    <p class="body-12">We will look at all the four pillars in more detail.</p>
  </v-container>
</template>

<script>
export default {
  name: "ooppillars",
};
</script>
