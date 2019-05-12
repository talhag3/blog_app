<template>
     <div class="row justify-content-md-center">
          <div class="col-md-4">
               <input type="text" v-model="title" class="form-control" placeholder="Post Title" required>
               <textarea required cols="30" rows="3" v-model="body" class="form-control" placeholder="Post Body"></textarea>
               <button class="btn btn-success form-control" v-on:click="savePost()" >Create Post</button>
          </div>
     </div>
</template>

<script>
import axios from 'axios';
export default {
     name: 'create_post',
     data () {
          return {
               title:"",
               body:""
          }
     },
     methods:{
          savePost(){
               axios({
        			method: "post",
        			url: this.API.SAVE_POST,
        			headers: this.HEADER(),
        			data: {
          			title: this.title,
          			body: this.body
        			}
      		})
        		.then(res => {
                    if(res.data.status==200){
                         this.title=this.body="";
                         this.$root.$emit('post-created', res.data.result);
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