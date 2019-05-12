<template>
	<div>
		<h1>Register</h1>
		<form v-on:submit.prevent="register">
			<input type="text" name="name" id="name" v-model="name" placeholder="Your Name">
			<input type="email" name="email" id="email" v-model="email" placeholder="Email">
			<input type="password" name="password" id="password" v-model="password" placeholder="Password">
			<input type="submit" value="Register">
		</form>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: 'Register',
	data () {
		return {
			email:'',
			password:'',
			name:''
		}
	},
	methods:{
		register(){ 
			axios({
        			method: "post",
        			url: this.API.REGISTER,
        			headers: {
          			Accept: "application/json"
        			},
        			data: {
          			password: this.password,
					email: this.email,
					name:this.name
        			}
      		})
        		.then(res => {
				console.log(res.data)
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
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
