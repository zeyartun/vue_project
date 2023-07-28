<template>
    <div>
        <Nav
            class="p-5"
            :loggen="loggen"
            @loginSuccessEmit="loginSuccess"
        ></Nav>
        <router-view
            :loggen="loggen"
            @loginSuccessEmit="loginSuccess"
        ></router-view>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
    name: "App",
    data() {
        return {
            loggen: false,
        };
    },
    emits: ["loginSuccessEmit"],
    methods: {
        loginSuccess() {
            this.loggen = !this.loggen;
            console.log("emit");
        },
    },
    components: {
        Nav,
    },
};
</script>

