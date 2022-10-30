<template>
    <div class="authentication-form">
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }" class="mt-4">
            <div class="form-group from-field">
                <label>First Name</label>
                <Field type="text" class="form-control item" :class="{ 'is-invalid': errors.firstName }" id="firstName" placeholder="First Name" name="firstName" @keypress="validate('firstName')"></Field>
                <div class="invalid-feedback">{{errors.firstName}}</div>
            </div>
            <div class="form-group from-field">
                <label>Last Name</label>
                <Field type="text" class="form-control item" :class="{ 'is-invalid': errors.lastName }" id="lastName" placeholder="Last Name" name="lastName"></Field>
                <div class="invalid-feedback">{{errors.lastName}}</div>
            </div>
            <div class="form-group from-field">
                <label>Email</label>
                <Field type="text" class="form-control item" :class="{ 'is-invalid': errors.email }" id="email" placeholder="Email" name="email" ></Field>
                <div class="invalid-feedback">{{errors.email}}</div>
            </div>
            <div class="form-group from-field">
                <label>Contact No. (Optional)</label>
                <Field type="text" class="form-control item" :class="{ 'is-invalid': errors.conatactNo }" id="conatactNo" placeholder="Contact No." name="conatactNo"></Field>
                <div class="invalid-feedback">{{errors.conatactNo}}</div>
            </div>
            <!-- <div class="form-group from-field">
                <label>Date of birth</label>
                <Field type="date" class="form-control item" :class="{ 'is-invalid': errors.dob }" id="dob" name="dob"></Field>
                <div class="invalid-feedback">{{errors.dob}}</div>
            </div> -->
            <div class="form-group from-field">
                <label>Password</label>
                <Field type="password" class="form-control item" :class="{ 'is-invalid': errors.password }" id="password" placeholder="Password" name="password" ></Field>
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
            <div class="form-group from-field">
                <label>Confirm Password</label>
                <Field type="password" class="form-control item" :class="{ 'is-invalid': errors.confirmPassword }" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword"></Field>
                <div class="invalid-feedback">{{errors.confirmPassword}}</div>
            </div>
            <div class="form-group text-center d-block">
                <div>
                    <button type="submit" class="btn btn-block authentication-button">Create Account</button>
                </div>
            <div>
                <span class="authentication-link">Already have an account?<router-link to="/login"> Login</router-link></span>
            </div>
            </div>
        </form>
    </div>
</template>
<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import axios from 'axios';
export default {
    name:"Registration",
    components: {
        Form,
        Field,
    },
    data() {
        const schema = Yup.object().shape({
            firstName: Yup.string()
                .required('First Name is required'),
            lastName: Yup.string()
                .required('Last name is required'),
            // dob: Yup.string()
            //     .required('Date of Birth is required')
            //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
            email: Yup.string()
                .required('Email is required')
                .email('Please enter a valid email address'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            conatactNo: Yup.string()
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Please enter valid contact no.')
        });
        return { 
            schema 
        }
    },
    methods:{
        disabledAfterToday(date) {
            const today = new Date();
      today.setHours(0, 0, 0, 0);

      return date > new Date(today.getTime() + 1);
        },
        async onSubmit(values){
            let result = await axios.post("http://localhost:3000/user",{
                first_name : values.firstName,
                last_name : values.lastName,
                email: values.email,
                contact_no: values.conatactNo,
                dob: values.dob,
                password: values.password
            })
            if(result.status == 201){
                localStorage.setItem('user',JSON.stringify(result.data));
                this.$router.push({name:'Dashboard'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user');
        if(user){
        this.$router.push({name:'Dashboard'});
        }
    }
}
</script>
