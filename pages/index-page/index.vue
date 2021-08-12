<template>
    <div> 
        <img :src=img>
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
                img:img
            }
        }
    }
</script>