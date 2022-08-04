<template>
  <h1>Cards</h1>
  <!-- <Child v-on:changeTitle="updateTitle($event)" /> -->
  <div class="grid grid-4-col">
  <div v-for="cards in CardData" :key="cards.id">
<div class="card">
      <h3 v-size="">{{ cards.name }}</h3>
      <p v-change="{color:'red'}">{{ cards.body }}</p>
      <button    on @click="removeHandler(cards.id)">Remove</button>
      <button    on @click="updateHandler(cards.id)">Update</button>
    </div>
  </div>
  </div>
</template>

<script>
// import Child from "../components/Child.vue"
import axios from "axios";
export default {
  name: "Card",
  components: {
    //  Child
  },
  data() {
    return {
      CardData: [],
      title: "",
    };
  },
  async mounted() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log(res.data);
      this.CardData=res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    removeHandler: function (id) {
      this.CardData = this.CardData.filter(function (curEle) {
        return curEle.id !== id;
      })
      
    },
    updateHandler(id){
    console.log(id);
    this.$router.push("/home/"+id);
      }
    //  updateTitle(title){
    // this.title=title
    //  }
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  width: 200px;
  background-color: skyblue;
  margin-top: 13px;
  margin-left: 20px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.grid{
display: grid;
}
.grid-4-col{
  grid-template-columns: repeat(3,1fr);
}
button {
  width: 60px;
  margin: auto;
  background-color: darkgoldenrod;
  border-radius: 5px;
  cursor: pointer;
}
</style>