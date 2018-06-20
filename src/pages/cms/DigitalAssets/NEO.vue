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
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="" class="active">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>一、项目名称</div>
           <p>NEO</p>

           <div>二、项目定位</div>
           <p>一种智能经济分布式网络</p>
            
            
           <div>三、项目简评</div>
           <p>NEO基于区块链技术，将现实中的资产转化为数字资产，通过智能合约实现智能管理，用户选定数字证书认证机构实现身份认证。NEO用于实现对 NEO 网络的管理权。NEO是国内外社群热度比较高的公链项目之一。</p>

            <div> 四、项目进展</div>
            <p>2014年6月，NEO正式立项，接受种子轮投资； </p>
            <p>2015年10月，完成第一轮ICO；</p>
            <p>2016年8月，完成第二轮ICO；</p>
            <p>2016年10月，NEO主网上线，区块链浏览器上线；</p>
            <p>2016年11月，发布Antshares VM轻量级通用型区块链虚拟机白皮书；</p>
            <p>2017年6月，更名NEO品牌升级，专注智能经济发展。</p>

            <div> 五、项目特点</div>
           <p>1. NEO海内外社区活跃，目前社区技术人员达到200人以上。</p>
           <p>2. 技术文档已经上线，项目核心技术兑现，超导交易机制、跨链互操作协议等逐步落地。</p>
           <p>3. NEO做数字资产登记流通交易智能平台，使用范围更广，提供多种技术支持和插件，开发便捷。</p>

            <div> 六、项目团队</div>
            <p>创始人：达鸿飞，华南理工大学毕业，2011年接触比特币，持续研究区块链，Onchain（分布科技）CEO，NEO创始人。</p>
            <p>创始人：张铮文，拥有信息安全的经验，后来接触区块链技术，加入NEO。</p>

            <div> 七、ICO进度</div>
            <p>NEO有两轮ICO</p>
            <p>1. ICO时间：2015/10/20 - 2015/10/31</p>
            <p>ICO成本：0.25元/枚</p>
            <p>CO进度：100%完成</p>
            <p>2. ICO时间：2016/8/8 - 2016/9/8</p>
            <p>ICO成本：1.1元/枚</p>
            <p>ICO进度：100%完成</p>

            <div>八、项目顾问</div>
            <p>暂无</p>

            <div> 九、Token概况</div>
            <p>项目代币：1亿</p>
            <p>ICO比例：50%</p>
            <p>社区激励：10%</p>
            <p>团队激励：10%</p>
            <p>交叉投资：15%</p>
            <p>其他：15%</p>
            <p>代币定价：0.25-1.1元/枚</p>

            <div> 十、项目融资与估值</div>
            <p>ICO融资：1期融资为2100BTC；2期融资为6119BTC</p>
            <p>代币流通量：6500万</p>

            <div> 十一、代币产生与使用</div>
            <p>代币产生：ICO发售</p>
            <p>代币功能：NEO 管理代币的持有人是 NEO 网络的所有者和管理者，通过在 NEO 网络上构造投票交易来实现管理权，通过获得 NEO 管理代币所对应的 GAS 燃料代币来实现 NEO 网络的使用权。</p>
           

           <div> 十二、常用链接</div>
           <p>官方网站：<a href="https://neo.org" target="_black">https://neo.org</a></p>
           <p>白皮书：<a href="http://docs.neo.org/zh-cn/" target="_black">http://docs.neo.org/zh-cn/</a></p>

            <div>十三、币种所在分区 </div>
            <p>创新区</p>
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