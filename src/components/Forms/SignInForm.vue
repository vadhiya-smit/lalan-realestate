<template>
    <form class="mb-0" @submit.prevent="submitLogin">
        <a href="#" class="btn btn--facebook btn--block"
        ><i class="fa fa-facebook-square"></i>Login with
        Facebook</a
        >
        <div class="or-text">
        <span>or</span>
        </div>
        <div class="form-group">
        <input
            type="email"
            class="form-control"
            name="login-email"
            id="login-email"
            required
            placeholder="Email Address"
            v-model="signIn.email"
        />
        </div>
        <!-- .form-group end -->
        <div class="form-group">
        <input
            type="password"
            class="form-control"
            name="login-password"
            id="login-password"
            placeholder="Password"
            required
            v-model="signIn.password"
        />
        </div>
        <!-- .form-group end -->
        <div class="input-checkbox">
        <label class="label-checkbox">
            <span>Remember Me</span>
            <input type="checkbox" v-model="signIn.remember" />
            <span class="check-indicator"></span>
        </label>
        </div>
        <input
        type="submit"
        class="btn btn--primary btn--block"
        value="Sign In"
        />
        <a href="#" class="forget-password"
        >Forget your password?</a
        >
    </form>
</template>

<script>
export default {
    data(){
        return {
            signIn : {
                email : "",
                password : "",
                remember : ""
            }
        }
    },
    methods: {
        submitLogin(){
            console.log(this.signIn);
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>