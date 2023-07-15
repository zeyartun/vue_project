
<template>
    <div>
        <div class="row justify-content-center">
            <div class="p-3 col-md-4">
                <div class="card">
                    <img
                        src="../assets/product/as.jpg"
                        class="rounded mx-auto p-3 img-thumbnail"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ user.username }} and {{ email }}
                        </h5>
                        <p class="card-text">
                            {{ user.phone }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Profile",
    data() {
        return {
            user: {},
            email: "",
            Password: "",
        };
    },
    created() {
        var email = localStorage.getItem("email");
        if (email == "john@gmail.com") {
            axios
                .get("https://fakestoreapi.com/users/1")
                .then((res) => (this.user = res.data));
            this.email = email;
        } else {
            this.$router.push("/login");
        }
    },
};
</script>

<style>
</style>