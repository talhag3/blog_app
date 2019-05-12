<template>
     
</template>

<script>
import axios from "axios";
export default {
     created() {
          this.logout();
     },
     methods:{
          logout(){
      		axios({
        			method: "get",
        			url: this.API.LOGOUT,
        			headers: {
                         Accept: "application/json",
                         Authorization : "Barear "+ (localStorage.api_token || null)
        			},
      		})
        		.then(res => {
				if(res.data.status==200){
					this.destroyToken();
                         this.$router.push({ name: 'Login' })
				}else{					
				}
        		})
        		.catch(err => {
          		console.log(err);
        		});
          }
     }
}
</script>

<style scoped>

</style>
