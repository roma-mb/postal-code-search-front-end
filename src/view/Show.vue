<script setup>
import { computed, onMounted, ref } from "vue";
import Datatable from "../components/Datatable.vue";
import { usePostalCodes } from "../stores/postalCodes.js";
import Modal from "../components/Modal.vue";

const keyword = ref("");
const postalCodes = usePostalCodes();

onMounted(async () => {
  postalCodes.list();
});

function searchPostalCode() {
  postalCodes.find(keyword.value);
}
</script>

<template>
  <!--Main-->
  <div class="container w-full flex flex-wrap justify-center px-4 mx-auto">
    <div
      class="flex flex-col w-full justify-center lg:items-start overflow-y-hidden"
    >
      <h3
        class="my-4 text-1xl md:text-2xl text-white opacity-75 font-bold leading-tight text-center md:text-left"
      >
        Postal<span
          class="bg-clip-text text-transparent bg-gradient-to-r from-courier-yf via-courier-y to-courier-b"
          >code</span
        >
      </h3>
      <form
        class="bg-gray-800 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
        onsubmit="return false"
      >
        <div class="mb-4">
          <label
            class="block text-courier-y py-2 font-bold mb-2"
            for="emailaddress"
          >
            Digit below your postalcode.
          </label>
          <input
            class="mb-2 shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition duration-300 ease-in-out"
            type="text"
            @keyup.enter="searchPostalCode"
            v-model="keyword"
            placeholder="00000-000"
          />
        </div>

        <div class="flex items-center pt-4">
          <button
            class="mr-2 bg-gradient-to-r from-courier-yf to-courier-y hover:from-courier-yf hover:to-courier-yf dark:text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
            type="button"
            @click="searchPostalCode"
          >
            Search
          </button>
        </div>
      </form>
      <Datatable
        :codeList="postalCodes.codeList"
        :searchedPostalCode="postalCodes.searchedPostalCode"
      />
      <Modal
        :isOpen="postalCodes.modal.isOpen"
        :message="postalCodes.modal.message"
        @modal-close="postalCodes.modal.close"
      />
    </div>
  </div>
</template>
