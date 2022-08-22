<script>
import Equipment from "./Equipment.vue";
// const data = [{ name: "Test", id: 1 }, { name: "Test2", id: 2 }, { name: "Test3", id: 3 }];

// var db = new Vue({
//     el: '#example-1',
//     data: {
//         items: [
//             { name: "Test", id: 1 }, { name: "Test2", id: 2 }, { name: "Test3", id: 3 }] 
//     }
// })

export default {
  data: () => ({
    city: [], //["Barselona", "Milano", "Roma"],
    category: "",
    name: "",
    range: "10000",
    products: [],
  }),
  mounted() {
    this.products = [
      {
        name: "Keyboard",
        price: 44,
        category: "Accessories",
        city: "Milano",
      },
      {
        name: "Mouse",
        price: 553,
        category: "Laptop",
        city: "Milano",
      },
      {
        name: "Keyboard",
        price: 3,
        category: "Accessories",
        city: "Milano",
      },
      {
        name: "Mouse",
        price: 1,
        category: "Laptop",
        city: "Milano",
      },
      {
        name: "Keyboard",
        price: 4,
        category: "Accessories",
        city: "Milano",
      },
      {
        name: "Mouse",
        price: 444,
        category: "Stationary",
        city: "Roma",
      },
    ];
  },

  computed: {
    filterProducts: function () {
      return this.filterProductsByName(
        this.filterProductsByRange(
          this.filterProductsByCity(
            this.filterProductsByCategory(this.products)
          )
        )
      );
    },
  },

  methods: {
    filterProductsByCategory: function (products) {
      return this.category
        ? products.filter((product) => !product.category.indexOf(this.category))
        : products;
    },

    filterProductsByName: function (products) {
      return this.name
        ? products.filter(
            (product) =>
              !product.name.toLowerCase().indexOf(this.name.toLowerCase())
          )
        : products;
    },

    filterProductsByCity: function (products) {
      return this.city && this.city.length
        ? products.filter((product) => this.city.indexOf(product.city) !== -1)
        : products;
    },

    filterProductsByCity2: function (products) {
      return this.city && this.city.length
        ? products.filter((product) => !product.city.indexOf(this.city))
        : products;
    },

    filterProductsByRange: function (products) {
      return this.range
        ? products.filter((product) =>
            product.price >= 0 && product.price <= this.range ? product : ""
          )
        : products;
    },

    sorting: function () {
      this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    },
    sorting2: function () {
      this.products.sort((a, b) => (a.price < b.price ? 1 : -1));
    },

    uniqueCheck(e) {
      this.city = [];
      if (e.target.checked) {
        this.city.push(e.target.value);
      }
    },

    resetOptions: function () {
      this.category = "";
      this.city = "";
      this.name = "";
      this.range = "1000";
    },
  },
};

</script>

<template>
    <h1>Traktorer og redskaper her på Snopestad Gård</h1>
    <!-- <p>{{Tractor1.name}}</p> -->
    <section >
        <Equipment v-for="item in products" :key="item.price" name={{item.price}} />
    </section>


    <!-- <li v-for="item in items" :key="item.message">
        {{ item.message }}
    </li> -->

</template>

<style scoped>
</style>