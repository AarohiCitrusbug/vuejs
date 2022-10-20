<template>
  <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
  <h2>Computed fullname - {{ fullName }}</h2>
  <button @click="changeFullName">Change Fullname</button>
  <button @click="items.push({ id: 4, title: 'keyboard', Price: 100 })">
    Add item
  </button>
  <h2>Total - {{ total }}</h2>
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.Price > 1000">{{ item.title }}{{ item.Price }}</h2>
  </template>
  <h2 v-for="item in expenSiveItems" :key="item.id">
    {{ item.title }}{{ item.Price }}
  </h2>
</template>
<script>
export default {
  name: "ComputedpropertiesSettersWatchers",
  data() {
    return {
      firstName: "Aarohi",
      lastName: "Shah",
      items: [
        { id: 1, title: "TV", Price: 1000 },
        { id: 2, title: "Phone", Price: 800 },
        { id: 3, title: "Laptop", Price: 2000 },
      ],
    };
  },
  methods: {
    changeFullName() {
      this.fullName = "Shah Aarohi";
    },
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split("");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    total() {
      return this.items.reduce(
        (total, curr) => (total = total + curr.Price),
        0
      );
    },
    expenSiveItems() {
      return this.items.filter((item) => item.Price > 1000);
    },
  },
};
</script>
