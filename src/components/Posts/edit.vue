<template>
     <div class="row justify-content-md-center">
          <div class="col-md-4">
               <input type="text" v-model="post.title" class="form-control" placeholder="Post Title" required>
               <textarea required cols="30" rows="3" v-model="post.body" class="form-control" placeholder="Post Body"></textarea>
               <button class="btn btn-success form-control" v-on:click="editPost()" >Edit Post</button>
          </div>
     </div>
</template>

<script>
import axios from 'axios';
export default {
     name: 'post_edit',
     data () {
          return {
               post:{}
          }
     },
     created(){
          this.getPost(this.$route.params.id);
     },
     mounted(){
          //this.getPost(this.$route.params.id);
          console.log(this.post)
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
          editPost(){
               axios({
        			method: "post",
        			url: this.API.EDIT_POST+this.post.id,
        			headers: this.HEADER(),
        			data: {
          			title: this.post.title,
          			body: this.post.body
        			}
      		})
        		.then(res => {
                    if(res.data.status==200){
                         this.$router.push({ name: 'Home' })
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

</style>