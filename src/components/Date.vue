<template>
    <input type="date" v-model="date" required /><br><br>
    <button @click="submitHandler">Submit</button><br>

    <p>Year is: {{Year}}</p>
    <p>Month is: {{month}}</p>
    <p>Day is: {{day}}</p>
</template>

<script>
export default {
    name:"Date",
    data(){
        return{
            date:"",
            Year:"",
            month:"",
            day:""
        }
    },
    methods:{
        submitHandler(){
            console.log(this.date.split("-"))
            const arr=this.date.split("-");
            this.Year=arr[0];
            this.month=arr[1];
            this.day=arr[2];
        }
    }
}
</script>