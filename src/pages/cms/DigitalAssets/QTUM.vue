<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc" >BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc">LTC</router-link></li>
            <li><router-link to="/digAssets/usdt">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="" class="active">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是量子链？</div>
           <p>Qtum Blockchain（简称“量子链”或“Qtum”）致力于开发比特币和以太坊之外的第三种区块链生态系统，通过价值传输协议（“Value Transfer Protocol”）来实现点对点的价值转
            移，并根据此协议，构建一个支持多个行业（包括金融、物联网、供应链、社交、游戏等）的去中心化的应用开发平台（“DApp Platform”）。通过合并改进版本的比特币核心基础架构和
            可以相互兼容的以太坊虚拟机版本，量子链既拥有比特币坚不可摧的区块链网络又能发挥智能合约的无限可能。</p>
            

           <div>2.QTUM的功能</div>
           <p>Dapp使用权/代币投票/社区自治/使用应用功能消耗/支付。</p>
            
            
           <div>3.详细参数</div>
           <p>代币总量：100,196,328 QTUM</p>
            <p>流通总量：73,696,328 QTUM</p>
            <p>ICO价格：0.38美元</p>


           
           <div> 4.常用链接</div>
           <p>官方网站：<a href="https://www.qtum.org/zh/" target="_black">https://www.qtum.org/zh/</a></p>
           <p>区块查询：<a href="https://www.qtum.org/zh/white-papers " target="_black">https://www.qtum.org/zh/white-papers</a></p>
       </div>
    </div>
</template>
<style scoped>
.digitalBox{
    color: #ccd6eb;
    padding: 0 10%;
    margin-bottom:106px;
}
.digitalBox h1{
    font-size: 22px;
    padding: 18px;
    background: #1b222e;
    margin: 20px 0px;
    font-weight: normal;
}
.numItem{
    padding:18px 18px 0;
    background: #1c324e;
}
.numItem li{
   
    margin-right:30px;
   display: inline-block;
}
.numItem li a{
    display: block;
    color:#5a7199;
    font-size:16px;
   padding-bottom:15px;
    background: #1c324e;
}
.numItem li a.active{
    color: #ccd6eb;
    border-bottom:4px solid #1855fd
}
.btc-intro{
    padding:0px 18px 40px;
    background: #1b222e;
}
.btc-intro p,.btc-intro>div{
    font-size:14px;
    letter-spacing: 1px;
    line-height: 2em;
}
.btc-intro>div{
    padding-top:40px;
}
</style>