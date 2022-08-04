<template>
  <div class="post"><h2>Add Data:</h2>
  <input type="text" v-model="inputs.name" placeholder="Enter name" />
  <textarea type="text" cols="30" v-model="inputs.body" rows="10" placeholder="Enter text here...."></textarea>
  <button @click="submitHandler">Submit</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
name: "PostData",
 data(){
   return{
    inputs:{
        name:"",
        body:""
    }
   }
  },

 methods:{
    submitHandler(){
      console.log(this.inputs.name);
   axios.post("https://jsonplaceholder.typicode.com/comments",{
    name:this.inputs.name,
    body:this.inputs.body
   }).then(function(res){
    console.log(res);
    if(res.status==201){
   alert("Data inserted");
   
   }
   })
   
   this.inputs.name="",
   this.inputs.body=""
    }
 }
};
</script>
<style scoped>
.post{
    display: flex;
    flex-direction: column;
    margin: auto;
    height: 300px;
    width: 400px;
    gap: 6px;
}
button{
    height: 30px;
    width: 60px;
    margin: auto;
    background-color: grey;
    color: white;
    border-radius: 10px;
    cursor: pointer;
}
button:hover{
    background-color: chocolate;
    transition: 0.3s;
    width: 65px;
    height: 35px;
}
</style>