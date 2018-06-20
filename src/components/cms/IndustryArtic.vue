<template>
    <div class="content">
        <h2>行业资讯</h2>
        <ul class="articBox">
            <li class="artOne" @click="artDet(1)">
                <img src="../../assets/images/newbg.jpg">
                <h3>块链自律联盟成立 监管革了谁的命？</h3>
                <p>台湾立法院推动区块链连线暨产业自律联盟，由国民党、民进党、亲民党、时代力量等跨党派立委连署，于今（22）日成立，自律
                    联盟期望透过立法院各委员的力量，推动相关法规的建立和产业健全。大会现场嘉宾将近200人，除了立委及政府官员...
                </p>
                <div class="seeTotal">
                    <span><img src="../../assets/images/icon-time.png"/>2018-05-25 09:30</span>
                    <span><img src="../../assets/images/icon-eye.png"/>226</span>
                    
                </div>
            </li>


            <li class="artOne">
                <img src="../../assets/images/newbg.jpg">
                <h3>块链自律联盟成立 监管革了谁的命？</h3>
                <p>台湾立法院推动区块链连线暨产业自律联盟，由国民党、民进党、亲民党、时代力量等跨党派立委连署，于今（22）日成立，自律
                    联盟期望透过立法院各委员的力量，推动相关法规的建立和产业健全。大会现场嘉宾将近200人，除了立委及政府官员...
                </p>
                <div class="seeTotal">
                    <span><img src="../../assets/images/icon-time.png"/>2018-05-25 09:30</span>
                    <span><img src="../../assets/images/icon-eye.png"/>226</span>
                    
                </div>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        ind:'0',
        newlist: [],
        showArtDet:true,
    };
  },
  methods: {
    artDet(index){
        // window.localStorage.setItem('id', String(index))
        // console.log( window.localStorage.id)
      
      
      // this.$router.push({ path: '/industryInfor/articIndex/index',query:{id: window.localStorage.getItem('id')}})
       this.$router.push({ path: '/industryInfor/index',query:{id: 1}})
    //   this.ind=index
    },
   
   
  },
  created: function() {
    //  this.artDet(window.localStorage.getItem('id'));
    
  }
};
</script>
<style scoped>
.artOne{
    border-bottom:1px solid #263142;
    overflow:hidden;
    cursor: pointer;
}
.artOne>img{
    float:right;
    height:130px;
    margin:20px 0 0 10px;
}

.content{
    background: #1b222e;
    margin-bottom:106px;
    margin-left: 220px;
    background: #1b222e;
    padding: 0px 20px 20px;
    color: #ccd6eb;
   min-height:720px;
}
.content>h2{
    font-size: 22px;
    font-weight: normal;
    border-bottom: 1px solid #263142;
    padding: 20px 0px 10px 0px;
}
.artOne h3{
    margin:15px 0;
    font-size:16px;
}
.artOne p{
    font-size:14px;
    line-height: 2em;
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.seeTotal{
    margin-bottom:30px;
}
.seeTotal span{
    display: inline-block;
    line-height:18px;
    overflow: hidden;
    margin: 10px 15px 0px 0px;
}
.seeTotal span img{
    float: left;
    margin-top:2px;
    margin-right:5px;
}
</style>
