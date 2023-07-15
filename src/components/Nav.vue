<template>
    <div>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"
                    >Home</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/products"
                    >Product</router-link
                >
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/profile"
                    >Profile</router-link
                >
            </li>
            <li class="nav-item" v-if="email">
                <p class="nav-link" @click="logout">Logout</p>
            </li>
            <li class="nav-item" v-else>
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            email: true,
        };
    },
    methods: {
        logout() {
            localStorage.clear();
            this.email = false;
        },
    },
};
</script>

<style>
</style>