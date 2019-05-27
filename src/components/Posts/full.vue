<template>
     <div class="row justify-content-md-center">
          <div class=" col-md-6">
               <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                         <h1 class="display-4">{{post.title}}</h1>
                         <p class="lead">{{post.body}}</p>
                         <div>
                         <span class="text-like">6 Likes</span> 
                         <a href="javascript:void(0)"  class="like-btn" v-on:click="likePost">❤</a>
                         <a href="javascript:void(0)"  class="like-btn" v-on:click="unlikePost">👎</a>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import axios from 'axios';
export default {
     name: 'full_post',
     data () {
          return {
               post:{}
          }
     },
     created(){
          this.getPost(this.$route.params.id);
     },
     mounted(){
          
     },
     methods:{
          getPost(post_id){
               axios({
        			method: "get",
        			url: this.API.GET_POST+post_id,
        			headers: this.HEADER(),
      		})
        		.then(res => {
                    if(res.data.status==200){
                         this.post = res.data.result
				}else{
					console.warn("ERROR")					
				}
        		})
        		.catch(err => {
          		console.log(err);
        		});
          },
          likePost(){
               axios({
        			method: "post",
                    url: this.API.LIKE_POST+this.post.id,
                    headers: this.HEADER(),
      		})
        		.then(res => {
                    if(res.data.status==200){
                         console.log(res.data);
				}else{
					console.warn("ERROR")					
				}
        		})
        		.catch(err => {
          		console.log(err);
        		});
          },
          unlikePost(){
               axios({
        			method: "post",
                    url: this.API.UNLIKE_POST+this.post.id,
                    headers: this.HEADER(),
      		})
        		.then(res => {
                    if(res.data.status==200){
                         console.log(res.data);
				}else{
					console.warn("ERROR")					
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
.like-btn{
     text-decoration: none;
}
.like-btn:hover{
     text-decoration: none;
}
</style>