<template>
  <div class="container">
    <div class="content-wrap">
      <div class="leftmenu">
        <ul class="nav">
           <li><router-link to="/notice">{{$t('joinus.latestAnnouncement')}}</router-link></li>
           <li><router-link to="/industryInfor">{{$t('joinus.industryInfor')}}</router-link></li>
           <li><router-link to="/contactus">{{$t('joinus.contactUs')}}</router-link></li>
           <li class="cur"><router-link to="/">{{$t('joinus.joinUs')}}</router-link></li>
        </ul>
      </div>
      <div class="content">
          <h1>{{$t('joinus.joinUs')}}</h1>
          <p>{{$t('joinus.principle')}}</p>
         
          <div class="postlist">
            <ul>
              <li class="header">{{$t('joinus.jobOne')}}</li>
              <li>
                <h3>{{$t('joinus.jobDesc')}}：</h3>
                <p>1.{{$t('joinus.saleDescOne')}}</p>
                <p>2.{{$t('joinus.saleDescTwo')}}</p>
                <p>3.{{$t('joinus.saleDescThree')}}</p>
                <p>4.{{$t('joinus.saleDescFour')}}</p>
              </li>
              <li>
                  <h3>{{$t('joinus.qualification')}}：</h3>
                  <p>1.{{$t('joinus.saleQualificationOne')}}</p>
                  <p>2.{{$t('joinus.saleQualificationTwo')}}</p>
                  <p>3.{{$t('joinus.saleQualificationThree')}}</p>
                  <p>4.{{$t('joinus.saleQualificationFour')}}</p>
                  <p>5.{{$t('joinus.saleQualificationFive')}}</p>
              </li>
              <li class="header">{{$t('joinus.jobTwo')}}</li>
              <li>
                <h3>{{$t('joinus.jobDesc')}}：</h3>
                <p>1.{{$t('joinus.customerDescOne')}}</p>
                <p>2.{{$t('joinus.customerDescTwo')}}</p>
                <p>{{$t('joinus.customerDescThree')}}</p>
              </li>
              <li>
                <h3>{{$t('joinus.qualification')}}：</h3>
                <p>1.{{$t('joinus.customerQuaOne')}}</p>
                <p>2.{{$t('joinus.customerQuaTwo')}}</p>
                <p>3.{{$t('joinus.customerQuaThree')}}</p>
                <p>4.{{$t('joinus.customerQuaFour')}}</p>
                <p>5.{{$t('joinus.customerQuaFive')}}</p>
                <p>6.{{$t('joinus.customerQuaSix')}}</p>
                <p>7.{{$t('joinus.customerQuaSever')}}</p>
              </li>
              <li class="header">{{$t('joinus.jobThree')}}</li>
              <li>
               <h3>{{$t('joinus.jobDesc')}}：</h3>
               <p>1.{{$t('joinus.desigerDescOne')}}</p>
               <p>2.{{$t('joinus.desigerDescTwo')}}</p>
               <p>3.{{$t('joinus.desigerDescThree')}}</p>
               <p>4.{{$t('joinus.desigerDescFour')}}</p>
               <p>5.{{$t('joinus.desigerDescFive')}}</p>
               <p>6.{{$t('joinus.desigerDescSix')}}</p>
              </li>
              <li>
               <h3>{{$t('joinus.qualification')}}：</h3>
                <p>1.{{$t('joinus.desigerQuaOne')}}</p>
                <p>2.{{$t('joinus.desigerQuaTwo')}}</p>
                <p>3.{{$t('joinus.desigerQuaThree')}}</p>
                <p>4.{{$t('joinus.desigerQuaFour')}}</p>

              </li>
              <li class="header">{{$t('joinus.jobApplication')}}</li>
              <li>
                   <p>{{$t('joinus.jobApplicationTotal')}}</p>
              </li>
             
            </ul>
          </div>
      
        
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* .postlist li{
    float: left;
    width: 50%;
  } */
  li.header{
    width: 100%;
    text-align: left;
    font-size: 18px;
    padding: 10px;
    background: #263142;
    color: #ccd6eb;
  }
  .postlist ul:after{
    content: ' ';
    clear: both;
    display: block;
  }
  .postlist ul li{
    margin-bottom:10px;
  }
  .postlist ul li>p{
    text-indent: 2em;
    font-size:14px;
    line-height: 2em;
  }
  
  .container{
    width:100%;
    background: #263142;
  }
  .content-wrap{
    position: relative;
    /* width: 1200px; */
    padding:20px 10% 0px;
    margin: 0 auto;
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
    margin-bottom:106px;
    padding-bottom: 20px;
    background:#1b222e;
    padding: 0px 20px 20px;
    color: #ccd6eb;
  }
  .content>h1{
    font-size:22px;
    font-weight: normal;
    border-bottom: 1px solid #263142;
    padding: 20px 0px 10px 0px;
  }
  .content>p{
    margin: 10px 0px;
    font-size: 16px;
  }
  .content>div{
    padding-bottom: 20px;
  }
  .content h3{
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
  }
  
  .content h5 {
    font-size: 14px;
  }
</style>
