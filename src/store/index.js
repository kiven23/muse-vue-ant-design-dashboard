import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    //myModule
  },
  state: {
    // your state
  },
  getters: {
    // your getters
  },
  mutations: {
    // your mutations
  },
  actions: {
    // your actions
    Profile(context, data) {
      return axios
        .post("http://0.tcp.ngrok.io:14001/api/profile", {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        })
        .then((response) => {
          return response;
          //console.log(data);
          //this.$router.push("/");
        })
        .catch((error) => {
          this.$router.push("/login");
          //console.error(error);
        });
    },
  },
});
