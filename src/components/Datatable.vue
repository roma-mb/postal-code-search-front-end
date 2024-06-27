<script setup>
import { computed } from "vue";

const props = defineProps({
  codeList: {
    type: Object,
    required: true,
  },
  searchedPostalCode: {
    type: Object,
    required: false,
  },
});

const filteredItems = computed(() => {
  return props.searchedPostalCode.length > 0
    ? props.searchedPostalCode
    : props.codeList;
});
</script>

<template>
  <div class="w-full relative overflow-x-auto shadow-md rounded">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-100"
    >
      <thead
        class="text-xs text-gray-800 uppercase bg-gray-50 dark:bg-courier-b dark:text-gray-300"
      >
        <tr>
          <th scope="col" class="px-6 py-3">Postal Code</th>
          <th scope="col" class="px-6 py-3">State</th>
          <th scope="col" class="px-6 py-3">DDD</th>
          <th scope="col" class="px-6 py-3">Street</th>
          <th scope="col" class="px-6 py-3">Neighbourhood</th>
          <th scope="col" class="px-6 py-3">Locale</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          v-for="(postalCode, key) of filteredItems"
          :key="key"
        >
          <td
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ postalCode.cep }}
          </td>
          <td class="px-6 py-4">
            {{ postalCode.uf }}
          </td>
          <td class="px-6 py-4">
            {{ postalCode.ddd }}
          </td>
          <td class="px-6 py-4">
            {{ postalCode.logradouro }}
          </td>
          <td class="px-6 py-4">
            {{ postalCode.bairro }}
          </td>
          <td class="px-6 py-4">
            {{ postalCode.localidade }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
