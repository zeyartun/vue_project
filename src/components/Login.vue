<template>
    <div>
        <div class="row justify-content-center">
            <div class="p-3 col-md-4">
                <form v-on:submit.prevent="login">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"
                            >Email address</label
                        >
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            v-model="email"
                        />
                        <div id="emailHelp" class="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"
                            >Password</label
                        >
                        <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            v-model="password"
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                            v-model="check"
                        />
                        <label class="form-check-label" for="exampleCheck1"
                            >Check me out
                        </label>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-primary"
                        :disabled="!check"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            email: "john@gmail.com",
            password: "m38rmF$",
            check: false,
            users: [],
        };
    },
    methods: {
        login() {
            if (this.email == "john@gmail.com" && this.password == "m38rmF$") {
                this.$router.push("/profile");
                localStorage.setItem("email", this.email);
                this.$emit("loginSuccessEmit");
            } else {
                this.$router.push("/login");
            }
        },
    },
    computed() {
        axios
            .get("https://fakestoreapi.com/users")
            .then((res) => (this.users = res));
    },
};
</script>

<style>
</style>