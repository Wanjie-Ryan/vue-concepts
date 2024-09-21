<template>
  <h2>Hey {{ name }}</h2>
  <a :href="link">Google Bro!!</a>
  <input type="text" placeholder="jj" v-model="text" />
  <h6>{{ greeting() }}</h6>

  <p>{{ num }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>

  <p>Your name is:: {{ fullname }}</p>
  <input type="text" v-model.trim="fullname" @input="getInput" />

  <!-- Check to see if the user has pressed eneter on his or her keyboard, if eneter has been clicked run the function getinput -->
  <input type="text" @keyup.enter="getInput" />

  <input type="text" v-model="filmName" />

  <p v-for="data in info" :key="data">{{ data }}</p>

  <GreetingComponent firstName="JJ" lastName="jok" />
  <GreetingComponent firstName="ka" />
  <GreetingComponent firstName="il" />
  <GreetingComponent firstName="ro" />
  <GreetingComponent firstName="po" />
  <!-- the nickname is been passed as a prop but it has been bound to the data property nickname -->
  <GreetingComponent firstName="er" :nickname="nickname" />
  <CallsComponent/>
  <ComputedComponent />
</template>

<script>
import CallsComponent from './components/CallsComponent.vue';
import GreetingComponent from "./components/GreetingComponent.vue";
import ComputedComponent from "./components/ComputedComponent.vue";
export default {
  data() {
    return {
      name: "Max",
      link: "https://www.google.com",
      text: "hey jumba",
      num: 0,
      fullname: "",
      filmName: "raha",
      info: {
        name: "Max",
        age: 20,
        pastor: "dh umbuiz",
        music: "jazz",
      },
      nickname: "jumba",
    };
  },
  methods: {
    greeting() {
      return "Hello There " + this.text;
    },
    increment: function () {
      this.num++;
    },
    decrement: function () {
      if (this.num <= 0) return;
      this.num--;
    },
    getInput: function () {
      this.fullname = event.target.value;
    },
  },

  // adding a watcher to check the count value, if it reaches 5 then execute a certain logic, name of the watcher must be the same as the data property you want to watch
  watch: {
    num(newValue, oldValue) {
      if (newValue > oldValue && newValue === 5) {
        alert("Stop!!");
      }
    },

    filmName(newValue) {
      console.log("The new value is::", newValue);
    },
  },
  components: {
    GreetingComponent,
    CallsComponent,
    ComputedComponent
  },
};
</script>
