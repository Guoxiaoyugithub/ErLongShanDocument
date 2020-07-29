<template>
    <div id="app">
        <div class="parameter-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'d-rep'
}
</script>

<style scoped>
    .parameter-content{
        width: 100%;
        /* height: 300px; */
        border-radius: 3px;
        padding: 24px;
        border: 1px solid #E6ECF1;
        background: #FFFFFF;
    }
    .parameter-content div{
        margin-bottom: 20px;
    }
    .parameter-content div:last-child{
        margin-bottom: 10px;
    }
</style>