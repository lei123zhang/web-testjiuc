<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="" class="active">BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc">LTC</router-link></li>
            <li><router-link to="/digAssets/usdt">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是比特币？</div>
           <p>比特币（Bitcoin，简称BTC）是目前使用最为广泛的一种数字货币，它诞生于2009年1月3日，是一种点对点（P2P）传输的数字加密货币，总量2100万枚。比特币网络每10分钟释放出
            一定数量币，预计在2140年达到极限。比特币被投资者称为“数字黄金”。比特币依据特定算法，通过大量的计算产生，不依靠特定货币机构发行，其使用整个P2P网络中众多节点构
            成的分布式数据库来确认并记录所有的交易行为，并使用密码学设计确保货币流通各个环节安全性，可确保无法通过大量制造比特币来人为操控币值。基于密码学的设计可以使比
            特币只能被真实拥有者转移、支付及兑现。同样确保了货币所有权与流通交易的匿名性。
            比特币因去中心化、全球流通、低交易费用 、匿名流通等特点，备受科技爱好者青睐。近来华尔街、多国央行等传统金融机构开始研究比特币区块链技术，日本政府正式承认比特币
            为法定支付方式，越来越多的日本商家接受了比特币支付。</p>

           <div>2.比特币的优势是什么？</div>
           <p>支付自由 - 无论何时何地都可以即时支付和接收任何数额的资金。无银行假日，无国界，无强加限制。比特币允许其用户完全控制他们的资金。
            极低的费用 - 目前对比特币支付的处理不收取手续费或者仅收取极少的手续费。用户可以把手续费包含在交易中来获得处理优先权，更快收到由网络发来的交易确认。另外，也有商
            家处理器协助商家处理交易，每天将比特币兑换成法定货币并直接将资金存入商家的银行账户。因为这些服务都基于比特币，所以它们可以提供远低于PayPal或信用卡网络的手续
            费。</p>
            <p>降低商家的风险 - 比特币交易是安全，不可撤销的，并且不包含顾客的敏感或个人信息。这避免了由于欺诈或欺诈性退单给商家造成的损失，而且也没有必要遵守PCI标准。在信用卡
            无法使用或欺诈率高得令人无法接受的地方，商家也可以很容易地扩展新的市场。最终结果是更低的费用，更大的市场，和更少的行政成本。
            安全和控制 - 比特币的用户完全控制自己的交易；商家不可能强制收取那些在其它支付方式中可能发生的不该有或不易发现的费用。用比特币付款可以无须在交易中绑定个人信
            息，这提供了对身份盗用的极大的防范。比特币的用户还可以通过备份和加密保护自己的资金。
            透明和中立 - 关于比特币资金供给本身的所有信息都存储在块链中，任何人都可以实时检验和使用。没有个人或组织能控制或操纵比特币协议，因为它是密码保护的。这使得比特
            币核心被相信是完全中立，透明以及可预测的。</p>
            
           <div>3.比特币的缺点是什么？</div>
           <p>接受程度 - 仍然有很多人不知道比特币。每天有更多的企业接受比特币，因为他们希望从中受益，但这个列表依然很小，为了从网络效应中获益，仍然需要有更多的企业支持比特币。
            波动性 - 流通中的比特币总价值和使用比特币的企业数量与他们可能的规模相比仍然非常小。因此，相对较小的事件，交易或业务活动都可以显著地影响其价格。从理论上讲，随着
            比特币的市场和技术的成熟，这种波动将会减少。这个世界以前从未出现过任何一个新兴货币，所以想象它将如何进展真的非常困难 (同时也令人兴奋)。
            处于发展阶段 - 比特币软件依然处于beta版本，许多未完成的功能处于积极研发阶段。新的工具，特性和服务正在研发中以使比特币更为安全，为更多大众所使用。其中有一些功能
            目前还不是每个用户都能使用。大部分比特币业务都是新兴的，尚不提供保险。总体来说，比特币尚处于成熟的过程当中。</p>

            <div> 4.详细参数</div>
           <p>中文名：比特币          英文名：Bitcoin     英文简称：BTC</p>
           <p>研发者：Satoshi Nakamoto   核心算法：SHA-256    发布日期：2009/01/03</p>
           <p>总量：2100万           区块时间：约600秒/块  共识证明：POW</p>
           <p>区块奖励：当前12.5BTC/区块（每产出21万个区块/约每四年减半一次，最近一次减半时间：2016年7月9日）</p>
           <p>风险：扩容之争，存在潜在的分叉风险</p>
           <p>货币单位：BTC/XBT</p>
           <p>1       比特币（Bitcoins，BTC）</p>
           <p>10−2      比特分（Bitcent，cBTC）</p>
           <p>10−3      毫比特（Milli-Bitcoins，mBTC）</p>
           <p>0−6      微比（Micro-Bitcoins，μBTC）</p>
           <p>10−8     聪（Satoshi）</p>

           <div> 5.常用链接</div>
           <p>官方网站：<a href="https://bitcoin.org/zh_CN/" target="_black">https://bitcoin.org/zh_CN/</a></p>
           <p>比特币常见问题：<a href="https://bitcoin.org/zh_CN/faq" target="_black">https://bitcoin.org/zh_CN/faq</a></p>
           <p>区块查询：<a href="https://blockchain.info/" target="_black">https://blockchain.info/</a></p>
            <p>比特币论坛：<a href="https://bitcointalk.org/" target="_black">https://bitcointalk.org/</a></p>
           <p>市值查询网站：<a href="https://coinmarketcap.com/" target="_black">https://coinmarketcap.com/</a></p>
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