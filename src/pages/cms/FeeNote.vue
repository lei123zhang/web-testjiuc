<template>
  <div class="agreement">
    <!-- <div class="agreement_tab">
     
    </div> -->
    <div class="content">
      <h1>平台资费</h1>
      <div class="agreen-cont ">
        <div class="static_main">
          <router-link to="" class="cur">交易手续费</router-link>
          <router-link to="">VIP费率折扣</router-link>
        </div>
        <table class="table_s1 align_center">
          <!-- <colgroup data-filtered="filtered">
            <col style="width: 10%" data-filtered="filtered">
            <col style="width: 40%" data-filtered="filtered">
            <col style="width: 40%" data-filtered="filtered">
          </colgroup> -->
          <thead>

          <tr>
            <th class="table_slash">
              <!-- <span data-filtered="filtered"></span> -->
              交易对
            </th>
            <th>吃单</th>
            <th>挂单</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>BTC</td>
            <td>0.20%</td>
            <td>0.20%</td>
          </tr>
          <tr>
            <td>LTC</td>
            <td>0.20%</td>
            <td>0.20%</td>
          </tr>
          <tr>
            <td>BCC</td>
            <td>0.20%</td>
            <td>0.20%</td>
          </tr>
          <tr>
            <td>ETH</td>
            <td>0.20%</td>
            <td>0.20%</td>
          </tr>
          <tr>
            <td>ETC</td>
            <td>0.20%</td>
            <td>0.20%</td>
          </tr>
          </tbody>
        </table>

        
      </div>
    </div>
  </div>
</template>
<style scoped>
.agreen-cont {
  min-height:720px;
  background: #1b222e;
}
.agreement {
  background: #263142;
  padding:0 10%;
}

  /* .agreement_tab {
    height: 49px;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
  } */
  .static_main{
    background:#1c324e;
  }

  .static_main a {
    display:inline-block;
    padding:0 20px;
    color:#5a7199;
    font-size: 16px;
    line-height: 48px;
    position:relative;
  }
  .static_main a.cur{
     color: #ccd6eb;
  }
  .static_main a.cur:before{
    content:'';
    width:22px;
    height:4px;
   
    position:absolute;;
    left:50%;
    top:44px;
    margin-left:-11px;
    font-weight: bold;
    border-bottom: 2px solid #27abe2;
  }
  .content{
    color:#ccd6eb;
    margin-bottom:106px;
  }
  .content h1{
    font-size: 22px;
    padding: 18px;
    background: #1b222e;
    margin: 20px 0px;
    font-weight: normal;
  }
 
  .content table{
    width: 100%;
   background: #1b222e;
    border-spacing: 0;
    border-collapse: collapse;
    padding:20px;
    
  }
  .content table th{
     color:#5a7199;
  }.content table td{
    border-bottom: 1px solid #1c324e;
  }
   .content table th,
  .content table td{
    font-weight: normal;
    padding: 0 24px;
    line-height: 36px;
    text-align: center;
  }
   .content table th:first-child,
  .content table td:first-child{
    text-align:left;
  }
  .content table th:last-child,
  .content table td:last-child{
    text-align:right;
  }
</style>
