<template>
  <div>
    <h1>Inputs Validations</h1>
    <label for="username">Username:</label><br />
    <input
      type="text"
      id="username"
      v-model="input.text1"
      placeholder="Enter username.."
    />
    <p v-change="{color:'red'}" v-if="!input.text1">Please fill username field</p>
    <br /><br />
    <label for="name">Cnic:</label><br />
    <input
      id="name"
      v-maska="['#####-#######', '#####-#######-#']"
      v-model="input.text2"
      placeholder="i.e 31110-0111111-0"
    />
                 <p v-change="{color:'red'}" v-if="!input.text2">Please fill Cnic field</p>
    <br /><br />
    <label for="email">Email:</label><br />
    <input
      type="email"
      id="email"
      v-model="input.text3"
      placeholder="Enter email.."
    />
                 <p v-change="{color:'red'}" v-if="!input.text3">Please fill email field</p>
    <br /><br />
    <label for="tel">Phone Number:</label><br />
    <input     id="tel"
      v-model="input.text4"
      v-maska="['92###-#######', '####-#######']"
      placeholder="i.e 0300-1234567"
    />
                 <p v-change="{color:'red'}" v-if="!input.text4">Please fill Phone number field</p>
    <br /><br />
    <button @click="inputHandler">Submit</button>
  </div>
</template>
<script>
import validator from 'validator';
export default {
  name: "Validations",
  data() {
    return {
      input: {
        text1: "",
        text2: "",
        text3: "",
        text4: "",
      }
    };
  },
  
  methods:{
    inputHandler(){
      const validate=validator.isEmail(this.input.text3);
      if(!validate){
        alert("Email is not valid")
      }
    },
  }
};
</script>