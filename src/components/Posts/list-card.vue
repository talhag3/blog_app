<template>
     <div class="post-card">
          <div class="post-card-menu-block">
               <span v-on:click="post_card_menu=!post_card_menu">...</span>
               <div class="post-card-menu" v-if="post_card_menu">
                    <ul class="list-group"> 
                         <li class="list-group-item">
                              <router-link :to="{name: 'post.view' , params : {id:post.id}}" >View</router-link>
                         </li>
                         <li class="list-group-item">
                              <router-link :to="{name: 'post.edit' , params : {id:post.id}}" >Edit</router-link>
                         </li>
                         <li class="list-group-item">
                              <a href="javascript:void(0)" v-on:click="postDelete(post.id)">Delete</a>
                         </li>
                    </ul>
               </div>
          </div>
          <h2>{{post.title}}</h2>
          <p>{{post.body}}</p>
     </div>
</template>

<script>
import axios from 'axios';
export default {
     name: 'list-card',
     props:{
          post:Object
     },
     data () {
          return {
               post_card_menu:false
          }
     },
     mounted(){
          
     },
     methods:{
          postDelete(post_id){
               this.$root.$emit('post-deleted', post_id);
          }
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>