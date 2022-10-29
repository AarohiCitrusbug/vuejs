<template>
    <div class="authentication-form">
        <form class="mt-4" @submit="checkForm">
            <div class="form-group from-field">
                <input type="email" class="form-control item" id="email" placeholder="Email" v-model="email" @input="checkEmail($event)">
                <span class="error-message">{{emailErrorMsg}}</span>
            </div>
            <div class="form-group from-field">
                <input type="password" class="form-control item" id="password" placeholder="Password" v-model="password">
                <span class="error-message">{{passwordErrorMsg}}</span>
            </div>
            <div class="form-group text-center d-block">
                <div>
                <button type="submit" class="btn btn-block authentication-button">Login</button>
            </div>
            <div>
                <span class="authentication-link">Don't have an account?<router-link to="/register"> Create One</router-link></span>
            </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:"Login",
    data() {
        return{
            emailErrorMsg:'',
            passwordErrorMsg:'',
            email: null,
            password: null 
        }             
    },
    methods:{
    checkForm: function (e) {
      if (this.email && this.password) {
        return true;
      }

      this.emailErrorMsg = '';
      this.passwordErrorMsg ='';

      if (!this.email) {
        this.emailErrorMsg = 'Please provide an email address';
      } else if (!this.validEmail(this.email)) {
        this.emailErrorMsg = 'Please enter a valid email address';
      }
      if (!this.password) {
        this.passwordErrorMsg = 'Please provide a password';
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkEmail(event){
      this.email=event.target.value;
      if(!this.validEmail(this.email)){
        this.emailErrorMsg = 'Please enter a valid email address';
      }else{
        this.emailErrorMsg = '';
      }
    } 
  }
}
</script>
