<template>
 <div class="subpages">
   <div class="aboutus-sub bg-grey">
     
    <div class="subabout-modal">
        <div class="who">
            
            <h2>介绍一下，我们是...</h2>
            <p>
             久财btc隶属于台湾纳博信息科技有限公司，是全球领先的数字资产交易平台之一，平台面向全球提供比特币、以太坊、莱特币、以太坊经典等多种数字资产交易服务，是安全可信赖的数字资产交易网。

            </p>
        </div>
    </div>
   </div>
   <div class="aboutus-sub bg-white">
     <h1 class="about_text_2">{{$t("aboutus.businessRage")}}</h1>
     <p> {{$t("aboutus.businessDesc")}}</p>
    
  </div>
   <div class="aboutus-sub bg-value">
     <h1 class="about_text_3">{{$t("aboutus.coreValues")}}</h1>
    <ul class="businssItem">
       <li>{{$t("aboutus.integrityRigour")}}</li>
       <li>{{$t("aboutus.openInnovation")}}</li>
       <li>{{$t("aboutus.cooperationEnterprise")}}</li>
    </ul>
   </div>
  <div class="aboutus-sub bg-white">
     <h1 class="about_text_4">{{$t("aboutus.ourAdvantages")}}</h1>
    <div class="mask">
        <p><span>“</span>
        多年数字资产风控管理经验，独立专业的数字资产研究评
        估体系，深耕数字资产服务产业提供权威中立的资产分析，
        专业分布式架构和防DDOS攻击系统。
        <br />
        <span>——世界顶尖级安全风控系统</span>
        </p>
          <p><span>“</span>全球多个国家和地区设立本地交易服务中心，全球本土化
        数字资产配置及交易服务，遍布全球的项目拓展及运营管
        理体系。<br />
        <span>——全球本土化专业运营团队</span>
        </p>
          <p><span>“</span>7*24小时客户服务数字资产平台，全球领先的独立数字资
          产评估体系。<br />
        <span>——全球化的数字资产配置及交易服务</span>
        </p>
        <p><span>“</span>依托大量数据的精准研究，坚持客观、独立、严谨和专业
          的原则，拥有100多名专业研究人员，凭借强大的国际平
          台，我们的研究团队亦擅长海外及跨境研究。<br />
        <span>——专业的区块链资产研评估体系</span>
        </p>
    </div>
    <h1 class="about_text_5">客户端下载</h1>
    <div class="sub_text_5">欢迎使用手机客戶端   专注掌上交易体验</div>
    <div class="downapp">
      <img src="../../assets/images/index_down_pic.png"/>
      <div class="downItem">
        <router-link to="">
          <img src="../../assets/images/moblie_icon_ios.png"/>
          iPhone 下载  
        </router-link>
        <router-link to="">
           <img src="../../assets/images/moblie_icon_and.png"/>
          Android 下载
        </router-link>
      </div>
    </div>
  <div class="aboutus-sub">
    <div class="bottom-bg">
      <p>版权所有 Copyright ©2018 納博信息科技有限公司</p>
      <p><Icon type="ios-telephone"></Icon>+886928816555</p>
      <p><Icon type="ios-email"></Icon>nabokj@foxmail.com</p>
      <p><Icon type="ios-location"></Icon>台湾省彰化市華山路203號5樓之3</p>
    </div>
  </div>
  </div>

 </div>
</template>

<style scoped>
 
  .aboutus-sub{
    color: #fff;
    text-align: center;
  }
  .aboutus-sub.bg-grey{
    color:#fff;
    background:#263142;
  }
  .aboutus-sub.bg-white{
    color:black;
     background:#f8f8f8;
  }
  .bg-value{
    background:url(../../assets/images/mobile_value_bg.jpg) no-repeat center bottom;
    background-size:cover;
  }
   .aboutus-sub>h1{
     font-size:18px;
     font-weight:bold;
     padding-top:35px;
    margin-bottom: 20px;
     letter-spacing: 1px;
     color:#263142;
   }
  .about_text_2{
      background:url(../../assets/images/moblie_text_1.png) no-repeat center bottom;
   }
   .about_text_3{
      background:url(../../assets/images/moblie_text_2.png) no-repeat center bottom;
      color:#fff !important;
      
   }
   .about_text_4{
      background:url(../../assets/images/moblie_text_3.png) no-repeat center bottom;
   }
   .about_text_5{
      background:url(../../assets/images/moblie_text_4.png) no-repeat center bottom;
   }
   .aboutus-sub>p{
     font-size:14px;
     
     padding: 0 15px;
   }
   .about_text_2 ~ p{
    padding:0px 15px 35px;
    width: 100%;
    height: 100%;
    background:url(../../assets/images/mobile_map.png) no-repeat center bottom;
    background-size:cover;
    box-sizing: border-box;
  }
   .subabout-modal{
     padding:48px 15px;
     width:100%;
     background:url(../../assets/images/about_pic_we.jpg) no-repeat left center;
     background-size:cover;
   }
   .who{
     color:#fff;
     position: relative;
     z-index:10;
     letter-spacing: 1px;
     font-size: 14px;
   }
   .who>h2{
     margin:0px 0px 24px;
     text-align: center;
     font-size:18px;
   }
   .businssItem{
     overflow: hidden;
    padding-bottom: 30px;
   }
   .businssItem li{
     width:18.33%;
     /* max-width:75px; */
     margin-right:11.25%;
     padding:0px 0%;
     height:87px;
     text-align:center;
     font-size:14px;
     color:#263142;
     font-weight: bold;
     float: left;
     background:url(../../assets/images/mobile_value_shape.png) no-repeat center center;
     background-size:cover;
     letter-spacing: 0px;
     display: flex;
    align-items: center;
    justify-content: space-around;
   }
   .businssItem li:first-child{
     margin-left: 11.25%;
   }
   .advantagesItem {
     overflow: hidden;
   }
   .mask{
     margin-bottom: 30px;
   }
  .mask p{
    color: #8c8c8c;
    font-size:14px;
    text-align: left;
    padding: 0 15px;
    overflow: hidden;
    margin-bottom:20px;
    line-height: 2em;
    letter-spacing: 1px;
  }
  .mask p>span:first-child{
    font-size: 80px;
    float: left;
    margin-top: -30px;
    color: #dedede;
  }
  .mask p>span:last-child{
    font-size:16px;
    color: #333333;
  }
  .sub_text_5{
    font-size:14px;
    text-align: center;
    color: #b8b8b8;
  }
  .downapp{
    overflow: hidden;
    margin: 20px auto 0;
    padding: 0 10%;
  }
  .downapp>img{
    width:56%;
    float: left;
  }
  .downItem{
    margin-top: 12%;
    float: right;
    /* width: 35%; */
  }
  .downItem a{
    display: block;
    overflow: hidden;
    padding: 7px 10px;
    line-height: 26px;
    border-radius: 3px;
    border: 1px solid #040404;
  }
  .downItem a img{
    float: left;
    margin-right: 6px;
  }
   .downItem a:first-child{
     background:#040404;
     color:#fff;
     margin-bottom:14px;
   }
   .downItem a:last-child{
     color: #040404;
   }
   .bottom-bg{
     padding: 25px 15px;
     background:url(../../assets/images/mobile_logo.jpg) no-repeat left center;
     background-size:cover;
   }
   .bottom-bg p{
     font-size:16px;
     color: #9398a1;
     text-align: left;
   }
   .bottom-bg p .ivu-icon{
     margin-right: 5px;
   }
</style>

