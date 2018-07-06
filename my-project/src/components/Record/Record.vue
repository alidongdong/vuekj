<template>
    <ul id="Record">
        <li>
            <img src="../../Image/jiuwei.jpg" class="touxiang">
            <div class="duanluo">
                <span>待守约</span>
                <img src="../../Image/jiantou.jpg" class="jiantou">
            </div>
        </li>
         <li>
            <img src="../../Image/shuiguai.jpg" class="touxiang">
            <div class="duanluo">
                <span>守约记录</span>
                <img src="../../Image/jiantou.jpg" class="jiantou">
            </div>
        </li>
        <li>
            <img src="../../Image/lvmaochong.jpg" class="touxiang">
            <div class="duanluo">
                <span>负面记录</span>
                <img src="../../Image/jiantou.jpg" class="jiantou">
                <span style="float:right;">待处理 <span style="color:red;">{{num}}</span>条</span>
            </div>
        </li>
        <li>
            <img src="../../Image/pangding.jpg" class="touxiang">
            <div>
                <span>授权管理</span>
                <img src="../../Image/jiantou.jpg" class="jiantou">
            </div>
        </li>
    </ul>
</template>
<script>
export default {
  name: 'Record',
  data() {
    return {
      num: '0',
    };
  },
};
</script>
<style>
    @import "../../css/ZhiMaXinYong.css";
</style>
