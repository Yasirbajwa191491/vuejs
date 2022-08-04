<template>
  <div class="post">
    <h2 v-change="{color:'skyblue'}">Update Data:</h2>
    <input type="text" v-model="inputs.name"  placeholder="Enter name" />
    <textarea
      type="text"
      cols="30"
      v-model="inputs.body"
      rows="10"
      placeholder="Enter text here...."
    ></textarea>
    <button @click="submitHandler(path)">Update</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  props: {
    msg: String,
  },
  data() {
    return {
      path: "",
      inputs: {
        name: "",
        body: "",
      },
    };
  },
    created() {
    this.path = this.$route.params.id;
  },
  async mounted() {
    try {
      console.log(this.$route.params.id);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?id="+this.$route.params.id
      );
      console.log(res.data[0].name);
       this.inputs.name=res.data[0].name
       this.inputs.body=res.data[0].body
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    submitHandler(id) {
            console.log(id);
   axios.patch("https://jsonplaceholder.typicode.com/comments/"+id,{
    name:this.inputs.name,
    body:this.inputs.body
   }).then(function(res){
    console.log(res);
    if(res.status==200){
   alert("Data updated");
   
   }
   })
   
   this.inputs.name="",
   this.inputs.body=""
  },
  }
};
</script>
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 300px;
  width: 400px;
  gap: 6px;
}
button {
  height: 30px;
  width: 60px;
  margin: auto;
  background-color: grey;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
button:hover {
  background-color: chocolate;
  transition: 0.3s;
  width: 65px;
  height: 35px;
}
</style>
