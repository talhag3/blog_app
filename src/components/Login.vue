<template>
	<div class="d-flex justify-content-center align-items-center container">
		<div class="row">
			<div class="col-md-6">
				<form id="login-form" v-on:submit.prevent="login()">
				<div class="form-group">
					<input name="email" v-model="email" required type="email" placeholder="Email">
				</div>
				<div class="form-group">
					<input name="password" v-model="password" required type="password" placeholder="Password">
				</div>
				<div class="form-group">
					<input type="submit" class="btn-sm btn-primary " value="Login">
				</div>
				</form>
				<router-link :to="{ name: 'Register', }" class="btn-sm btn-success">Register</router-link>
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
      		email: "",
      		password: ""
		};
	},
  	methods: {
    		login() {
      		axios({
        			method: "post",
        			url: this.API.LOGIN,
        			headers: {
          			Accept: "application/json"
        			},
        			data: {
          			password: this.password,
          			email: this.email
        			}
      		})
        		.then(res => {
				if(res.data.status==200){
					this.saveToken(res.data.api_token);
					this.$router.push({ name: "Home"})
				}else{
					alert("Shit Happend")					
				}
        		})
        		.catch(err => {
          		console.log(err);
        		});
    		},
  	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body { height: 100%; }

</style>
