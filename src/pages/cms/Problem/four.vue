<template>
 <div class="problem-container">
        <h1>{{$t("problem.faq")}}</h1>
        <h2>其他常见问题<router-link to="/problem" class="backListPro">< 返回问题列表</router-link></h2>
        <ul class="quesAnsBox">
            <li v-for="(item,index) in obj" :key="index">
                <div class="ques">
                    <img src="../../../assets/images/ques.png"/>
                    <span>{{item.ques}}</span>
                </div>
                <div class="ans">
                    <img src="../../../assets/images/ans.png"/>
                    <span>{{item.ans}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "Details",
  data() {
    return {
      key:0,
      obj:[
          {
            id:'0',
            ques:'充币大概多久到账',
            ans:'一般需要30分钟左右！（转入是自动的，BTC转账需要整个网络进行确认，达到2个确认后您的BTC会自动充值到您的账户中）',
          },
           {
            id:'1',
            ques:'钱包地址是否是唯一的？',
            ans:'此地址是您的唯一且独自使用的转入地址，您可以同时进行多次充值',
          },
           {
            id:'2',
            ques:'提币大概多久到账？',
            ans:' 一般6个小时内到账，请您耐心等待',
          }
      ],
   
    };
  },
  
  }

</script>
<style scoped>
.problem-container{
    color:#ccd6eb;
    padding:0 10%;
 }
 .problem-container h1{
    font-size:22px;
    padding:18px;
    background:#1b222e;
    margin:20px 0px;
    font-weight: normal;
}
 .problem-container h2{
     font-size:16px;
     padding: 15px 18px;
     background: #254166;
 }
 .backListPro{
      font-size:12px;
      float: right;
      margin-top: 5px;
  }
  .quesAnsBox {
      padding:18px;
      background:#1b222e;
      margin-bottom: 106px;
  }
  .quesAnsBox li{
      font-size:14px;
      overflow: hidden;
  }
  .ques,.ans{
      line-height: 26px;
      margin-bottom:30px;
  }
  .quesAnsBox li img{
      margin-right:15px;
      float:left;
  }
</style>
