<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc" >BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="" class="active">LTC</router-link></li>
            <li><router-link to="/digAssets/usdt">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是LTC(莱特币)？</div>
           <p>莱特币诞生于2011年11月9日，被称为是“数字白银”。莱特币在技术上和比特币具有相同的实现原理。它是第一个基于Scrypt算法的网络数字货币，与比特币相比，莱特币拥有更快
            的交易确认时间，更高的网络交易容量和效率。莱特币现在拥有完整的产业链，充分的流动性，足以证明其是成熟、安全、稳定的商用金融系统。</p>

           <div>2.数据块链</div>
           <p>莱特币数据块链与其竞争者——比特币相比起来，能够处理更大的交易量。由于数据块的产出更加频繁，该网络可以支持更多的交易，并且在将来无需修改软件。 
            因此，商家可以获得更快的交易确认，而且在销售大额商品时依然能够等待更多的交易确认。</p>
            
            
           <div>3.钱包加密</div>
           <p>钱包加密能够保证您钱包中私钥的安全，从而让您可以查看交易情况及账户余额，但是在您使用莱特币之前必须输入密码。该功能不仅能够防止病毒及木马的侵扰，同时还是支付
            之前，一项合法性的有效检查。</p>

            <div>4.挖矿奖励</div>
            <p>“矿工们”目前每数据块可以产出25个莱特币。每4年，生产的莱特币货币量将减少一半(每经过840000个数据块)。 </p>
            <p>因此，莱特币网络生产的货币总量将是比特币的4倍，即8400万个莱特币。</p>
            <p>莱特币的创造和转让基于一种开源的加密协议，不受任何中央机构的管理。莱特币旨在改比特币，与其相比，莱特币具有三种显著差异：</p>
            <p>（1）莱特币网络每2.5分钟（而不是10分钟）就可以处理一个块，因此可以提供更快的交易确认。</p>
            <p>（2）莱特币网络预期产出8400万个，是比特币网络发行货币量的四倍之多。</p>
            <p>（3）莱特币在其工作量证明算法中使用了由Colin Percival首次提出的scrypt加密算法。</p>
            <p>2017年4 月，莱特币社区经过投票达成协议，决定通过隔离验证软分叉对其区块链进行升级。同年6月，莱特币闪电网络正式上线。</p>

            <div>5.详细参数</div>
           <p>中文名：莱特币             英文名：Litecoin            英文简称：LTC</p>
           <p>研发者：Charlie Lee     核心算法：Scrypt            发布日期：2011/10/7</p>
           <p>区块时间：150秒/块     发行总量：8400万           减半时间：4年</p>
           <p>共识证明：POW           难度调整：2016个区块     区块奖励：最初50LTC，当前25LTC</p>
           <p>主要特色：发行量大：发行量是比特币的4倍；交易快速：确认时间仅2.5分钟；隔离验证激活</p>
           <p>不足之处：莱特币相关应用还较少</p>
           <p>风险：隔离验证激活后，网络漏洞的风险</p>

           <div> 6.常用链接</div>
           <p>官方网站：<a href="https://litecoin.org/" target="_black">https://litecoin.org/</a></p>
           <p>比特币常见问题：<a href="http://explorer.litecoin.net/" target="_black">http://explorer.litecoin.net/</a></p>
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