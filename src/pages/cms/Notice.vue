<template>
    <!-- <div class="help">
        
        <div class="help_container">
            <div style="line-height: 40px;"><router-link to="/help">{{$t('cms.servicecenter')}}</router-link>->{{$t('cms.notice')}}</div>
            
            <Col span="24" style="padding:0 2%;color:#000;font-size:18px;background:#fff">
                
                <div  class="faqlist" v-for="(item,index) in FAQList" :key="index">  
                    <div @click="noticedeail(item.id)">{{item.title}}
                        <span style="float:right">{{item.createTime}}</span>
                    </div>
                </div>
               
            </Col>
          
        </div>
        <Col span="24" style="padding:100px 0;">
          
           <Page :total="totalPages" :pageSize="pageSize" :current="pageNo" @on-change="loadDataPage"></Page>

         
         </Col>  
    </div> -->
    <div class="container">
    <div class="content-wrap">
      
      <div class="leftmenu">
        <ul class="nav">
           <li class="cur"><router-link to="/">{{$t('joinus.latestAnnouncement')}}</router-link></li>
           <li><router-link to="/industryInfor">{{$t('joinus.industryInfor')}}</router-link></li>
           <li ><router-link to="/contactus">{{$t('joinus.contactUs')}}</router-link></li>
           <li><router-link to="/join-us">{{$t('joinus.joinUs')}}</router-link></li>
        </ul>
      </div><!--  -->
     
     <!-- 公告列表 -->
    <div class="noticeBox" v-show="showItem">
      <div class="content">
        <h2>最新公告</h2>
        <ul class="artic">
            <li v-for="(item,index) in newList" @click="articleItem(index)">
                <router-link to="" >
                    <span  v-if="item.value==0">活动</span>
                    <span  v-else>公告</span>
                    {{item.title}}
                </router-link>
            </li>
        </ul>
      </div>
      <Page :total="totalPages" :pageSize="pageSize" :current="pageNo"></Page>
    </div>
    

    <!-- 公告详情 -->
    <div class="detBox" v-show="showDetail">
      <div class="back" @click="backItem">< 返回公告列表</div>
      <div class="detail">
        <h3>区块链自律联盟成立 监管革了谁的命？</h3>
        <p>台湾立法院推动区块链连线暨产业自律联盟，由国民党、民进党、亲民党、时代力量等跨党派立委连署，于今（22）日成立，自律联盟期望透过立法院各委员的力量，推动相关法规的建立和产业健全。</p>
        <p>大会现场嘉宾将近200人，除了立委及政府官员以外，包括美国在台协会、瑞士商务办事处、马来西亚友谊及贸易中心等单位，以及超过100位以上的业内从业者参与，并在会议上共同朗读了自律宣言。</p>
      </div>
    </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNo:1,
      pageSize:10,
      totalPages:0,
      showItem:true,
      showDetail:false,
      newList: [
        {
          title: "人民币提现",
          key: "123",
          value:0
        },
        {
          title: "转入/转出虚拟币",
          key: "inOutXnb",
          value:1
        },
        {
          title: "虚拟币交易",
          key: "xnbDeal",
          value:0
        },
        {
          title: "人民币提现",
          key: "rmbTixian",
          value:1
        },
        {
          title: "转入/转出虚拟币",
          key: "inOutXnb",
          value:0
        },
        {
          title: "虚拟币交易",
          key: "xnbDeal",
          value:1
        }
      ],
    };
  },
 
  methods: {
    articleItem:function(index){
      console.log(index);
      this.showItem=false;
      this.showDetail=true;
      
    },
    backItem:function(){
       this.showDetail=false;
       this.showItem=true;
    }
    
    
  }
};
</script>
<style scoped>
.container{
    width:100%;
    background: #263142;
  }
  .content-wrap{
    position: relative;
     min-width: 1200px;
    padding:20px 10% 0px;
    margin: 0 auto 106px;
    background:#263142;
  }
  .leftmenu{
    position: absolute;
    width: 200px;
    text-align: center;
    background: #1b222e;
    padding: 0px;
  }
 
  .leftmenu li {
    font-size: 16px;
    line-height: 60px;
  }
 
   .leftmenu .nav>li>a{
    color: #ccd6eb;
    font-size: 16px;
    background: none;
  }
  /* .leftmenu li a:hover{ */
    .leftmenu .nav>li>a:hover{
    color: #1855fd ;
    background:none;
  }
  .leftmenu li.cur{
    background:#1855fd;
    
  }
  .leftmenu li.cur a.router-link-active{
    color: #fff !important;
    font-size:18px;
    background:#1855fd;
  }
  .noticeBox,.detBox{
    margin-left: 220px;
  }
  .content,.detBox{
    min-height:720px;
  }
  .content,.detBox{
    padding-bottom: 20px;
    background:#1b222e;
    padding: 0px 20px 20px;
    color: #ccd6eb;
  }
  .content>h2{
    font-size:22px;
    font-weight: normal;
    border-bottom: 1px solid #263142;
    padding: 20px 0px 10px 0px;
  }
 
  .artic li a{
    display:block;
    color:#ccd6eb;
    font-size:14px;
    padding:15px 0px;
    border-bottom: 1px solid #263142;
  }
  .artic li a span{
    border:1px solid #747c8d;
    display:inline-block;
    padding:1px 6px;
    border-radius: 6px;
    font-size:12px;
    margin-right:5px;
    color:#747c8d;
  }
  .artic li a:hover{
    color:#2d8cf0;
  }
  .artic li:last-child a{
    border-bottom:none;
  }
   .detail h3{
    font-size:24px;
    font-weight: normal;
    text-align: center;
    margin:30px 0px 25px;
  }
  .detail p{
    font-size:14px;
    text-indent: 2em;
    line-height: 2em;
    letter-spacing: 1px;
  }
  .detBox>div{
    width: 100%;
    display: block;
    padding:18px 0px;
    border-bottom: 1px solid #263142;
    letter-spacing: 1px;
  }
  .back{
    color:#2d8cf0;
    cursor: pointer;
  }
  .ivu-page{
    text-align: center;
    margin:30px 0px;
  }
  .ivu-page .ivu-page-prev,.ivu-page .ivu-page-disabled,.ivu-page .ivu-page-next{
    background-color:#1b222e;
  }
  .ivu-page-item-active{
    background-color:#fff;
  }
  .ivu-page-item-jump-next, .ivu-page-item-jump-prev, .ivu-page-next, .ivu-page-prev{
    background-color:#1b222e;
    border:none
  }
</style>
