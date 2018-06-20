<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc" >BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc" >LTC</router-link></li>
            <li><router-link to="/digAssets/usdt">USDT</router-link></li>
            <li><router-link to="/digAssets/bch">BCH</router-link></li>
            <li><router-link to="" class="active">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是以太经典？</div>
           <p>ETC（Ethereum Classic）是以太坊在1,920,000个块后硬分叉出的分叉币种，功能和以太坊极为类似。ETC秉承去中心化理念，支持区块链保证的共识机制。ETC坚信，区块链一旦开
            始运行，它的发展方向就不被任何中心团队所左右，而是按照参与整个网络人员的共识和全网算力的共识所决定。</p>
            <p>2016年7月份进行的以太坊区块链硬分叉旨在将被黑客盗窃的The DAO资金转移到一个由投资者掌控的账户，并让旧的交易记录被历史遗忘。大多数以太坊开发者都参与了这次
            逆转，交易所、创业公司和该生态系统中的其他成员也参与了。几天之后，该项目恢复了常态。但是并非所有人都想将旧的交易记录忘记。于是一小部分矿工继续使用原来的区块链，
            以此作为一种抗议，他们将硬分叉描述为是对The DAO这个废弃项目的抽资行为。于是Ethereum Classic(ETC)就诞生了。</p>

           <div>2.详细参数</div>
            <p>中文名：以太经典             英文名：Ethereum Classic         英文简称：ETC</p>
            <p>研发者：以太经典团队      核心算法：Ethash                     共识证明：POW</p>
            <p>发布日期：2016/7/20       区块时间：约15-17秒/块  </p>
            <p>货币总量：固定为2.1亿，最高不超过2.3亿，每500万个区块减速20%，第一次减产时间预计为2017年12月</p>
            <p>主要特色：独立的加密货币</p>
            
            
         

           <div> 3.常用链接</div>
           <p>官方网站：<a href="https://ethereumclassic.github.io/" target="_black">https://ethereumclassic.github.io/</a></p>
           <p>区块查询：<a href="https://gastracker.io/" target="_black">https://gastracker.io/</a></p>
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