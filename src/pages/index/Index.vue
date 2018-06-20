<template>
    <div>
        <div id="fullpage">
            <div class="section" id="page1">
                <Carousel autoplay :arrow="showArrow" :autoplay-speed="speed" v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel bg_one">
                            <div class="demo-carousel-btn">
                                <h1>{{$t("sectionPage.bannerTitle")}}</h1>
                                <p>{{$t("sectionPage.bannerSubTitle")}}</p>
                                <!-- <a class="purchase" @click="purchaseHref"></a>
                                <router-link class="register" to="/register"></router-link> -->
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel bg_two">
                            
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="section" id="page2">
                <div class="carousel-notice">
                    <div class="platformMsg-box">

                        <router-link to="/notice"><img src="../../assets/images/index_icon_notice.png"/>{{$t("sectionPage.platformMsg")}}</router-link>
                        <router-link to="" class="ul-box">
                            <ul>
                                <li>
                                    <p>nihao</p>
                                    <span>2018-02-25</span>
                                </li>
                                <li>
                                    <p>shijie</p>
                                    <span>2018-02-27</span>
                                </li>
                                 <li>
                                    <p>520</p>
                                    <span>2018-02-20</span>
                                </li>
                                <li>
                                    <p>jiazhi</p>
                                    <span>2018-02-29</span>
                                </li>
                            </ul>
                        </router-link>
                    </div>
                   
                </div>
                <div class="ptjy">
                     <div class="coin_title">
                                <span>{{$t("sectionPage.transactionPair")}}</span>
                                <span>{{$t("sectionPage.latestPrice")}}</span>
                                <span>{{$t("sectionPage.proportion24h")}}</span>
                                <span>{{$t("sectionPage.highestPrice24h")}}</span>
                                <span>{{$t("sectionPage.minimumPrice24h")}}</span>
                                <span>{{$t("sectionPage.volume24h")}}</span>
                    </div>
                    <div style="height: 580px;overflow-y: auto;">
                    <div class="usdt">
                        <div class="usdt_icon">
                            <img src="../../assets/images/usdt.png"/>
                            <p>USDT</p>
                        </div>
                        <ul style="padding-top:50px;">
                            <li  v-for = "(tab,index) in usdtList" :key="index" >
                                <router-link :to="tab.href">
                                    
                                    <label>
                                         <img :src="tab.imgSrc"/>
                                        <span>{{tab.category}}</span>
                                    </label>
                                    <label>{{tab.price}}</label>
                                    <label :class="tab.class">
                                        {{tab.rate}}
                                    </label>
                                     <label>{{tab.high}}</label>
                                    <label>{{tab.low}}</label>
                                    <label>{{tab.volume}}</label>
                                </router-link>
                            </li>
                        
                        </ul>
                    </div>
                    <div class="btc">
                        <div class="btc_icon">
                            <img src="../../assets/images/btc.png"/><br/>
                            <p>BTC</p>
                        </div>
                        <ul>
                            <li v-for = "(tab,index) in btcList" :key="index">
                                <router-link :to="tab.href">
                                    <label>
                                         <img :src="tab.imgSrc"/>
                                        <span>{{tab.category}}</span>
                                    </label>
                                    <label>{{tab.price}}</label>
                                    <label :class="tab.class" >
                                        {{tab.rate}}
                                    </label>
                                      <label>{{tab.high}}</label>
                                    <label>{{tab.low}}</label>
                                    <label>{{tab.volume}}</label>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="eth">
                        <div class="eth_icon">
                            <img src="../../assets/images/eth.png"/>
                            <p>ETH</p>
                        </div>
                        <ul>
                            <li  v-for = "(tab,index) in ethList" :key="index">
                                <router-link :to="tab.href">
                                    <label>
                                        <img :src="tab.imgSrc"/>
                                        <span>{{tab.category}}</span>
                                    </label>
                                    <label>{{tab.price}}</label>
                                    <label  :class="tab.class" >
                                        {{tab.rate}}
                                    </label>
                                     <label>{{tab.high}}</label>
                                    <label>{{tab.low}}</label>
                                    <label>{{tab.volume}}</label>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div class="section" id="page3">
                <!-- <label class="fadeinB">{{$t("sectionPage.ptaqTitle")}}</label>
                <p class="fadeinA">{{$t("sectionPage.ptaqContent")}}</p> -->
                <Carousel autoplay :arrow="modalshowArrow" :autoplay-speed="speed" v-model="value3" loop>
                    <CarouselItem>
                        <div class="pagethree-carousel project-car">
                           <h1>{{$t("sectionPage.platformProject")}}</h1>
                           <h2>{{$t("sectionPage.subPlatformTitle")}}</h2>
                           <div class="coin-project">
                               <router-link to="">{{$t("sectionPage.btc")}}</router-link>
                               <router-link to="">{{$t("sectionPage.eth")}}</router-link>
                               <router-link to="">{{$t("sectionPage.ltc")}}</router-link>
                               <router-link to="">{{$t("sectionPage.usdt")}}</router-link>
                               <router-link to="">{{$t("sectionPage.bch")}}</router-link>
                               <router-link to="">{{$t("sectionPage.etc")}}</router-link>
                               <router-link to="">{{$t("sectionPage.eos")}}</router-link>
                               <router-link to="">{{$t("sectionPage.qtum")}}</router-link>
                               <router-link to="">{{$t("sectionPage.neo")}}</router-link>
                               <router-link to="">{{$t("sectionPage.more")}}</router-link>
                           </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="pagethree-carousel activity-car">
                            <h1>{{$t("sectionPage.hotActivity")}}</h1>
                            <h2>{{$t("sectionPage.subHotActivityTitle")}}</h2>
                            <ul class="activety-item">
                                <li>
                                    <router-link to="">
                                        <div class="icon-box"><img src="../../assets/images/index_icon_1.png"/></div>
                                        <div class="item-desc">
                                            <h2>{{$t("sectionPage.sPlatformCoin")}}</h2>
                                            <p>{{$t("sectionPage.sCoinDesc")}}</p>
                                        </div>
                                     </router-link>
                                </li>
                                 <li class="margin-li">
                                    <router-link to="">
                                        <div class="icon-box"><img src="../../assets/images/index_icon_2.png"/></div>
                                        <div class="item-desc">
                                            <h2>{{$t("sectionPage.mServiceCharge")}}</h2>
                                            <p>{{$t("sectionPage.sCoinDesc")}}</p>
                                        </div>
                                      </router-link>
                                </li>
                                 <li>
                                      <router-link to="">
                                        <div class="icon-box"><img src="../../assets/images/index_icon_3.png"/></div>
                                        <div class="item-desc">
                                            <h2>{{$t("sectionPage.registerAirdrop")}}</h2>
                                            <p>{{$t("sectionPage.airdropDesc")}}</p>
                                        </div>
                                      </router-link>
                                </li>
                            </ul>
                            <router-link to="" class="look-more">{{$t("sectionPage.lookMore")}}>></router-link>
                        </div>
                    </CarouselItem>
                     <CarouselItem>
                        <div class="pagethree-carousel notice-car">
                            <h1>{{$t("sectionPage.latestNotice")}}</h1>
                            <router-link to="/notice" class="latestNotice-details">
                                <h3>CBOE将于5月21日开始比特币期货交易</h3>
                                <p>该公司在5月15日发表的一份声明中表示，交易将于美国中部时间5月21日下午5点开始，周一（5月21日）将成为其第一个全天交易日。该产品将在CBOE期货交易所（CFE）进行交易，代号为“XBT”。该公司在其声明中补充道，这个期货产品的交易在5月底之前是免费的。</p>

                            </router-link>
                            <router-link to="/notice" class="latestNotice-details">
                                <h3>CBOE将于5月21日开始比特币期货交易</h3>
                                <p>该公司在5月15日发表的一份声明中表示，交易将于美国中部时间5月21日下午5点开始，周一（5月21日）将成为其第一个全天交易日。该产品将在CBOE期货交易所（CFE）进行交易，代号为“XBT”。该公司在其声明中补充道，这个期货产品的交易在5月底之前是免费的。</p>

                            </router-link>
                            <div class="greadint"></div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </div>
            <div class="section pagethree-carousel" id="page4" >
               <!--<label class="fadeinB">{{$t("sectionPage.ptslTitle")}}</label>
                <p class="fadeinA">{{$t("sectionPage.ptslContent")}}</p>-->
                <h1>{{$t("sectionPage.page4Title")}}</h1>
                <h2>{{$t("sectionPage.page4SubTitle")}}</h2>
                <div class="download-box">
                    <!-- <img src="../../assets/images/index_down_pic.png"/> -->
                    <div class="download-mode">
                        <router-link to="/appDownload">
                            <img src="../../assets/images/icdex_icon_ios.png"/>
                            <span> Iphone{{$t("sectionPage.download")}}</span>
                        </router-link>
                        <router-link :to="{path:'appDownload',query:{type:'android'}}">
                            <img src="../../assets/images/index_icon_and.png"/>
                            <span>Android{{$t("sectionPage.download")}}</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- <div class="section" id="page5">
                <div class="page5_title">{{$t("sectionPage.newsTitle")}}</div>
                <div class="page5_content">
                    <img style="float:left;width:30%;height:320px;" src="../../assets/images/news_left.png"></img>
                    <div style="float:left;width:40%;padding:0 75px;height:259px;">
                       <div class="news_title">COINBASE对BCC态度软化</div> 
                       <div class="news_date">2017-12-05</div>
                       <div class="news_detail">据VB报道，美国东部时间昨天，以太坊的交易量突破了40万，比比特币高出4万，创下虚拟货币新纪录。</div>
                       <img style="margin-top:190px;" src="../../assets/images/news_more.png"></img>
                    </div>
                    <img style="float:left;padding:5px 10px 0 0" src="../../assets/images/news_right.png"></img>
                    <ul>
                        <li :class="tab.class" v-for="tab in news">
                            <span>{{tab.date}}</span>
                            <label>{{tab.title}}</label>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>
        <!-- <div id="nav">
            <ul>
                <li><span>BANNER</span><a @click="goAnchor('#page1')"></a></li>
                <li><span>{{$t("nav.ptjy")}}</span><a @click="goAnchor('#page2')"></a></li>
                <li><span>{{$t("nav.ptaq")}}</span><a @click="goAnchor('#page3')"></a></li>
                <li><span>{{$t("nav.ptsl")}}</span><a @click="goAnchor('#page4')"></a></li>
                <li><span>{{$t("nav.xwzx")}}</span><a @click="goAnchor('#page5')"></a></li> -->
            <!-- </ul>
        </div> -->
    </div>
</template>
<style scoped>
    #fullpage{
        background:#021b3a;
    }
    .section{
        height:640px;
        text-align:center;
        color:#fff;
    }
    .carousel-notice{
        width:100%;
        height:50px;
        line-height:50px;
        background:#01142a;
       overflow:hidden;
    }
    .platformMsg-box{
         margin:0 10%;
         color:#fff;
    }
    .platformMsg-box>a:first-child{
        float:left;
       text-align:left;
        width:12%;
        display:block;
        position: relative;
        padding-left:30px;
        color: #fff;
    }
    .platformMsg-box>a:first-child img{
        position: absolute;
        top:17px;
        left:0px;
    }
    .platformMsg-box .ul-box{
        width:88%;
        float:left;
        color: #fff;
    }
    .platformMsg-box ul{
        width:100%;
        overflow:hidden;
        position: relative;
        height: 50px;
    }
    .platformMsg-box ul li p{
         float:left;
     }
    .platformMsg-box ul li{
         overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        display: none;
      }
      .platformMsg-box ul li:first-child{
          display: block;
      }
      .platformMsg-box ul li span{
          float:right;
      }
    #page2 .ptjy{
        position: relative;
    }
    .demo-carousel{
      
        height:640px;
        
    }
    .bg_one{
        background:url(../../assets/images/banner.jpg) no-repeat center;
        background-size:cover;
    }
    .bg_two{
        background:url(../../assets/images/banner_two.jpg) no-repeat center;
        background-size:cover;
    }
    .demo-carousel-btn{
        width:100%;
        height:100%;
        padding-top:205px;
    }
     .demo-carousel h1{
         font-size:40px;
       
         letter-spacing: 1px;
     }
     .demo-carousel p{
         font-size:14px;
         margin-bottom: 30px;
     }
    .demo-carousel a{
        display:inline-block;
        width:250px;
        height:55px;
        margin:0 15px;
    }
    .purchase{
        background:url(../../assets/images/purchase.png) no-repeat;
    }
    .register{
        background:url(../../assets/images/register.png) no-repeat;
    }
    .ptjy{
        height:100%;
        margin:30px 10%;
    }
    .usdt{
        float:left;
        width:100%;
    }
    .usdt_icon{
        float:left;
        width:18%;
        height:439px;
        background:#01142a;
        /* padding-top:125px; */
        margin:5px;
        display: flex;
        align-items: center;
        justify-content:center;
    }
   
    .ptjy ul{
        float:left;
        width:80%;
    }
    .ptjy ul li{
        float:left;
        width:100%;
        /* height:140px; */
        background:#01142a;
        margin:5px;
        cursor:pointer;
    }
    .coin_title{
        width: 79.2%;
        overflow: hidden;
        margin: 5px;
        position: absolute;
        right: 14px;
        top: -5px;
    }
    .coin_title span{
        width: 16.6666%;
        height:45px;
        float: left;
        line-height: 45px;
         background:#01142a;
        text-align: center;
    }
    .ptjy ul li a{
        color:#fff;
    }
    .ptjy ul li:hover{
        box-shadow:0 1px 16px #0b2a80;
    }
    .ptjy ul li.rise label,.rise{
        color:#32b114;
    }
    .ptjy ul li.drop label,.drop{
        color:#e01a1a;
    }
    .ptjy ul li label{
        /* display:inline-block; */
        float: left;
       line-height:47px;
        cursor:pointer;
        width: 16.6666%;
        text-align: center;
        border-right:1px solid #021b3a;
       
    }
    
    .ptjy ul li label>img{
        width:27px;
        margin-right:5px;
    }
    .ptjy ul li label img{
        vertical-align:middle;
    }
    
    .btc,.eth{
        float:left;
        width:100%;
        margin-top:10px;
    }
    .btc_icon{
         height:161px;
    }
    .eth_icon{
         height:104px;
    }
    .btc_icon img,.eth_icon img,.usdt_icon img{
        margin-right:8px;
    }
    .btc_icon,.eth_icon{
        float:left;
        width:18%;
        background:#01142a;
        /* padding-top:50px; */
        margin:5px;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    #nav{
        position:fixed;
        right:10%;
        top:50%;
        z-index:100;
    }
    #nav ul li {
        display: block;
        width: 120px;
        height: 25px;
        margin: 7px;
        position:relative;
        padding-right:20px;
        text-align:right;
        color:#fff;
    }
    #nav ul li span{
        display:none;
    }
    #nav ul li a{
        top: 2px;
        right: 2px;
        width: 8px;
        height: 8px;
        background:url(../../assets/images/page.png) no-repeat;
        position: absolute;
        z-index: 1;
    }
    #nav ul li a:hover,#nav ul li a.active{
        top: 0;
        right: -3px;
        width:18px;
        height:18px;
        background:url(../../assets/images/page_active.png) no-repeat;
        position: absolute;
        z-index: 1;
    }
    /* #page3{
        position:relative;
        color:#979797;
        background:url(../../assets/images/section3.png) no-repeat center;
    } */
    #page3{
        margin-top: 24px;
    }
    #page3 label{
        position:absolute;
        top:30%;
        left:20%;
        font-size:30px;
    }
    .pagethree-carousel{
        padding-top:130px;
       
    }
    .pagethree-carousel h1{
       
        font-size:30px;
        letter-spacing:2px;
        font-weight:normal;
    }
    .pagethree-carousel h2{
        font-size:16px;
        font-weight:normal;
        letter-spacing:2px;
        margin:34px 0px 70px;
    }
    .activity-car h2{
        margin-bottom:50px;
    }
    .coin-project{
        margin:0 10% 100px;
        text-align:center;
        overflow:hidden;
        
    }
    .coin-project a{
        width:18%;
        height:100px;
        display:inline-block;
       
        line-height:100px;
        color:#fff;
        font-size:20px;
        margin:0px 1.875% 1.875% 0px;
        background:#1c324e;
         float:left;

    }
     .coin-project a:hover{
         background:#254166;
     }
    .project-car,.notice-car{
        width:100%;
        height:100%;
        background: url(../../assets/images/index_bg_right.png) no-repeat top right;
        
        position:relative;
        z-index:10;
        
    }
    .activity-car{
         background: url(../../assets/images/index_bg_left.png) no-repeat bottom right;
        
    }
    .notice-car h1{
        margin-bottom:60px;
        position:relative;
    }
    .activety-item{
        /* margin:0 15% 35px; */
         margin:0 15% 126px;
        overflow:hidden;
    }
    .activety-item li{
        width:28%;
        float:left;
        background:#fff;
        border-radius:2px;
    }
    .activety-item li a{
        color:#fff;
    }
    .activety-item li:nth-child(2){
        margin:0 7%;
    }
    .icon-box{
        background:#1c324e;
        width: 78px;
        height: 78px;
        padding-top: 16px;
        border-radius:50%;
        box-shadow:0px 1px 20px rgb(28,50,78);
        margin:30px auto;
        text-align:center;
    }
    .item-desc{
        background:#1c324e;
    }
    .item-desc:nth-child(2){
        background:#254166;
    }
    .item-desc h2{
        padding-top:30px;
        margin-bottom:10px;
    }
    .item-desc p{
        text-align:left;
        padding:0px 20px 30px;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
    }
    .look-more{
        color:#fff;
        font-size:14px;

        display: block;
        margin-top:-100px;
        padding:0 0 78px 0;
    }
    .ivu-carousel-dots-inside{
        bottom:50px;
    }
    .latestNotice-details{
        display:block;
        padding:20px;
        margin:0 10% 30px;
        background:#1c324e;
        color:#fff;
    }
    .latestNotice-details:hover{
        color:#fff;
    }
    .latestNotice-details h3{
        font-size:18px;
        font-weight:normal;
        text-align:left;
        margin-bottom:10px;
    }
    .latestNotice-details p{
        text-align:left;
        line-height:2em;
        letter-spacing:2px;
        word-break:break-all;
        display:-webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow:hidden;
    }
    .greadint{
        width:80.2%;
        position:absolute;
        bottom:0px;
        left:9.8%;
        height:85px;
        background-image: linear-gradient(180deg,rgba(2,27,58,0.1) 0%, rgba(2,27,58,0.8) 30%,rgba(2,27,58,0.95) 60%,rgba(2,27,58,1) 100%);
        box-shadow: 16px 0px rgb(2,27,58);
    }
    @-webkit-keyframes fadeinB {
        0% {
            top:50% ;
            opacity:0;
            }
        100% {
            top:30%;
            opacity:1;
            } 
    }
    @keyframes fadeinB {
         0% {
            top:50% ;
            opacity:0;
            }
        100% {
            top:30%;
            opacity:1;
            } 
    }
    @-webkit-keyframes fadeinA {
        0% {
            top:60% ;
            opacity:0;
            }
        100% {
            top:40%;
            opacity:1;
            } 
    }
    @keyframes fadeinA {
        0% {
            top:60% ;
            opacity:0;
            }
        100% {
            top:40%;
            opacity:1;
            } 
    }
     /**#page3 p{
         position:absolute;
        top:40%;
        left:20%;
         font-size:15px;
     }**/
    #page4{
        width:100%;
        height:640px;
        position:relative;
        color:#fff;
        padding-top:100px;
        background:url(../../assets/images/index_down_bg.png) no-repeat center bottom;
         background-color:#02234a;
        background-size:contain;
        margin-top:40px;
    }
    #page4 h1{
        margin-bottom:30px;
    }
    .download-box{
        overflow:hidden;
        margin:0 15%;
        background:url(../../assets/images/index_down_pic.png) no-repeat left bottom;
        background-size:412px 100%;
        height: 367px;
        max-width:768px;

    }
    .download-box>img{
        width: 412px;
        float: left;
        margin-right: 15%;
    }
    .download-mode{
        float:right;
        margin-top:90px;
    }
    .download-mode a{
        max-width: 260px;
        text-align: center;
        display: block;
        font-size: 18px;
        overflow: hidden;
        position: relative;
        padding: 0 30px;
    }
    .download-mode a:nth-child(1){
        background:#fff;
        color:#000;
       margin-bottom:40px;
    }
    .download-mode a:nth-child(2){
       border:1px solid #fff;
        color:#fff;
    }
    .download-mode a img{
        width:34px;
        margin-top:13px;
       
        margin-right:15px;
        float:left;
    }
    .download-mode a span{
        display:inline-block;
        height:70px;
        line-height:70px;
        float:left;
    }
    /**#page4 label{
        position:absolute;
        top:30%;
        left:70%;
        font-size:30px;
    }
    #page4 p{
        position:absolute;
        top:40%;
        left:70%;
        font-size:15px;
    }**/
    #page5{
        position:relative;
        color:#979797;
        background:url(../../assets/images/section5.png) no-repeat;
        padding:0 10%;
    }
    .page5_title{
        font-size:30px;
        line-height:200px;
    }
    .page5_content{
        text-align:left;    
    }
    .page5_content ul{
        float:left;
        width:27%;
    }
    .page5_content ul li{
        height:70px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .page5_content ul li span{
        margin-right:10px;
    }
    .news_1{
        color:#202b3c;
        font-size:12px;
    }
    .news_2{
        color:#505c6f;
        font-size:13px;
    }
    .news_3{
        color:#fff;
        font-size:18px;
    }
    .news_title{
        color:#fff;
        font-size:20px;
    }
    .news_date{
        color:#505c6f;
    }
    .news_detail{
        color:#98999f;
        margin-top:10px;
    }
</style>
<script>
var Stomp = require('stompjs');
var SockJS = require('sockjs-client');
var moment = require('moment');
// var $=require('jquery');

export default {
    data(){
        return {
            value2:0,
            value3:0,
            showArrow:'never',
            modalshowArrow:'never',
            speed:5000,
            symbol:'',
            // news:[
            //     {
            //         class:'news_1',
            //         date:'2017-12-05',
            //         title:'比特币稀缺性超过黄金,成为今年最好的增值啊啊啊啊啊'
            //     },
            //     {
            //         class:'news_2',
            //         date:'2017-12-01',
            //         title:'币行比特币新高23200 韩国立法监管或为推啊啊啊啊啊'
            //     },
            //     {
            //         class:'news_3',
            //         date:'2017-12-05',
            //         title:'COINBASE对BCC态度软化'
            //     },
            //     {
            //         class:'news_2',
            //         date:'2017-11-20',
            //         title:'阿鲁巴岛希望用以太坊促进旅游业发展啊啊啊啊啊'
            //     },
            //     {
            //         class:'news_1',
            //         date:'2017-11-13',
            //         title:'加拿大央行成员发表文章,探讨央行发现加盟啊啊啊啊啊'
            //     }
            // ],
            usdtList:[
                
            ],
            btcList:[
                
            ],
            ethList:[
                
            ]
        }
    },
    created:function(){
        this.init();
        this.getSymbol();
        require(["../../assets/js/index.js"],function(e){
            e.scrollFunction();
            e.carouselNotice();
        });
    
    },
    mounted:function(){
            var stompClient = null;
            var that=this;

            var socket = new SockJS(that.host+that.api.market.ws);
            stompClient = Stomp.over(socket);
            stompClient.debug=false;
            stompClient.connect({}, function(frame) {
                stompClient.subscribe('/topic/market/thumb', function(msg) {
                    var resp = JSON.parse(msg.body);
                    for(var i=0;i<that.usdtList.length;i++){
                        if(resp.symbol==that.usdtList[i].category){
                            that.usdtList[i].class= resp.change > 0 ? 'rise': 'drop'; 
                            that.usdtList[i].price=(resp.close).toFixed(2);
                            that.usdtList[i].rate=resp.chg>0 ? ('+'+(resp.chg*100).toFixed(2)+'%') : ((resp.chg*100).toFixed(2)+'%');
                        }
                    }

                });
            
            })
    },

    methods:{
        init(){
            this.$store.commit('navigate','nav-index');
        },
        getSymbol(){
            this.$http.post(this.host+this.api.market.thumb,{}).then(response => {
                var resp=response.body;
                console.log(resp);
                for(var i=0;i<resp.length;i++){
                    var arr={};
                    // arr_btc.class= resp[i].change > 0 ? 'rise': 'drop'; 
                    arr=resp[i].symbol.toLowerCase().split('/');
                    var a=arr[0];
                    var b=arr[1];
                   if(resp[i].symbol.toLowerCase().includes('usdt')){
                     this.classify(i,a,b,resp,'usdt');
                   }else if(resp[i].symbol.toLowerCase().includes('btc')){
                     this.classify(i,a,b,resp,'btc');
                   }else{
                     this.classify(i,a,b,resp,'eth');
                   }
                    // arr.href='/'+'exchange/'+a+'_'+b;
                    // arr.category=resp[i].symbol;
                    // this.symbol=arr.category;
                    // arr.price=(resp[i].close).toFixed(2);
                    // arr.rate=resp[i].chg>0 ? ('+'+(resp[i].chg*100).toFixed(2)+'%') : ((resp[i].chg*100).toFixed(2)+'%');
                    //  this.usdtList.push(arr);
                }
                
            })
        },
        classify(i,a,b,resp,cur){
            var arr_cur={};
            arr_cur.href='/'+'exchange/'+a+'_'+b;
            //  arr_cur.class= resp[i].change > 0 ? 'rise': 'drop'; 
            arr_cur.class= resp[i].chg > 0 ? 'rise': 'drop'; 
            arr_cur.category=resp[i].symbol;
            arr_cur.high=resp[i].high;
            arr_cur.low=resp[i].low;
            arr_cur.volume=resp[i].volume;                               
            if(a=='btc'){
                arr_cur.imgSrc=require('../../assets/images/btc.png');
            }else if(a=='bch'){
                 arr_cur.imgSrc=require('../../assets/images/bch.png');
            }else if(a=='eth'){
                arr_cur.imgSrc=require('../../assets/images/eth.png');
            }else if(a=='xrp'){
                 arr_cur.imgSrc=require('../../assets/images/xrp.png');
            }else if(a=='itc'){
                 arr_cur.imgSrc=require('../../assets/images/itc.png');
            }else if(a=='eos'){
                 arr_cur.imgSrc=require('../../assets/images/eos.png');
            }else if(a=='ada'){
                arr_cur.imgSrc=require('../../assets/images/ada.png');
            }
            this.symbol=arr_cur.category;
            arr_cur.price=(resp[i].close).toFixed(2);
            arr_cur.rate=resp[i].chg>0 ? ('+'+(resp[i].chg*100).toFixed(2)+'%') : ((resp[i].chg*100).toFixed(2)+'%');
            this[cur+"List"].push(arr_cur);
        },
       
        purchaseHref(){
            if(this.$store.state.showLogout==true){
                this.$router.push('login');
            }else{
                this.$router.push('otc/trade/usdt');
            }
        },
        goAnchor(selector) {
            var anchor = this.$el.querySelector(selector);
            $('html,body').animate({scrollTop: anchor.offsetTop}, 1000);
            //document.documentElement.scrollTop = anchor.offsetTop;
        }
            
    },
   
 
    

}
</script>
