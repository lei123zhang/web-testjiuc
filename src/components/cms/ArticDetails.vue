<template>
    <div class="newsBox">
      <router-link class="back" to="/industryInfor/articIndex">< 返回资讯列表</router-link>
      <div class="detail">
        <div class="source">
            <span>时间：2018-05-25 09:30 </span>|
            <span>来源：全部资讯</span>|
            <span>浏览：226</span>
        </div>
        <h3>区块链自律联盟成立 监管革了谁的命？</h3>
        <p>台湾立法院推动区块链连线暨产业自律联盟，由国民党、民进党、亲民党、时代力量等跨党派立委连署，于今（22）日成立，自律联盟期望透过立法院各委员的力量，推动相关法规的建立和产业健全。</p>
        <p>大会现场嘉宾将近200人，除了立委及政府官员以外，包括美国在台协会、瑞士商务办事处、马来西亚友谊及贸易中心等单位，以及超过100位以上的业内从业者参与，并在会议上共同朗读了自律宣言。</p>
        <div class="next-prev">
            <p>上一篇：中国银保监会国有重点金融机构监事会..</p>
            <p>下一篇：工信部最新发布区块链报告显示：区块链...</p>
        </div>
      </div>
    </div>
</template>
<style scoped>
    .newsBox{
        margin-left:220px;
        padding:0px 18px;
        background: #1b222e;
        margin-bottom:106px;
    }
    .back{
        display: block;
        padding:20px 0px;
        border-bottom:1px solid #263142;
        
    }
    .source{
        color:#828a99;
        font-size:12px;
        margin-top:10px;
    }
    .source span{
        margin:0 10px;
    }
    .detail{
        color:#ccd6eb;
        padding-bottom:30px;
    }
    .detail h3{
        font-size:22px;
        text-align: center;
        margin:30px 0px 25px;
    }
    .detail>p{
        font-size:14px;
       line-height: 2em;
       text-indent: 2em;
      
    }
    .next-prev{
        overflow: hidden;
         margin-top: 40px;
    }
    .next-prev p{
        color: #616876;
        cursor: pointer;
        width: 300px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .next-prev p:first-child{
        float: left;
    }
    .next-prev p:last-child{
        float: right;
    }
</style>