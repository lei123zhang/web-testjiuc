<template>
 <div class="problem-container">
        <h1>{{$t("problem.faq")}}</h1>
        <h2>如何提币<router-link to="/problem" class="backListPro">< 返回问题列表</router-link></h2>
        <ul class="quesAnsBox">
            <li>
              登录平台后，点击上方<router-link to="/finance">【资金管理】→【提现】</router-link>，即可看到提现页面，依据提币需求点击币种，输入数字资产提现信息即完成申请。</li>
            <li>
                <img src="../../../assets/images/problem_bg_2.jpg"/>
            </li>
        </ul>
    </div>
</template>


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
      margin-bottom:15px;
  }
  
</style>
