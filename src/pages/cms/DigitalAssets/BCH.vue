<template>
    <div class="digitalBox">
        <h1>数字资产</h1>
        <ul class="numItem">
            <li><router-link to="/digAssets/btc" >BTC</router-link></li>
            <li><router-link to="/digAssets/eth">ETH</router-link></li>
            <li><router-link to="/digAssets/ltc">LTC</router-link></li>
            <li><router-link to="/digAssets/usdt" >USDT</router-link></li>
            <li><router-link to="/" class="active">BCH</router-link></li>
            <li><router-link to="/digAssets/etc">ETC</router-link></li>
            <li><router-link to="/digAssets/eos">EOS</router-link></li>
            <li><router-link to="/digAssets/qtum">QTUM</router-link></li>
            <li><router-link to="/digAssets/neo">NEO</router-link></li>
           
        </ul>
       <div class="btc-intro">
           <div>1.什么是比特币现金？</div>
           <p>BCH是根据Bitcoin ABC方案产生的区块链资产。Bitcoin ABC方案为保持协议稳定简单，去除了Segwit功能，支持将区块大小提升至8M，是链上扩容的技术路线。Bitcoin ABC代码
            基于比特币协议的稳定版本进行了改进，其认为不包含Segwit将具有更大的稳定性、安全性、鲁棒性，是现行比特币协议和比特币系统的备份，自2017年8月1日21:16:14(GMT+8)，
            即区块高度478,558之后，BTC和BCH两条链已经正式分离成功。</p>
            <p>当前，比特币网络已无法支撑更多人使用比特币进行支付。比特币最初区块大小是32M，考虑到初期使用人数较少，为了避免计算资源浪费和保证比特币系统的安全运行，中本聪
            临时将区块大小限制为1M。但是，随着比特币交易的增多，交易确认异常缓慢，如果你不想长时间等待，就需要支付高额的交易费用。另外，其他数字货币如雨后春笋涌现，越来越
            多的人转向其它更便宜更好用的数字货币。这些问题使得比特币市场份额持续下降。</p>
            <p>解决比特币交易拥堵的方案有多种。SegWit、闪电网络是通过其它的一些方式使得每秒能容纳更多的交易。但是，这并没有直接扩大区块的大小。BitCoinABC （ABC代表的是
            adjustable blocksize cap）是中本聪比特币协议的一种实现，它沿用了比特币稳定版本的代码，并去除了SegWit相关代码，目的是打造一个简单的、区块大小可调节的比特币客
            户端。基于这一客户端挖出来的币就是BCH。</p>
            <p>BCH最早被设置为防范BIP148分裂比特币而进行硬分叉产生的代币。BCH延续了中本聪的思想，是比特币的影子，可以承担起比特币的测试、备份作用。所以，严格意义上讲，BCH
            不是在分裂比特币，只是一种防范比特币硬分叉的措施。</p>

           <div>2.详细参数</div>
           <p>中文名：比特币现金        英文名：Bitcoin Cash          英文简称：BCH</p>
           <p>核心算法：SHA-256        发布日期：2017/08/01        货币总量：2100万</p>
           <p>主要特色：区块大小最高支持8MB；EDA难度调整机制</p>
          
           
           <div> 3.常用链接</div>
           <p>官方网站：<a href="https://www.bitcoincash.org/" target="_black">https://www.bitcoincash.org/</a></p>
           <p>区块查询：<a href="http://blockdozer.com/insight/" target="_black">http://blockdozer.com/insight/</a></p>
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