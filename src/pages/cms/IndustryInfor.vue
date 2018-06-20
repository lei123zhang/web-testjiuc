<template>
  <div class="container">
    <div class="content-wrap">
      <div class="leftmenu">
        <ul class="nav">
           <li><router-link to="/notice">{{$t('joinus.latestAnnouncement')}}</router-link></li>
           <li class="cur"><router-link to="/industryInfor/articIndex" class="router-link-active">{{$t('joinus.industryInfor')}}</router-link></li>
           <li><router-link to="/contactus">{{$t('joinus.contactUs')}}</router-link></li>
           <li><router-link to="/join-us">{{$t('joinus.joinUs')}}</router-link></li>
        </ul>
      </div>
       
      
      <router-view></router-view>
       
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        ind:'0',
        newlist: []
    };
  },
  methods: {
    // onlistdetails(index){
    onlistdetails(){
        // window.localStorage.setItem('id', String(index))
        this.$router.push({ path: '/industryInfor/articIndex',query:{}})
        // this.ind=index
    },
   
   
  },
  created: function() {
    // this.onlistdetails(window.localStorage.getItem('id'));
     this.onlistdetails();
    
  }
};
</script>
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
  .industryBox{
      margin-left: 220px;
  }
  
</style>
