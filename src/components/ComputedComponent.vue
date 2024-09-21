<template>
  <P>{{ fullname }} </P>

  <label>Firstname</label>
  <input type="text" v-model="firstname" @input="getFirstnameInput" />

  <label>Lastname</label>
  <input type="text" v-model="lastname" @input="getLastnameInput" />

  <p>Num: {{ num }}</p>
  <button @click="increment">+</button>

  <button @click="showHehe">Show</button>

  <button @click="hidehehe">Hide</button>
  <p v-if="show">Hehe</p>

  <p>{{ $store.state.counter }}</p>

  <button @click="incrementState">+</button>

</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      num: 0,
      show:false

    };
  },
  // METHOD TO GET THE VALUES FROM THE INPUT USING EVENTS
  methods: {
    getFirstnameInput: function () {
      this.firstname = event.target.value;
      // console.log(this.firstname)
    },
    getLastnameInput: function () {
      this.lastname = event.target.value;
    },
    increment: function () {
      this.num++;
    },
   showHehe: function(){
    this.show = true
   },
   hidehehe:function(){
    this.show = false
   },
   incrementState:function(){
    // this.$store.state.counter++
    this.$store.commit('increment')
   }
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script> 
