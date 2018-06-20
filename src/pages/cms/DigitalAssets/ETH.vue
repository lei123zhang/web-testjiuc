<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc">BTC</router-link></li>
            <li><router-link to="" class="active">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc">LTC</router-link></li>
            <li><router-link to="/digAssets/usdt">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是以太坊？</div>
           <p>以太坊（Ethereum）是下一代密码学账本，可以支持众多的高级功能，包括用户发行货币，智能协议，去中心化的交易和设立去中心化自治组织(DAOs)或去中心化自治公司（DACs）。
            以太坊并不是把每一单个类型的功能作为特性来特别支持，相反，以太坊包括一个内置的图灵完备的脚本语言，允许通过被称为“合同”的机制来为自己想实现的特性写代码。一个
            合同就像一个自动的代理，每当接收到一笔交易，合同就会运行特定的一段代码，这段代码能修改合同内部的数据存储或者发送交易。高级的合同甚至能修改自身的代码。   
            通俗一点说，以太坊是开源平台数字货币和区块链平台，它为开发者提供在区块链上搭建和发布应用的平台。以太坊可以用来编程、分散、担保和交易任何事物，投票、域名、金融交
            易所，众筹、公司管理、合同和大部分的协议、知识产权，还有得益于硬件集成的智能资产。</p>
            <p>2017年2月28日，一批代表着石油、天然气行业，金融行业和软件开发公司的全球性企业正式推出企业以太坊联盟（EEA），致力于将以太坊开发成企业级区块链。这些企业包括英国
            石油巨头BP、摩根大通、软件开发商微软、埃森哲、桑坦德银行、BlockApps、BNY梅隆、芝商所、ConsenSys、英特尔微软和Nuco等。许多企业或组织开发基于以太坊区块链的项目，
            并发行代币。联合国世界粮食计划署成功使用以太坊区块链向10000难民提供救助。</p>

          
            <div>2.详细参数</div>
           <p>中文名：以太坊      英文名：Ethereum    英文简称：ETH</p>
           <p>研发者：Vitalik Buterin         核心算法：Ethash         发布日期：2015/3/20</p>
           <p>区块时间：约15-17秒/块        区块奖励：5                    货币总量：7200万+1872万/年</p>
           <p>主要特色：含数字货币和智能合约等特色功能</p>
           

           <div> 3.常用链接</div>
           <p>官方网站：<a href="https://www.ethereum.org/" target="_black">https://www.ethereum.org/</a></p>
           <p>区块查询：<a href="https://etherscan.io/" target="_black">https://etherscan.io/</a></p>
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