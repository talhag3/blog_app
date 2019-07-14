<template>
	<div class="row">
        <div class="col-md-2 threads">
            <div class="thread col-md-12" v-for="thread in threads" :key="thread.id" v-on:click="select_thread(thread)">
                {{thread.recipients[0].name}}
            </div>
        </div>
        <div class="col-md-10">
            <div v-if="selected_thread"> 
                <div class="messages">
                    <div class="message" v-for="message in select_thread_messages" :key="message.id">
                        <p class="other">{{message.content}}</p>    
                    </div>
                </div>
                <div class="create_msg">
                    <textarea  cols="30" rows="8" placeholder="Write Message" v-model="msg"></textarea>
                    <button class="btn btn-primary" v-on:click="sendMessage">Send</button>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Messanger",
    data(){
        return {
            threads:[],
            selected_thread:'',
            select_thread_messages:'',
            msg:''
        }
    },
    mounted(){
        this.getTheads();
    },
    methods:{
        getTheads(){
            //threads
            let vm = this;
            axios({
                method: "get",
                url: this.API.GET_THREADS,
                headers: this.HEADER()
      		})
            .then(res => {
            if(res.data.status==200){
                console.log(res.data);
                vm.threads = res.data.threads; 
            }else{
                console.warn("ERROR")					
            }
            })
            .catch(err => {
                console.log(err);
            });
        },
        getMsgs(){
            let vm = this;
            axios({
                method: "get",
                url: this.API.GET_THREAD_MESSAGES,
                params:{
                    thread_id:vm.selected_thread.id,
                },
                headers: this.HEADER()
      		})
            .then(res => {
            if(res.data.status==200){
                console.log(res.data);
                vm.select_thread_messages = res.data.messages;
            }else{
                console.warn("ERROR")					
            }
            })
            .catch(err => {
                console.log(err);
            });
        },
        sendMessage(){
            if(this.msg ==''){
                return fasle;
            }
            let vm = this;
            axios({
                method: "post",
                url: this.API.SEND_MESSAGE,
                data:{
                    thread_id:vm.selected_thread.id,
                    content:vm.msg
                },
                headers: this.HEADER()
      		})
            .then(res => {
            if(res.data.status==200){
                vm.msg='';
                console.log(res.data);
                vm.select_thread_messages.push(res.data.message);
            }else{
                console.warn("ERROR")					
            }
            })
            .catch(err => {
                console.log(err);
            });
        },
        select_thread(thread){
            this.selected_thread = thread;
            this.getMsgs();
        }
    }
}
</script>

<style scoped>
    .threads{
        border: dotted #17a2b8 3px;
        height: 100%;
        min-height: 700px;
    }
    .thread{
        padding: 5px;
        border: solid red 2px;
        background-color: aquamarine;
    }
    .messages{
        border: 3px solid #e8dfdf;
        min-height: 500px;
        max-height: 500px;
        padding: 10px;
        background-color: #f1f1f1;
    }
    .messages .message{
        background: #ccc;
        padding: 10px;
        border: 1px #ccc solid;
        border-radius: 10px;
    }
    .messages .other{
        background-color:#fff;
    }
    .messages .rigth{
        float: right;
    }
    .create_msg{
        min-height: 200px;
        max-height: 200px;
        padding: 2px;
        background: #e8e8e8;
    }
    .create_msg textarea{
        border: 1px solid gray;
        background: #f6fcfd;
        display: inline-block;
    }
    .create_msg button{
            display: inline-block;
    margin-top: -35px;
    }
</style>

