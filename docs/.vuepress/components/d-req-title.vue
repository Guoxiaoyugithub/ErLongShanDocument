<template>
    <div id='app' :title="title" :http_methods="http_methods">
        <div class="title">
            <request-method :http_methods="http_methods" class="http_methods"></request-method>
            <span class="title_content">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','http_methods']
    }
</script>

<style scoped>
    
    .title{
        height: 32px;
    }

    .http_methods {
        line-height: 32px;
        float: left;
    }

    .title_content{
        display: block;
        font-size: 20px;
        font-family: Content-font, Roboto, sans-serif;
        font-weight: 700;
        float: left;
        line-height: 32px;
        margin-left: 8px;
    }

</style>