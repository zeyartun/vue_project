<template>
    <div class="row p-3">
        <div
            class="p-3 col-md-2"
            v-for="product in products"
            v-bind:key="product.id"
        >
            <div class="card">
                <img
                    v-bind:src="product.image"
                    class="card-img-top p-3 img-fluid"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">
                        {{ product.description.substring(0, 50) }}
                    </p>
                    <router-link
                        :to="`/products/${product.id}`"
                        class="btn btn-primary"
                        >Go somewhere</router-link
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from "vue-router";
export default {
    name: "Product",
    data() {
        return {
            products: [],
        };
    },
    methods: {},
    created() {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            this.products = res.data;
        });
    },
};
</script>

<style>
</style>