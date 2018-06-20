<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc" >BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc" >LTC</router-link></li>
            <li><router-link to="/digAssets/usdt">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="" class="active">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是EOS？</div>
           <p>EOS (Enterprise Operation System)是由 Block.one公司主导开发的一种全新的基于区块链智能合约平台，旨在为高性能分布式应用提供底层区块链平台服务。EOS 项目的目标
            是实现一个类似操作系统的支撑分布式应用程序的区块链架构。该架构可以提供账户，身份认证，数据库，异步通信以及可在数以万计的 CPU/GPU群集上进行程序调度和并行运
            算。EOS最终可以支持每秒执行数百万个交易，同时普通用户执行智能合约无需支付使用费用。</p>
           

           <div>2.EOS的功能</div>
            <p>EOS代币目前是EOS区块链基础设施发布的基于以太坊的代币，主要有三大应用场景：带宽和日志存储(硬盘)，计算和计算储备(CPU)，状态存储(RAM)。EOS主网上线后会将
            ERC20代币EOS转换为其主链上的代币。具体可解释为：</p>
            <p>（1）接收方支付：客户从该业务中购买特定产品，而这些产品的销售收入将用于支付业务成本，避免客户直接为使用区块链支付费用，也不会限制或阻止企业确定其产品的货
            币化策略.</p>
            <p>（2）授权能力：如果一个区块链是基于 EOS 软件系统开发，而其代币是由一个代币持有者所持有，他可能不需要立即消耗全部或部分可用带宽，这样的代币持有者可以选择将
            未消耗的带宽给予或租给他人。</p>
            <p>（3）将交易成本与代币价值分开：如果应用程序所有者持有相应数量的代币，那么应用程序可以在固定的状态和带宽使用中持续运行。开发人员和用户不会受到代币市场价格
            波动的影响，因此不会依赖于价格。</p>
            <p>（4）区块奖励：每次生成一个区块时，EOS都会奖励该区块生产者新的代币用于支付其运维成本。目前EOS设定限制了区块生产者所得奖励上限，目前EOS设定给予区块生产者
            的奖励上限为每年最多5%，即代币新增供应的年总增长不超过5%。</p>
            
            
         

           <div> 3.常用链接</div>
           <p>官方网站：<a href="https://eos.io/" target="_black">https://eos.io/</a></p>
           <p>白皮书：<a target="_black" href="https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md#support-millions-of-users">https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md#support-millions-of-users</a></p>
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