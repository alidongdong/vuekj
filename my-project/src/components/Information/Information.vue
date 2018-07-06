<template>
    <ul id="Information">
            <li>
                <img src="../../Image/aboguai.jpg" class="touxiang">
                <div class="duanluo">
                    <span>个人信息</span>
                    <img src="../../Image/jiantou.jpg" class="jiantou">
                    <div style="float:right;" >
                        <img src="../../Image/xing.jpg" style="float:left;margin:6px 10px 0 0;">
                        <span class="dcolor">X {{star}}</span>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../Image/burenshi.jpg" class="touxiang">
                <div>
                    <span>芝麻通行证</span>
                    <img src="../../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
        </ul>
</template>
<script>
export default {
  name: 'Information',
  data() {
    return {
      star: '1',
    };
  },
};
</script>
<style >
    @import "../../css/ZhiMaXinYong.css";
</style>
