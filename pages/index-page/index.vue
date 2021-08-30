<template>
    <div class="main"> 
        <img :src=img>
        <p>{{$store.getters.demo.example}}</p>
        <Hello></Hello>
        <Service></Service>
    </div>

</template>

<script>
    import Hello from '~component/hello/index'
    import Service from '~component/service/index'
    import img from "~static/yiban.png"
    export default {
        components: {
            Hello,
            Service
        },
        data: function () {
            return{
                img,
            }
        },
        created(){
            //使用vuex示例
            this.$store.dispatch('demo/toExample', "示例new")
        }
    }
</script>
<style lang="scss" scoped>
@import 'public/css/style.scss';
.main{
    font-size: $yb-fond-size;
}
</style>