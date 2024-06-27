import { defineStore } from "pinia";
import http from "../clients/http.js";
import { useAuth } from "../stores/auth.js";
import useModal from "./modal.js";

export const usePostalCodes = defineStore("postalCodes", {
  state: () => ({
    auth: useAuth(),
    codeList: [],
    searchedPostalCode: [],
    modal: useModal(),
  }),
  actions: {
    async list() {
      await http
        .get("/list", {
          headers: {
            Authorization: "Bearer " + this.auth.token,
          },
        })
        .then(({ data }) => {
          this.codeList = data;
        })
        .catch(({ response }) => {
          this.modal.open(response?.data.message);
        });
    },
    async find(id) {
      await http
        .get("/list/" + id, {
          headers: {
            Authorization: "Bearer " + this.auth.token,
          },
        })
        .then(({ data }) => {
          this.searchedPostalCode = data;
        })
        .catch(({ response }) => {
          this.modal.open(response?.data.message);
        });
    },
  },
});

export default usePostalCodes;
