<template>
 <div class="problem-container">
        <h1>{{$t("problem.faq")}}</h1>
        <h2>简单四步-快速交易指南 <router-link to="/problem" class="backListPro">< 返回问题列表</router-link></h2>
        <ul class="quesAnsBox">
            <li>
             1.注册：jiucaibtc快速、安全、便捷，<router-link to="/register">【注册】</router-link>支持手机或邮箱。
             </li>
            <li>
               2.安全验证：完成<router-link to="/uc/safe">【实名认证】</router-link>，设置<router-link to="/uc/safe">【资金密码】</router-link>，确保账户资金安全。
            </li>
            <li>3.开始充值：使用<router-link to="/finance">【资金管理】</router-link>，加入交易资金。</li>
            <li>4.开始交易：点击<router-link to="/exchange">【币币交易】</router-link>，或点击<router-link to="/otc/trade/usdt">【法币交易】</router-link>进行交易。</li>
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
     overflow: hidden;
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
