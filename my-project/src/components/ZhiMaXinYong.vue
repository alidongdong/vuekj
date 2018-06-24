<template>
    <div>
        <ul>
            <li>
                <img src="../Image/aboguai.jpg" class="touxiang">
                <div class="duanluo">
                    <span>个人信息</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                    <div style="float:right;" > <img src="../Image/xing.jpg" style="float:left;margin:6px 10px 0 0;"> <span class="dcolor">X {{star}}</span>       </div>
                </div>
            </li>
            <li>
                <img src="../Image/burenshi.jpg" class="touxiang">
                <div>
                    <span>芝麻通行证</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <img src="../Image/jiuwei.jpg" class="touxiang">
                <div class="duanluo">
                    <span>待守约</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
            <li>
                <img src="../Image/shuiguai.jpg" class="touxiang">
                <div class="duanluo">
                    <span>守约记录</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
            <li>
                <img src="../Image/lvmaochong.jpg" class="touxiang">
                <div class="duanluo">
                    <span>负面记录</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                    <span style="float:right;">待处理 <span style="color:red;">{{num}}</span>条</span>
                </div>
            </li>
            <li>
                <img src="../Image/pangding.jpg" class="touxiang">
                <div>
                    <span>授权管理</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <img src="../Image/pangqiu.jpg" class="touxiang">
                <div class="duanluo">
                    <span>城市信用报告</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
            <li>
                <img src="../Image/xiaohuolong.jpg" class="touxiang">
                <div>
                    <span>信用互查</span>    
                    <img src="../Image/jiantou.jpg" class="jiantou">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'ZhiMaXinYong',
        data(){
            return {
                num:'0',
                star:'1',
            }
        }
    }
</script>

<style scoped>
    
    img{
        width:18px;
        height: 18px;
    }
    ul{
        list-style: none;
        background-color: #ffffff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        width:100%;
        padding-left: 10px;
    }
    li{
        text-align: left;
        height:35px;
        line-height: 35px;
    }
    .touxiang {
        /* margin-right:20px; */
        margin-top: 7px;
        float: left;
    }
    .jiantou{
        float: right;
        margin: 10px 20px 0 10px;
        width:12px;
        height:12px;
    }
    li div{
        margin-left: 10%;
        text-align: left;
    }
    .duanluo{
        border-bottom:1px solid #ccc;
        
        /* width: 85%; */
    }
    .dcolor{
        color: darkgrey!important;
    }
</style>
