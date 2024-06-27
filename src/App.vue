<script setup lang="ts"></script>

<template>
  <header>
    <!--Nav-->
    <div class="w-full container mx-auto">
      <div class="w-full flex items-center justify-between">
        <a
          class="flex items-center text-courier-y no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="/"
        >
          PostalCode<span
            class="bg-clip-text text-transparent bg-gradient-to-r from-courier-y via-courier-b to-courier-b"
            >Search</span
          >
        </a>

        <div class="flex w-1/2 justify-end content-center">
          <router-link
            class="inline-block text-courier-w no-underline hover:text-courier-y hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
            :to="{ name: 'about' }"
          >
            About
          </router-link>
        </div>
      </div>
    </div>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
      <a class="text-gray-500 no-underline hover:no-underline" href="#"
        >&copy; PostalCodeSearch 2024</a
      >
    </div>
  </footer>
</template>
