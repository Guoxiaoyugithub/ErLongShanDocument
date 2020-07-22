<template>
    <div id='btn' @click="btnClick">
        <h-btn type='red' btnText='测试按钮1'/>
        <h-btn type='blue' btnText='测试按钮2'/>
        <h-btn type='yellow' btnText='测试按钮3'/>
        <h-btn type='green' btnText='测试按钮4'/>
    </div>
</template>

<script>
    export default {
        methods: {
            btnClick(e) {
                console.log(e.target.innerText)
            }
        }
    }
</script>