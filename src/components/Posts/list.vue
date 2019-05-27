<template>
     <div class="row justify-content-md-center">
          <div class=" col-md-6">
               <post_list_card v-for="post in posts" :key="post.id" :post="post"></post_list_card>
               <a href="javascript:void(0)" v-if="pagination.next_page_url" class="btn btn-sm btn-default" v-on:click="getPosts(pagination.next_page_url)">Load</a>
          </div>
     </div>

</template>

<script>
import axios from 'axios';
import post_list_card from './list-card';
export default {
     name: 'post_list',
     components :{
          post_list_card
     },
     data () {
          return {
               posts:[],
               pagination:{}
          }
     },
     mounted(){
          this.$root.$on('post-created', this.pushPost);
          this.$root.$on('post-deleted', this.postDelete);
          this.getPosts();
     },
     methods:{
          getPosts(next_url=""){
               let vm = this;
               const url = next_url || this.API.GET_POSTS;
               axios({
        			method: "get",
        			url: url,
        			headers: this.HEADER()
      		})
        		.then(res => {
				if(res.data.status==200){
                         vm.posts = vm.posts.concat(res.data.result.posts)
                         vm.pagination = res.data.result.pagination
				}else{
					console.warn("ERROR")					
				}
        		})
        		.catch(err => {
          		console.log(err);
        		});
          },
          pushPost(post){
               this.posts.unshift(post);
          },
          postDelete(post_id){
               axios({
        			method: "get",
        			url: this.API.DELETE_POST+post_id,
        			headers: this.HEADER()
      		})
        		.then(res => {
				if(res.data.status==200){
                         this.posts= this.posts.filter( p => p.id !==post_id);
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