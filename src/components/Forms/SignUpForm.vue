<template>
    <form class="mb-0" @submit.prevent="submitSignup">
        <a href="#" class="btn btn--facebook btn--block"
            ><i class="fa fa-facebook-square"></i>Register
            with Facebook</a
        >
        <div class="or-text">
            <span>or</span>
        </div>
        <div class="form-group">
            <input
            type="text"
            class="form-control"
            name="full-name"
            id="full-name"
            placeholder="Full Name"
            required
            v-model="signUp.fullName"
            />
           
        </div>
        <!-- .form-group end -->
        <div class="form-group">
            <input
            type="email"
            class="form-control"
            name="register-email"
            id="register-email"
            placeholder="Email Address"
            required
            v-model="signUp.email"
            />
        </div>
        <!-- .form-group end -->
        <div class="form-group">
            <input
            type="password"
            class="form-control"
            name="register-password"
            id="register-password"
            placeholder="Password"
            required
            v-model="signUp.password"
            />
        </div>
        <!-- .form-group end -->
        <div class="input-checkbox">
            <label class="label-checkbox">
            <span
                >I agree with all
                <a href="#">Terms & Conditions</a></span
            >
            <input type="checkbox" v-model="agree" />
            <span class="check-indicator"></span>
            </label>
             <p v-if="!agree && isSubmitted" class="text-danger">please agree</p>
        </div>
        <input
            type="submit"
            class="btn btn--primary btn--block"
            value="Register"
        />
    </form>
</template>

<script>
import UserServices from '../../services/UserServices'

export default {
    data(){
        return {
            signUp : {
                fullName : "",
                email : "",
                password : "",
            },
            agree : false,
            error: {
                fullName : "",
                email : "",
                password : "",
                agree : ""
            },
            isSubmitted : false
        }
    },
    methods: {
        async submitSignup(){
            this.isSubmitted = true
            if(this.agree){
                this.$store.commit('setSignUpForm',this.signUp)
                const res = await UserServices.sendOtp({email : this.signUp.email})
                this.$store.commit('setOtp',res.data.otp)
                this.$emit('closeModal')
            }
        }
    }
}
</script>

<style>

</style>