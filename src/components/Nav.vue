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
            <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/logout">Logout</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style>
</style>