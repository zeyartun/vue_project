<template>
    <div>
        <div class="row justify-content-center">
            <div class="p-3 col-md-8">
                <div class="card">
                    <img
                        v-bind:src="`${product.image}`"
                        class="card-img p-3 w-25"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <p class="card-text">
                            {{ product.description }}
                        </p>
                        <router-link to="/products" class="btn btn-primary"
                            >Back Products</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ProductDetail",
    data() {
        return {
            product: {},
        };
    },
    created() {
        axios
            .get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
            .then((res) => {
                this.product = res.data;
            });
    },
};
</script>

<style>
</style>