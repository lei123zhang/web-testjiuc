<template>
    <div class="nav-right">
        <div class="nav-right col-xs-12 col-md-10 padding-right-clear">
            <div class="bill_box rightarea padding-right-clear record">
                <section class="trade-group merchant-top">
                    <i class="merchant-icon tips"></i>
                    <span class="tips-word">{{$t('common.deposit')}}</span>
                </section>
                <section>
                    <div class="table-inner action-box open">
                        <i class="angle" style="right: 71px;"></i>
                        <div class="action-inner">
                            <div class="inner-left">
                                <p class="describe">{{$t('common.coin')}}</p>
                                <Select :placeholder="$t('common.pleaseSelect')" v-model="coinType" style="width:100px;margin-top: 23px;" @on-change="changeCoin">
                                    <Option v-for="item in coinList" :value="item.coin.unit" :key="item.coin.unit">{{ item.coin.unit }}</Option>
                                </Select>
                            </div>
                            <div class="inner-box deposit-address">
                                <p class="describe">{{$t('finance.depositAddress')}}</p>
                                <div class="title">
                                    <Input v-model="qrcode.value" readonly style="width: 400px"/>
                                    <a v-clipboard:copy="qrcode.value" v-clipboard:success="onCopy" v-clipboard:error="onError" href="javascript:;" id="copyBtn" class="link-copy">{{$t('finance.copy')}}</a>
                                    <a id="showQRcode" class="link-qrcode" href="javascript:;" @click="showEwm"> {{$t('finance.ewm')}}
                                        <div v-show="isShowEwm" class="show-qrcode">
                                           <qriously style="background:#fff" :value="qrcode.value" :size="qrcode.size" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="action-content">
                            <div class="action-body">
                                <p class="acb-p1">{{$t('common.tips')}}</p>
                                <p class="acb-p2">• {{$t('finance.rechargeTip1')}}<br>• {{$t('finance.rechargeTip2')}}<br>• {{$t('finance.rechargeTip3')}}<br>• {{$t('finance.rechargeTip4')}}<br>• {{$t('finance.rechargeTip5')}}</p>
                            </div>
                        </div>
                        <div class="action-content">
                            <div class="action-body">
                                <p class="acb-p1">{{$t('finance.rechargeRecord')}}</p>
                                <div class="order-table">
                                    <Table stripe :columns="tableColumnsRecharge" :data="tableRecharge" :loading="loading"></Table>
                                    <div style="margin: 10px;overflow: hidden">
                                        <div style="float: right;">
                                            <Page :total="dataCount" :current="1" @on-change="changePage"></Page>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

export default {
    components: {
        VueQriously
    },
    data() {
        return {
            isShowEwm: false,
            dataCount: 0,
            loading: true,
            qrcode: {
                value: '',
                size: 200,
            },
            coinType: '',
            coinList: [
            ],
            tableRecharge: [],
        }
    },
    methods: {
        changePage(index) {
            this.getList(index, 10, 0)
        },
        showEwm() {
            this.isShowEwm = !this.isShowEwm;
        },
        onCopy(e) {
            this.$Message.success(this.$t('finance.copySuccess')+'！' + e.text);
        },
        onError(e) {
            this.$Message.error(this.$t('finance.copyFail'));
        },
        changeCoin(value) {
            for (var i = 0; i < this.coinList.length; i++) {
                if ((this.coinList[i].coin.unit == value)) {
                    this.qrcode.value = this.coinList[i].address;
                }
            }
        },
        getMoney() {
            //获取
            this.$http.post(this.host + this.api.uc.wallet).then(response => {
                var resp = response.body;
                // console.log(resp);
                if (resp.code == 0) {
                    for (let i = 0; i < resp.data.length; i++) {
                        var coin = resp.data[i];
                        if(coin.coin.canRecharge == 1){
                            this.coinList.push(coin);
                        }
                    }
                    this.changeCoin(this.coinType)
                } else {
                    this.$Message.error(resp.message);
                }
            })
        },
        getList(pageNo, pageSize, type) {
            //获取tableRecharge
            let params = {}
            params['pageNo'] = pageNo
            params['pageSize'] = pageSize
            params['type'] = type;
            this.$http.post(this.host + '/uc/asset/transaction', params).then(response => {
                var resp = response.body;
                // console.log(resp)
                if (resp.content) {
                    this.tableRecharge = resp.content
                    this.dataCount = resp.totalElements
                    this.loading = false
                }else {
                    this.$Message.error(resp.message);
                }
            })
        },

    },
    created() {
        this.coinType = this.$route.query.name
        this.getMoney()
        this.getList(0, 10, 0)
    },
    computed: {
        tableColumnsRecharge() {
            let columns = [];
            columns.push({
                title: this.$t('finance.createTime'),
                key: 'createTime',
            });
            columns.push({
                title: this.$t('common.coin'),
                key: 'symbol',
            });
            columns.push({
                title: this.$t('finance.rechargeAddress'),
                key: 'address',
            });
            columns.push({
                title: this.$t('finance.rechargeAmount'),
                key: 'amount',
            });
            return columns;
        }
    }
}
</script>
<style scoped>
.table-inner {
    position: relative;
    text-align: left;
    border-radius: 3px;
    padding: 23px 20px 20px;
}

.acb-p1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 50px;
}

.acb-p2 {
    font-size: 14px;
    line-height: 24px;
}

.action-inner {
    width: 100%;
    display: table;
}

.action-inner .inner-box {
    display: table-cell;
    width: 100%;
}

.action-box .title .copy {
    user-select: text;
}

.action-box .title a.link-copy {
    font-size: 14px;
    margin-left: 20px;
}

.hb-night a {
    text-decoration: none;
    color: #7A98F7;
    transition: all .2s ease-in-out;
    cursor: pointer;
}

.action-box .title a.link-qrcode {
    margin-left: 20px;
    font-size: 14px;
    position: relative;
}

.hb-night a {
    text-decoration: none;
    color: #7A98F7;
    transition: all .2s ease-in-out;
    cursor: pointer;
}

.action-box .subtitle {
    font-size: 12px;
    margin-top: 30px;
}

.action-content {
    width: 100%;
    margin-top: 30px;
    overflow: hidden;
    display: table;
}

.action-box .title {
    margin-top: 20px;
    font-size: 20px;
    user-select: none;
}

.action-box .title .show-qrcode {
    position: absolute;
    top: -100px;
    left: 40px;
    padding: 10px;
}

.action-inner .inner-box.deposit-address {
    width: 80%;
}

p.describe {
    font-size: 16px;
    font-weight: 600;
}

.merchant-top {
    height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    padding: 0 15px;
    color: #0d214e;
}

.trade-group {
    margin-bottom: 20px;
    font-size: 14px;
}

.merchant-icon {
    display: inline-block;
    margin-left: 4px;
    background-size: 100% 100%;
}

.merchant-top .tips-word {
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    text-align: left;
}

.merchant-icon.tips {
    width: 4px;
    height: 22px;
    margin-right: 10px;
    background: #1755FD;
}

.bill_box {
    width: 100%;
    height: auto;
    overflow: hidden;
}

.rightarea {
    background: #fff;
    padding-left: 15px !important;
    padding-right: 15px !important;
    margin-bottom: 60px !important;
}

.rightarea .rightarea-top {
    line-height: 75px;
    border-bottom: #f1f1f1 solid 1px;
}

.rightarea .rightarea-con {
    padding-top: 30px;
    padding-bottom: 125px;
}

.rightarea .trade-process {
    line-height: 30px;
    padding: 0 15px;
    background: #f1f1f1;
    display: inline-block;
    position: relative;
    margin-right: 20px;
}

.rightarea .trade-process.active {
    color: #eb6f6c;
    background: #f9f5eb;
}

.rightarea .trade-process .icon {
    background: #fff;
    border-radius: 20px;
    height: 20px;
    width: 20px;
    display: inline-block;
    line-height: 20px;
    text-align: center;
    margin-right: 10px;
}

.rightarea .trade-process .arrow {
    position: absolute;
    top: 10px;
    right: -5px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #f1f1f1;
}

.rightarea .trade-process.active .arrow {
    border-left: 5px solid #f9f5eb;
}

.rightarea .rightarea-tabs {
    border: none;
}

.rightarea .rightarea-tabs li>a {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-right: 0;
    font-size: 14px;
    color: #646464;
    border-radius: 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rightarea .rightarea-tabs li>a:hover {
    background-color: #fcfbfb;
}

.rightarea .rightarea-tabs li {
    width: 125px;
    height: 40px;
    position: relative;
    margin: -1px 0 0 -1px;
    border: 1px solid #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.rightarea .rightarea-tabs li.active {
    background-color: #fcfbfb;
}

.rightarea .rightarea-tabs li:last-child {
    border-right: 1px solid #f1f1f1;
}

.rightarea .rightarea-tabs li.active>a,
.rightarea .rightarea-tabs li:hover>a {
    color: #da2e22;
    border: none;
}

.rightarea .panel-tips {
    border: 3px solid #fdfaf3;
    color: #9e9e9e;
    font-size: 12px;
}

.rightarea .panel-tips .panel-header {
    background: #fdfaf3;
    line-height: 40px;
    margin-bottom: 15px;
}

.rightarea .panel-tips .panel-title {
    font-size: 16px;
}

.rightarea .recordtitle {
    cursor: pointer;
}

.nav-right {
    width: 1000px;
    height: auto;
    overflow: hidden;
    padding: 0 15px;
}

.order_box {
    width: 100%;
    background: #fff;
    height: 56px;
    line-height: 56px;
    margin-bottom: 20px;
    border-bottom: 2px solid #ccf2ff;
    position: relative;
    text-align: left;
}

.order_box a {
    color: #8994A3;
    font-size: 16px;
    padding: 0 30px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 54px;
    display: inline-block;
}

.order_box .active {
    border-bottom: 2px solid #00b5f6;
}

.order_box .search {
    position: absolute;
    width: 300px;
    height: 32px;
    top: 12px;
    right: 0;
    display: flex;
    /* border: #c5cdd7 solid 1px; */
}
</style>
