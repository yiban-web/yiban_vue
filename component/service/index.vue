<template>
    <div>
        <p>POST请求：{{post}}</p>
        <p>Get请求：{{get}}</p>
    </div>
    
</template>

<script>
    import regeneratorRuntime from "regenerator-runtime"
    import {getData,postData} from "~request/api.js"
    export default{
        data:function(){
            return{
                post:"",
                get:""
            }
        },
        created(){
            this.postReq()
            this.getReq()

        },
        methods:{
            async postReq(){
                let params = {
                    id:1
                }
                
                let data =  await postData(params)
                console.log(data)
                this.post = data.data
            },
            async getReq(){
                let params = {
                    id:1
                }
                let data =  await getData(params)
                this.get = data.data
            }
        }

    }
</script>