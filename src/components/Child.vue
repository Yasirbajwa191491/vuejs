<template>
  <div class="root">
    <p>{{ name }} {{ body }}</p>
    <p>{{ n }}</p>
    <p>{{ currentDate() }}</p>
    <button @click="open = true">Open Modal</button>
    <input v-model.lazy="search" placeholder="Search for..." />

    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
      </div>
    </Teleport>
    <button @click="Redirect">Redirect to Home</button>
    <button @click="Replace">Replace to Home</button>
    <div v-bind:id="root"></div>
    <form>
      <!-- <input type="text" name="name" v-model="name" placeholder="Name" @input="v.$touch()" />
     <div v-if="!v.required">Email is required</div> -->
     <textarea
        name="body"
        v-model="body"
        placeholder="Enter text here..."
        cols="30"
        rows="10"
      ></textarea>
      <button @click="submitHandler()">Submit</button>
    </form>
    <HelloWorld id="Not props" ><p>Slots is here</p></HelloWorld>
        </div>
</template>
<script>
import moment from "moment";
import HelloWorld from "./HelloWorld.vue";
export default {
  name: "Child",
  components:{
 HelloWorld
  },
  data() {
    return {
      name: "",
      body: "",
      open:false,
       search: ''
    }
  },
  filters: {
    upperCase: function(val){
      return val.toUpperCase();
    }
  },
   watch: {
            search: function (value) {
                console.log(value)
            }
   }
  ,methods: {
    Redirect(){
      console.log(window.location.hash);
      this.$router.push('/');
    },
    currentDate(){
    return moment().format("Do MMM YY");
    },
    Replace(){
      this.$router.replace('/');
    },
    submitHandler(){
     alert("submitted")
    }
  },
}
</script>
<style scoped>
.root {
  display: flex;
  flex-direction: column;
  margin: 40px;
}
input {
  background-color: white;
  border-bottom: 1px solid black;
  height: 20px;
  width: 200px;
  border-radius: 10px;
}
textarea {
  background-color: white;
  border-bottom: 1px solid black;
  height: 80px;
  width: 200px;
  border-radius: 10px;
}
button {
  width: 100px;
  background-color: cadetblue;
}
</style>










<!-- 





// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import "./assets/styles/app.scss";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: "{attribute} is required!",
    isJoe: "{attribute} must be Joe",
    notGmail: "{attribute} must not be gmail",
    email: "{attribute} is not a valid Email address.",
    isEmailAvailable:
      "{attribute} is not available. Must be at least 10 characters long."
  }
});

Vue.component("form-group", templates.singleErrorExtractor.foundation6);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
}); -->
