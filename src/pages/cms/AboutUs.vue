<template>
 <div class="subpages">
   <div class="aboutus-sub bg-grey">
     <h1 class="about_text_1">{{$t("aboutus.aboutus")}}</h1>
     <p>{{$t("aboutus.modalOnePar")}}<br />
        {{$t("aboutus.modalTwoPar")}}<br />
        {{$t("aboutus.modalThreePar")}}
     </p>
    <div class="subabout-modal">
        <!-- <img src="../../assets/images/about_pic_we.jpg"/> -->
        <div class="who">
            <img src="../../assets/images/about_text_who.png"/>
            <h2>{{$t("aboutus.weAreTitle")}}</h2>
            <p>
             {{$t("aboutus.weAreDesc")}}
            </p>
        </div>
    </div>
   </div>
   <div class="aboutus-sub bg-white">
     <h1 class="about_text_2">{{$t("aboutus.businessRage")}}</h1>
     <p> {{$t("aboutus.businessDesc")}}</p>
     <img src="../../assets/images/about_pic_map.png" class="map"/> 
  </div>
   <div class="aboutus-sub bg-grey">
     <h1 class="about_text_3">{{$t("aboutus.coreValues")}}</h1>
     <p>{{$t("aboutus.coreValueOnePar")}}<br />
        {{$t("aboutus.coreValueTwoPar")}}<br />
        {{$t("aboutus.coreValueThreePar")}}
     </p>
    <ul class="businssItem">
       <li>{{$t("aboutus.integrityRigour")}}</li>
       <li>{{$t("aboutus.openInnovation")}}</li>
       <li>{{$t("aboutus.cooperationEnterprise")}}</li>
    </ul>
   </div>
  <div class="aboutus-sub bg-white">
     <h1 class="about_text_4">{{$t("aboutus.ourAdvantages")}}</h1>
     <p>
       {{$t("aboutus.adOnePar")}}<br/>
       {{$t("aboutus.adTwoPar")}}<br/>
      {{$t("aboutus.adThreePar")}}
     </p>
     <ul class="advantagesItem">
        <li>
            <div class="ad-mask-box">
              <a>
                <img src="../../assets/images/about_pic_ad1.jpg"/>
              </a>
              <div class="mask">
                  <p>· {{$t("aboutus.advantageItemOneOne")}}</p>
                  <p>· {{$t("aboutus.advantageItemOneTwo")}}</p>
                  <p>· {{$t("aboutus.advantageItemOneThree")}}</p>
                  <p>· {{$t("aboutus.advantageItemOneFour")}}</p>
              </div>
            </div>
            <p>{{$t("aboutus.advantageBottomOne")}}</p>
        </li>
        <li>
            <div class="ad-mask-box">
               <a>
                  <img src="../../assets/images/about_pic_ad2.jpg"/>
                </a>
                <div class="mask">
                    <p>· {{$t("aboutus.advantageItemTwoOne")}}</p>
                    <p>· {{$t("aboutus.advantageItemTwoTwo")}}</p>
                    <p>· {{$t("aboutus.advantageItemTwoThree")}}</p>
                    <p>· {{$t("aboutus.advantageItemTwoFour")}}</p>
                </div>
            </div>
            <p>{{$t("aboutus.advantageBottomTwo")}}</p>
        </li>
        <li>
           <div class="ad-mask-box">
               <a>
                  <img src="../../assets/images/about_pic_ad3.jpg"/>
                </a>
                <div class="mask">
                    <p>· {{$t("aboutus.advantageItemThreeOne")}}</p>
                    <p>· {{$t("aboutus.advantageItemThreeTwo")}}</p>
                </div>
           </div>
            <p>{{$t("aboutus.advantageBottomThree")}}</p>
        </li>
        <li>
            <div class="ad-mask-box">
                <a>
                  <img src="../../assets/images/about_pic_ad4.jpg"/>
                </a>
                <div class="mask">
                    <p>· {{$t("aboutus.advantageItemFourOne")}}</p>
                    <p>· {{$t("aboutus.advantageItemFourTwo")}}</p>
                    <p>· {{$t("aboutus.advantageItemFourThree")}}</p>
                </div>
            </div>
            <p>{{$t("aboutus.advantageBottomFour")}}</p>
        </li>
     </ul>
  </div>

 </div>
</template>

<style scoped>
 .subpages{
   min-width:1200px;
 }
  .aboutus-sub{
    /* margin:0 10%; */
    color: #fff;
    text-align: center;
    /* padding-top:100px;
    padding-bottom:100px; */
    padding:100px 10%;
  }
  .aboutus-sub.bg-grey{
    color:#fff;
    background:#263142;
  }
  .aboutus-sub.bg-white{
    color:black;
     background:#f8f8f8;
  }
   .aboutus-sub>h1{
     height:50px;
     font-size:30px;
     font-weight:bold;
     margin:0 auto 35px;
     letter-spacing: 10px;
   }
   .about_text_1{
     width:256px;
      background:url(../../assets/images/about_text_1.png) no-repeat center bottom;
   }
   .about_text_2{
      width:524px;
      background:url(../../assets/images/about_text_2.png) no-repeat center bottom;
   }
   .about_text_3{
      width:340px;
      background:url(../../assets/images/about_text_3.png) no-repeat center bottom;
   }
   .about_text_4{
      width:454px;
      background:url(../../assets/images/about_text_4.png) no-repeat center bottom;
   }
   .aboutus-sub>p{
     font-size:16px;
     margin-bottom:52px;
   }
   .subabout-modal{
     overflow:hidden;
     text-align:left;
     width:100%;
     max-width:1000px;
    height:362px;
     background:url(../../assets/images/about_pic_we.jpg) no-repeat left center;
      background-size:59% 100%;
     
   }
   /* .subabout-modal>img{
     float:left;
     width:60%;
   } */
   .who{
     padding:45px;
     background:#fff;
     color:#000;
     margin:1.5% 0 0 55%;
     position: relative;
     z-index:10;
     letter-spacing: 1px;
     width: 462px;
   }
   .who>h2{
     margin:24px 0px;
   }
   .businssItem{
     overflow: hidden;

   }
   .businssItem li{
     width:33.33%;
     padding:0px 6%;
     height:252px;
     text-align:center;
     font-size:22px;
     color:#263142;
     font-weight: bold;
     float: left;
     background:url(../../assets/images/about_bg_value.png) no-repeat center center;
     letter-spacing: 0px;
     display: flex;
    align-items: center;
    justify-content: space-around;
   }
   .advantagesItem {
     overflow: hidden;

   }
   .advantagesItem li{
     float: left;
     width:25%;
     padding:0px 15px;
   }
  .advantagesItem li a{
    color:#fff;
    width:100%;
    display: block;
  }
  .ad-mask-box{
    position: relative;
    overflow: hidden;
  }
  .advantagesItem li a img{
    width:100%;
  }
  .advantagesItem li>p{
    width:80%;
    height: 80px;
    padding:0 5px;
    text-align: center;
    background:#fff;
    position: relative;
    top:-35px;
    font-size:14px;
    z-index: 20;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .mask{
    width:100%;
    /* height:0%; */
    height:100%;
    background: rgba(0,0,0,0.6);
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    left: 0px;
    /* bottom: 0px; */
    bottom:-100%;
    z-index: 10;
    transition: all 0.8s;
  }
  .mask p{
    width:100%;
    line-height: 1.8em;
    color: #fff;
    text-align: left;
    font-size:14px;
    display:none;
  }
  .advantagesItem li:hover .mask{
    /* height:100%; */
    bottom:5px;
  }
  .advantagesItem li:hover .mask p{
    display:block;
  }
  
  
</style>
