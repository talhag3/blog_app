<template>
  <div>
    <create_post></create_post>
    <hr>
    <post_list ></post_list>
  </div>
</template>

<script>
import create_post from './Posts/create';
import post_list from './Posts/list';
export default {
  name: 'Home',
  components:{
    create_post,post_list
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
