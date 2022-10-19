<template>
  <h2>{{ 2 + 3 + 5 }}</h2>
  <h2>Method Example1-{{ add(2, 3, 5) }}</h2>
  <h2>Method Example2-{{ multiply(baseValue) }}</h2>
  <h2>{{ name }}</h2>
  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="name = 'Test2'">Change Name</button>
    <button v-on:click="increment(1)">Increment</button>
    <button @click="decrement(1)">Decrement</button>
  </div>
</template>
<script>
export default {
  name: "MethodEvent",
  data() {
    return {
      name: "Test1",
      baseMultiplier: 5,
      baseValue: 2,
      count: 0,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
  },
};
</script>