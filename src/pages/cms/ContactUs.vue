<template>
  <div class="container">
    <div class="content-wrap">
      <div class="leftmenu">
        <ul class="nav">
           <li><router-link to="/notice">{{$t('joinus.latestAnnouncement')}}</router-link></li>
           <li><router-link to="/industryInfor">{{$t('joinus.industryInfor')}}</router-link></li>
           <li class="cur"><router-link to="/">{{$t('joinus.contactUs')}}</router-link></li>
           <li><router-link to="/join-us">{{$t('joinus.joinUs')}}</router-link></li>
        </ul>
      </div>
      <div class="content">
          <h1>{{$t('joinus.contactUs')}}</h1>
          
          <div class="postlist">
              <img src="../../assets/images/page_icon_map.jpg"/>
              <div class="contact">
                  <h2>联系方式</h2>
                  <p>聯繫電話：+886928816555</p>
                  <p>公司名稱：納博信息科技有限公司</p>
                  <p>客服QQ：2936218772</p>
                  <p>邮箱：nabokj@foxmail.com</p>
                  <p>地址：台湾省彰化市華山路203號5樓之3</p>
                  <h2>工作时间</h2>
                  <p>客服：24h 在线</p>
                  <p>技术支持：周一至周五,上午09:00至下午18:00</p>
              </div>
              <div class="map">
                <p>納博信息科技有限公司</p>
                  <img src="../../assets/images/page_icon_site.png"/>
              </div>
          </div>
      
        
      </div>
    </div>
  </div>
</template>

<style scoped>
  .map{
      position: absolute;
      left: 50.5%;
      bottom:29%;
  }
  .map p{
    padding: 10px 15px;
    background: #fff;
    color:#000;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
   position: relative;
   top:-3px;
   left: -50px;
  }
  li.header{
    width: 100%;
    text-align: left;
    font-size: 18px;
    padding: 10px;
    background: #263142;
    color: #ccd6eb;
  }
  .postlist{
      position: relative;
      margin-top: 18px;
  }
  .postlist>img{
      width:100%;
      min-height:351px;
  }
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
  .content {
    margin-left: 220px;
    padding-bottom: 20px;
    background:#1b222e;
    padding: 0px 20px 20px;
    color: #ccd6eb;
    min-height:720px;
  }
  .content>h1{
    font-size:22px;
    font-weight: normal;
    border-bottom: 1px solid #263142;
    padding: 20px 0px 10px 0px;
  }
  .contact{
      position:absolute;
      left:15px;
      top:50%;
      transform: translateY(-50%);
      background: #ffffff;
      color:#666666;
      box-shadow: 2px 6px 16px rgba(0,0,0,0.4);
      padding:0 15px 15px;
  }
  .contact>p{
    margin-top:10px;
    font-size: 14px;
  }
  .contact h2{
      font-size:16px;
      font-weight: normal;
      color:#000;
      margin-top:10px;
      position: relative;
  }
  .contact h2::before{
      content:'';
      width: 10px;
      height: 20px;
      background: #ffcc00;
      position: absolute;
      left: -15px;
      top: 0px;
  }
</style>
