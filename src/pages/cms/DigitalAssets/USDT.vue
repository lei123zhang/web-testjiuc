<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc" >BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc">LTC</router-link></li>
            <li><router-link to="/" class="active">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是USDT</div>
           <p>USDT是Tether公司推出的基于稳定价值货币美元（USD）的代币Tether USD（下称USDT），1USDT=1美元，用户可以随时使用USDT与USD进行1:1兑换。Tether公司严格遵守1:1
            准备金保证，即每发行1个 USDT 代币，其银行账户都会有1美元的资金保障。用户可以在 Tether 平台进行资金查询，以保障透明度。用户可以通过SWIFT电汇美元至Tether公司
            提供的银行帐户，或通过交易所换取USDT。赎回美元时，反向操作即可。用户也可在交易所用比特币换取USDT。</p>
            <p>USDT是在比特币区块链上发布的基于Omni Layer协议的数字资产。USDT最大的特点是，它与同数量的美元是等值的。USDT被设计为法币在数字网络上的复制品，使之成为波
            动剧烈的加密货币市场中良好的保值代币。</p>

           <div>2.特点</div>
           <p>直观： USDT与美元是等值的，1USDT=1美元。每个币种=多少USDT，也就相当于是它的单价是多少美元。</p>
            
            
           <div>3.钱包加密</div>
           <p>钱包加密能够保证您钱包中私钥的安全，从而让您可以查看交易情况及账户余额，但是在您使用莱特币之前必须输入密码。该功能不仅能够防止病毒及木马的侵扰，同时还是支付
            之前，一项合法性的有效检查。</p>
            <p>稳定：因为泰达币是由法币支撑的，用户可以在不受多数区块链资产价格波动影响的情况下仍然在区块链资产市场上进行交易。</p>
            <p>透明： 泰达币的发行公司Tether 声称其法币储存账户有定期审计以确保市面流通的每一枚泰达币有对应的一美元为支撑。储存账户状态是公开的，可以随时查询到。此外，所有的泰达币交易记录都会公布在公链上。</p>
            <p>小额交易费用： 在Tether账户间交易或者在储存有泰达币的钱包间交易都不收手续费。将泰达币转换为法定货币时需要收取交易服务费。</p>


           
           <div> 4.常用链接</div>
           <p>官方网站：<a href="https://tether.to/" target="_black">https://tether.to/</a></p>
           <p>区块查询：<a href="https://www.omniexplorer.info/" target="_black">https://www.omniexplorer.info/ </a></p>
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