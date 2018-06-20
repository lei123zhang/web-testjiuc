<template>
    <div class="exchange">
        <div class="sidebar">
            <div class="sc">
                {{$t('exchange.market')}}
            </div>
            <div class="sc_filter">
                <span class="active">USDT</span>
                <span>BTC</span>
                <span>ETH</span>
                
                <Icon style="line-height:32px;" type="android-star"></Icon>
            </div>
            <Table @on-current-change="gohref" highlight-row id="USDT" v-show="true" :columns="coins.columns" :data="coins.USDT"></Table>
            <Table @on-current-change="gohref" highlight-row id="BTC" v-show="false" :columns="coins.columns" :data="coins.BTC"></Table>
            <Table @on-current-change="gohref" highlight-row id="ETH" v-show="false" :columns="coins.columns" :data="coins.ETH"></Table>
            <Table @on-current-change="gohref" highlight-row no-data-text="暂无记录" id="collect" v-show="false" :columns="coins.columns" :data="coins.favor"></Table>
        </div>
        <div class="kline">
            <div class="mod_hd">
                <dl>
                    <dt>
                        {{currentCoin.symbol}}
                        <span>{{currentCoin.close}}</span>
                    </dt>
                    <dd>
                        <span>≈ {{currentCoin.close*6.5 | toFixed(2)}} CNY</span>
                    </dd>
                    <dd>
                        <span>{{$t('exchange.rose')}} <label :class="{buy:currentCoin.change>0,sell:currentCoin.change<0}">{{currentCoin.rose}}</label></span>
                    </dd>
                    <dd>
                        <span>{{$t('exchange.high')}} {{currentCoin.high}}</span>
                    </dd>
                    <dd>
                        <span>{{$t('exchange.low')}} {{currentCoin.low}}</span>
                    </dd>
                    <dd>
                        <span>24H{{$t('exchange.vol')}} {{currentCoin.turnover}} {{currentCoin.coin}}</span>
                    </dd>
                </dl>
            </div>
            <div id="kline_container">
            
            </div>
            <div class="trade_wrap">
                <div class="trade_panel trade_panel_logout" style="height:430px;">
                    <div class="trade_hd">
                        <div class="mod_tab">
                            <ul>
                                <li id="limited_price" @click="limited_price" class="active">{{$t('exchange.limited')}}</li>
                                <li id="market_price" @click="market_price">{{$t('exchange.marketed')}}</li>
                            </ul>
                        </div>
                        <div class="feesRate">
                            <a href="#/about-fee">{{$t('exchange.fees')}}</a>
                        </div>                    
                    </div>
                    <div class="trade_bd">
                        <div class="panel panel_buy">
                            <div v-if="isLogin" class="hd hd_login">
                                <span>{{$t('exchange.available')}}</span>
                                <b>{{wallet.base}}</b>
                                <span>{{currentCoin.base}}</span>
                                <a :href="rechargeUSDTUrl">{{$t('common.deposit')}}</a>
                            </div>
                            <div class="hd" v-else>
                                <router-link to="/login">{{$t('common.login')}}</router-link>
                                {{$t('common.or')}}<router-link to="/register">{{$t('common.register')}}</router-link>{{$t('exchange.toTrade')}}
                            </div>
                            <div class="bd bd_limited" v-show="!showMarket">
                                <Form ref="formValidate">
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.buyPrice')}}
                                    </p>
                                    <FormItem>
                                        <Input :maxlength='maxlength' @on-keyup="keyEvent" v-model="form.buy.limitPrice"/>
                                        <label>{{currentCoin.base}}</label>
                                        <p class="math_price">≈ {{form.buy.limitPrice*6.5|toFixed(2)}} CNY</p>
                                    </FormItem>
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.buyAmount')}}
                                    </p>
                                    <FormItem>
                                        <Input :maxlength='maxlength' @on-keyup="keyEvent" v-model="form.buy.limitAmount"/>
                                        <label>{{currentCoin.coin}}</label>
                                    </FormItem>
                                    <div class="total buy_total"> 
                                        {{$t('exchange.turnover')}} <span>{{form.buy.limitTurnover}}</span> {{currentCoin.base}}
                                    </div>
                                    <Button @click="buyWithLimitPrice" v-show="isLogin">{{$t('common.buy')}} {{currentCoin.coin}}</Button>
                                </Form>
                            </div>
                            <div class="bd bd_market" v-show="showMarket">
                                <Form ref="formValidate">
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.buyPrice')}}
                                    </p>
                                    <FormItem>
                                        <Input disabled :placeholder="$t('exchange.marketBuyTips')"/>
                                        <label>{{currentCoin.base}}</label>
                                    </FormItem>
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.turnover')}}
                                    </p>
                                    <FormItem>
                                        <Input :maxlength='maxlength' @on-keyup="keyEvent" v-model="form.buy.marketAmount"/>
                                        <label>{{currentCoin.base}}</label>
                                    </FormItem>
                                    <Button @click="buyWithMarketPrice" v-show="isLogin">{{$t('common.buy')}} {{currentCoin.coin}}</Button>
                                </Form>
                            </div>
                        </div>
                        <div class="panel panel_sell">
                            <div v-if="isLogin" class="hd hd_login">
                                <span>{{$t('exchange.available')}}</span>
                                <b>{{wallet.coin}}</b>
                                <span>{{currentCoin.coin}}</span>
                                <a :href="rechargeCoinUrl">{{$t('common.deposit')}}</a>
                            </div>
                            <div class="hd" v-else>
                                <router-link to="/login">{{$t('common.login')}}</router-link>
                                {{$t('common.or')}}<router-link to="/register">{{$t('common.register')}}</router-link>{{$t('exchange.toTrade')}}
                            </div>
                            <div class="bd bd_limited" v-show="!showMarket">
                                <Form ref="formValidate">
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.sellPrice')}}
                                    </p>
                                    <FormItem>
                                        <Input :maxlength='maxlength' @on-keyup="keyEvent" v-model="form.sell.limitPrice"/>
                                        <label>{{currentCoin.base}}</label>
                                        <p class="math_price">≈ {{form.sell.limitPrice*6.5|toFixed(2)}} CNY</p>
                                    </FormItem>
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.sellAmount')}}
                                    </p>
                                    <FormItem>
                                        <Input :maxlength='maxlength' @on-keyup="keyEvent" v-model="form.sell.limitAmount"/>
                                        <label>{{currentCoin.coin}}</label>
                                    </FormItem>
                                    <div class="total sell_total"> 
                                        {{$t('exchange.turnover')}} <span>{{form.sell.limitTurnover}}</span> {{currentCoin.base}}
                                    </div>
                                    <Button @click="sellLimitPrice" v-show="isLogin">{{$t('common.sell')}} {{currentCoin.coin}}</Button>
                                </Form>
                            </div>
                            <div class="bd bd_market" v-show="showMarket">
                                <Form ref="formValidate">
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.sellPrice')}}
                                    </p>
                                    <FormItem>
                                        <Input disabled :placeholder="$t('exchange.marketSellTips')"/>
                                        <label>{{currentCoin.base}}</label>
                                    </FormItem>
                                    <p style="font-size:10px;color:#61688A;">
                                        {{$t('exchange.sellAmount')}}
                                    </p>
                                    <FormItem>
                                        <Input :maxlength='maxlength' @on-keyup="keyEvent" v-model="form.sell.marketAmount"/>
                                        <label>{{currentCoin.coin}}</label>
                                    </FormItem>
                                    <Button @click="sellMarketPrice" v-show="isLogin">{{$t('common.sell')}} {{currentCoin.coin}}</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order_book" style="height:430px;">
                    <div class="order_book_hd">
                        {{$t('exchange.lastPrice')}}&nbsp;&nbsp;{{currentCoin.price}}
                    </div>
                    <Table :height="203" @on-current-change="buyPlate" highlight-row ref="currentRowTable" class="sell_table" :columns="plate.columns" :data="plate.askRows"></Table>
                    <Table :height="178" @on-current-change="sellPlate" highlight-row class="buy_table" :columns="plate.columns" :data="plate.bidRows" ></Table>
                </div>
            </div>
            <div class="open_orders" v-show="isLogin">
                <Tabs>
                    <TabPane :label="$t('exchange.currentOrder')">
                        <Table height="295" :columns="currentOrder.columns" :data="currentOrder.rows"></Table>
                    </TabPane>
                    <TabPane :label="$t('exchange.historyOrder')">
                        <Table :height="fixHistoryHeight" :columns="historyOrder.columns" :data="historyOrder.rows"></Table>
                        <div style="float: right;margin-top:15px;">
                            <Page v-if="historyOrder.rows.length>0" :total="historyOrder.total" :page-size="historyOrder.pageSize" :current="historyOrder.page" size="small" @on-change="getHistoryOrder"></Page>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
            <div class="deal_record">
                <div class="deal_record_hd">
                    {{$t('exchange.realtimeTrade')}}
                </div>
                <Table height="305" :columns="trade.columns" :data="trade.rows"></Table>
            </div>
        </div>
    </div>
</template>
<style>
   @import url(../../assets/css/exchange.css);
</style>
<script>
import expandRow from '@components/exchange/expand.vue';
import Datafeeds from '@js/charting_library/datafeed/bitrade.js';
var Stomp = require('stompjs');
var SockJS = require('sockjs-client');
var moment = require('moment');

// require.ensure([],function(require){
//   require('jquery');
// });

export default {
    components: { expandRow },
    data () {
        let self = this;
        return {
            CNYRate:null,
            datafeed:null,
            defaultPath:'btc_usdt',
            coinScale:4,
            baseCoinScale:2,
            currentCoin:{
                symbol:''
            },
            //当前市场上的交易币种，按交易对分
            coins:{
                _map:[],
                USDT:[],
                BTC:[],
                ETH:[],
                favor:[],
                columns: [
                    {
                        title: this.$t('common.coin'),
                        key: 'coin',
                        sortable:false
                    },
                    {
                        title: this.$t('exchange.lastPrice'),
                        key: 'close',
                        sortable:true,
                        sortMethod:function(a,b,type){
                            let a1=parseFloat(a);
                            let b1=parseFloat(b);
                            if(type=='asc'){
                                return a1-b1
                            }else{
                                return b1-a1
                            }
                        }
                    },
                    {
                        title: this.$t('exchange.rose'),
                        key: 'rose',
                        sortable:true,
                        sortMethod:function(a,b,type){
                            let a1=a.replace(/[^\d|.|-]/g, '') - 0
                            let b1=b.replace(/[^\d|.|-]/g, '') - 0
                            if(type=='asc'){
                                return a1-b1
                            }else{
                                return b1-a1
                            }
                        },
                        render: (h,params) => {
                            const row=params.row;
                            const className=parseFloat(row.rose)<0?'sell':'buy';
                            return h('span',{   
                                attrs:{
                                class:className
                                }
                            },row.rose)  
                        }
                    },
                    {
                        title: this.$t('exchange.collect'),
                        key: 'collection',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type:params.row.isFavor?'android-star':'android-star-outline'
                                    },
                                    nativeOn: {
                                        click: () => {
                                            if(this.isLogin){
                                                event.stopPropagation();//阻止事件冒泡
                                                if(event.currentTarget.className=='ivu-icon ivu-icon-android-star'){
                                                    this.cancelCollect(params.index,params.row);
                                                    event.currentTarget.className=='ivu-icon ivu-icon-android-star-outline';
                                                }else{
                                                    this.collect(params.index,params.row);
                                                    event.currentTarget.className='ivu-icon ivu-icon-android-star';
                                                }
                                            }
                                        }
                                    }
                                })
                            ])
                        }
                    }
                ]
            },
            wallet:{
                base:0.00,
                coin:0.00,
            },
            showMarket:false,
            maxlength:14,
            fixHistoryHeight:295,
            form: {
                buy:{
                    limitPrice:0.00,
                    limitAmount:0.00,
                    marketAmount:0.00,
                    limitTurnover:0.00
                },
                sell:{
                    limitPrice:0.00,
                    limitAmount:0.00,
                    marketAmount:0.00,
                    limitTurnover:0.00
                }
            },
            trade:{
                rows:[],
                columns:[
                    {
                        title: this.$t('common.amount'),
                        key: 'amount',
                        render:(h,params)=>{
                            return h('span',params.row.amount.toFixed(this.coinScale));
                        }
                    },
                    {
                        title: this.$t('common.price'),
                        key: 'price',
                        render: (h,params) => {
                            const row=params.row;
                            const className=row.direction=='BUY'?'buy':'sell';

                            return h('span',{   
                                attrs:{
                                    class:className
                                }
                            },params.row.price.toFixed(this.baseCoinScale))
                        }
                    },
                    

                    {
                        title: this.$t('exchange.direction'),
                        key: 'direction',
                        render: (h,params) => {
                            const row=params.row;
                            const className=row.direction=='BUY'?'buy':'sell';
                            const direction=row.direction=='BUY'?this.$t('common.buy'):this.$t('common.sell');
                            return h('span',{   
                                attrs:{
                                    class:className
                                }
                            },direction)  
                        }
                    },
                    {   
                        title: this.$t('exchange.time'),
                        key: 'time',
                        render:(h,params)=>{
                            return h('span',this.timeFormat(params.row.time));
                        }
                    }
                ]
            },  
            plate:{
                maxPostion:7,
                columns:[
                    {
                        title: this.$t('exchange.gear'),
                        key: 'postion',
                        render: (h,params) => {
                            const row=params.row;
                            const className = row.direction.toLowerCase();
                            const title =  (row.direction=='BUY'?this.$t('common.buy'):this.$t('common.sell')) +' '+ row.position;
                            return h('span',{   
                                attrs:{
                                    class:className
                                }
                            },title)
                        }
                    },
                    {
                        title: this.$t('common.price'),
                        key: 'price',
                        render:(h,params)=>{
                            if(params.row.price=="--"){
                                return h('span',params.row.price) 
                            }else{
                                 return h('span',params.row.price.toFixed(this.baseCoinScale));
                            }
                            // return params.row.price.toFixed(this.baseCoinScale);
                        }
                    },
                    {
                        title: this.$t('common.amount'),
                        key: 'amount',
                        render:(h,params)=>{
                            if(params.row.amount=="--"){
                                return h('span',params.row.amount)
                            }else{
                                 return h('span',params.row.amount.toFixed(this.coinScale));
                            }
                            // return params.row.amount.toFixed(this.coinScale);
                        }
                    },
                    {   
                        title: this.$t('exchange.total'),
                        key: 'totalAmount',
                        render:(h,params)=>{
                            if(params.row.totalAmount=="--"){
                                return h('span',params.row.totalAmount)
                            }else{
                                return h('span',params.row.totalAmount.toFixed(this.coinScale));
                            }
                            // return params.row.totalAmount.toFixed(this.coinScale);
                        }
                    }
                ],
                askRows:[],
                bidRows:[]
            },
            currentOrder:{
                columns:[
                    {
                        title: this.$t('exchange.time'),
                        key: 'time',
                        render:(h,params) => {
                            return h('span',this.dayFormat(params.row.time));
                            
                        }
                    },
                    {
                        title: this.$t('exchange.direction'),
                        key: 'direction',
                        render: (h,params) => {
                            const row=params.row;
                            const className=row.direction.toLowerCase();
                            return h('span',{
                                attrs:{
                                    class:className
                                }
                            },row.direction == 'BUY' ? this.$t('common.buy') : this.$t('common.sell'))
                        }
                    },
                    {
                        title: this.$t('common.price'),
                        key: 'price'
                    },
                    {   
                        title: this.$t('common.amount'),
                        key: 'amount'
                    },
                    {   
                        title: this.$t('exchange.tradedAmount'),
                        key: 'tradedAmount'
                    },
                    {   
                        title: this.$t('common.operate'),
                        key: 'operate',
                        width:110,
                        render: (h, params) => {
                            return h('Button', {
                                    props: {
                                        size: 'small'
                                    },
                                    style: {
                                        background:'#54677F',
                                        borderColor:'#54677F',
                                        height:'20px',
                                        lineHeight:'15px'
                                    },
                                    on: {
                                        click: () => {
                                            this.cancel(params.index)
                                        }
                                    }
                            }, this.$t('exchange.cancel'))
                        }
                    }
                ],
                rows:[]
            },
            historyOrder:{
                pageSize:10,
                total:10,
                page:1,
                columns: [
                    {
                        type: 'expand',
                        width: 40,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    rows: params.row.detail
                                }
                            })
                        }
                    },
                    {
                        title: this.$t('exchange.time'),
                        key: 'time',
                        render:(h,params)=>{
                            return h('span',this.dateFormat(params.row.time));
                        }
                    },
                    {
                        title: this.$t('exchange.direction'),
                        key: 'direction',
                        render: (h,params) => {
                            const row=params.row;
                            const className=row.direction.toLowerCase();
                            return h('span',{   
                                attrs:{
                                    class:className
                                }
                            },row.direction=='BUY'?this.$t('common.buy'):this.$t('common.sell'))  
                        }
                    },
                    {
                        title: this.$t('common.price'),
                        key: 'price'
                    },
                    {   
                        title: this.$t('exchange.entrust'),
                        key: 'amount'
                    },
                    {   
                        title: this.$t('exchange.tradedAmount'),
                        key: 'tradedAmount'
                    },
                    {
                        title: this.$t('common.status'),
                        key: 'status',
                        render:(h,params)=>{
                            const status = params.row.status;
                            if(status == 'COMPLETED'){
                                return h('span',this.$t('common.completed'));
                            }
                            else if(status == 'CANCELED'){
                                return h('span',this.$t('common.cancelled'));
                            }
                            else {
                                return '';
                            }
                        }
                    }
                ],
                rows:[]
            }
        }
    },
    computed:{
        'rechargeUSDTUrl':function () {
          return "#/finance/recharge?name="+this.currentCoin.base;
        },
        'rechargeCoinUrl':function () {
          return '#/finance/recharge?name='+this.currentCoin.coin;
        },
        'isLogin':function(){
            return this.$store.getters.isLogin;
        },
        'member':function(){
            return this.$store.getters.member;
        },
        'lang': function () {
          return this.$store.state.lang;
        }
    },
    watch:{
        'form.buy.limitPrice':function(val){
            this.form.buy.limitTurnover = (val*this.form.buy.limitAmount).toFixed(8);
　　　　 },
        'form.buy.limitAmount':function(val){
            this.form.buy.limitTurnover = (val*this.form.buy.limitPrice).toFixed(8);
　　　　 },
        'form.sell.limitPrice':function(val){
            this.form.sell.limitTurnover = (val*this.form.sell.limitAmount).toFixed(8);
　　　　 },
        'form.sell.limitAmount':function(val){
            this.form.sell.limitTurnover = (val*this.form.sell.limitPrice).toFixed(8);
　　　　 },
        'lang':function () {
          this.updateLangData();
        },
        'currentCoin':function () {
          this.updateTitle();
        },
        'currentCoin.price':function () {
          this.updateTitle();
        }
    },
    created:function(){
        this.init();
    },
    mounted:function(){
        this.getCNYRate();
        this.getSymbolScale();
        this.getSymbol();
        this.getPlate();
        this.getTrade();
        if(this.isLogin){
            this.getFavor();
            this.getWallet();
            this.getCurrentOrder();
            this.getHistoryOrder();
        }
    },
    methods:{
        updateTitle(){
          let title = this.currentCoin.price + " " + this.currentCoin.rose + " " + this.currentCoin.coin + "/" + this.currentCoin.base;
          title += "领衔全球的数字资产交易平台 -- 【久财网】";
          window.document.title = title;
        },
        updateLangData(){
          this.coins.columns[0].title = this.$t("common.coin");
          this.coins.columns[1].title = this.$t("exchange.lastPrice");
          this.coins.columns[2].title = this.$t("exchange.rose");
          this.coins.columns[3].title = this.$t("exchange.collect");

          this.trade.columns[0].title = this.$t('common.amount');
          this.trade.columns[1].title = this.$t('common.price');
          this.trade.columns[2].title = this.$t('exchange.direction');
          this.trade.columns[3].title = this.$t('exchange.time');

          this.plate.columns[0].title = this.$t("exchange.gear");
          this.plate.columns[1].title = this.$t("common.price");
          this.plate.columns[2].title = this.$t("common.amount");
          this.plate.columns[3].title = this.$t("exchange.total");

          this.currentOrder.columns[0].title = this.$t("exchange.time");
          this.currentOrder.columns[1].title = this.$t("exchange.direction");
          this.currentOrder.columns[2].title = this.$t("common.price");
          this.currentOrder.columns[3].title = this.$t("common.amount");
          this.currentOrder.columns[4].title = this.$t("exchange.tradedAmount");
          this.currentOrder.columns[5].title = this.$t("common.operate");

          this.historyOrder.columns[1].title = this.$t("exchange.time");
          this.historyOrder.columns[2].title = this.$t("exchange.direction");
          this.historyOrder.columns[3].title = this.$t("common.price");
          this.historyOrder.columns[4].title = this.$t("exchange.entrust");
          this.historyOrder.columns[5].title = this.$t("exchange.tradedAmount");
          this.historyOrder.columns[6].title = this.$t("common.status");

          // window.tvWidget.options.time_frames[0].title = this.$t("exchange.realtime");
      },
        init(){
            this.$store.commit('navigate','nav-exchange');
            
            var params=this.$route.params[0];
            if(params==undefined){
                this.$router.push('/exchange/'+this.defaultPath);
                params = this.defaultPath;
            }
            var coin = params.toUpperCase().split('_')[0];
            var base = params.toUpperCase().split('_')[1];
            this.currentCoin.symbol = coin+'/'+base;
            this.currentCoin.coin = coin;
            this.currentCoin.base = base;
        },
        getCNYRate(){
          this.$http.post(this.host + '/market/exchange-rate/usd-cny').then(response => {
            var resp = response.body;
            this.CNYRate = resp.data;
          });
        },
        getCoin(symbol){
            return this.coins._map[symbol];
        },
        getKline(){
            var that = this;
            require(["@js/charting_library/charting_library.min.js"],function(tv){
                var widget = window.tvWidget = new TradingView.widget({
                        fullscreen: true,
                        symbol: that.symbol,
                        interval: '1',
                        timezone: 'Asia/Shanghai',
                        toolbar_bg: '#18202a',
                        container_id: "kline_container",
                        datafeed: that.datafeed,
                        library_path: process.env.NODE_ENV === 'production'?"/assets/charting_library/":'src/assets/js/charting_library/',
                        locale: "zh", 
                        debug: false,
                        drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
                        disabled_features: ["header_resolutions","header_symbol_search","header_chart_type","header_compare","header_undo_redo","header_screenshot","header_saveload","use_localstorage_for_settings","left_toolbar","volume_force_overlay"],
                        enabled_features: ["move_logo_to_main_pane"],
                        custom_css_url:'bundles/common.css',
                        supported_resolutions: ["1","5","15","30","60","240","1D","1W","1M"],
                        charts_storage_url: 'http://saveload.tradingview.com',
                        charts_storage_api_version: "1.1",
                        client_id: 'tradingview.com',
                        user_id: 'public_user_id',
                        overrides: {
                            "paneProperties.background": "#1B1E2E",
                            "paneProperties.vertGridProperties.color": "#454545",
                            "paneProperties.horzGridProperties.color": "#454545",
                            "scalesProperties.textColor" : "#AAA", 
                            "mainSeriesProperties.candleStyle.upColor": "#589065",
                            "mainSeriesProperties.candleStyle.downColor": "#AE4E54",
                            "mainSeriesProperties.candleStyle.drawBorder": false,
                            "mainSeriesProperties.candleStyle.wickUpColor": "#589065",
                            "mainSeriesProperties.candleStyle.wickDownColor": "#AE4E54",
                            "paneProperties.legendProperties.showLegend": false
                        
                        },
                        time_frames: [
                            { text: "1min", resolution: "1", description: "realtime",title:that.$t('exchange.realtime') },
                            { text: "1min", resolution: "1", description: "1min" },
                            { text: "5min", resolution: "5", description: "5min" },
                            { text: "15min", resolution: "15", description: "15min" },
                            { text: "30min", resolution: "30", description: "30min" },
                            { text: "1hour", resolution: "60", description: "1hour",title: "1hour" },
                            // { text: "4hour", resolution: "240", description: "4hour",title: "4hour" },
                            { text: "1day", resolution: "1D", description: "1day",title: "1day" },
                            { text: "1week", resolution: "1W", description: "1week",title: "1week" },
                            { text: "1mon", resolution: "1M", description: "1mon" }
                        ] 
                });
                widget.onChartReady(function() {
                    widget.chart().createStudy("Moving Average", false, false, [5], null, { "plot.color": "#965FC4" });
                    widget.chart().createStudy("Moving Average", false, false, [10], null, { "plot.color": "#84AAD5" });
                })
            });  
        },
        getFavor(){ //查询自选
            this.$http.post(this.host+this.api.exchange.favorFind,{}).then(response => {
                var resp=response.body;
                for(var i=0;i<resp.length;i++){
                    var coin = this.getCoin(resp[i].symbol)
                    if(coin != null){
                        coin.isFavor = true;
                        this.coins.favor.push(coin);
                    }
                }
            });
        },
        getSymbol(){
            this.$http.post(this.host+this.api.market.thumb,{}).then(response => {
                var resp=response.body;
                for(var i=0;i<resp.length;i++){
                    var coin=resp[i];
                    coin.price=resp[i].close=resp[i].close.toFixed(this.baseCoinScale);
                    coin.rose=resp[i].chg>0 ? ('+'+(resp[i].chg*100).toFixed(2)+'%') : ((resp[i].chg*100).toFixed(2)+'%');
                    coin.coin=(resp[i].symbol).split('/')[0];
                    coin.base=(resp[i].symbol).split('/')[1];
                    coin.href=(coin.coin+'_'+coin.base).toLowerCase();
                    coin.isFavor = false;
                    this.coins._map[coin.symbol] = coin;
                    this.coins[coin.base].push(coin);
                    if(coin.symbol==this.currentCoin.symbol){
                        this.currentCoin = coin;
                        this.form.buy.limitPrice = this.form.sell.limitPrice = coin.price;
                    }
                }
                require(["../../assets/js/exchange.js"],function(e){
                    e.clickScTab();
                });
                this.startWebsock();
            })
        },
        getSymbolScale(){ //获取精度
            this.$http.post(this.host+this.api.market.symbolInfo,{symbol:this.currentCoin.symbol}).then(response => {
                var resp=response.body;
                if(resp != null){
                    this.currentCoin.coinScale=resp.coinScale;
                    this.currentCoin.baseCoinScale=resp.baseCoinScale;
                }
            })
        },
        getPlate(){
            var params={};
            params['symbol']=this.currentCoin.symbol;
            this.$http.post(this.host+this.api.market.platemini,params).then(response => {
                var resp=response.body;
                if(resp.ask && resp.ask.items){
                    
                    for (var i=0;i<resp.ask.items.length;i++){
                      if (i==0) resp.ask.items[i].totalAmount = resp.ask.items[i].amount;
                      else resp.ask.items[i].totalAmount = resp.ask.items[i-1].totalAmount + resp.ask.items[i].amount;
                    }
                   
                	if(resp.ask.items.length >= this.plate.maxPostion) {
                		for(var i = this.plate.maxPostion; i > 0 ;i--) {
                			  var ask = resp.ask.items[i-1];
                			  ask.direction = 'SELL';
                        ask.position = i;
                        this.plate.askRows.push(ask);
                		}
                	}else {
                	  for (var i=7;i>resp.ask.items.length;i--){
                        var ask = {price:"--",amount:"--"};
                	    ask.direction = 'SELL';
                	    ask.position = i;
                      ask.totalAmount = ask.amount;
                      this.plate.askRows.push(ask);
                    }
                		for(var i = resp.ask.items.length; i > 0 ;i--) {
                			  var ask = resp.ask.items[i-1];
                			  ask.direction = 'SELL';
                        ask.position = i;
                        this.plate.askRows.push(ask);
                		}
                	}
                };
                if(resp.bid && resp.bid.items){
                    for (var i=0;i<resp.bid.items.length;i++){
                      if (i==0) resp.bid.items[i].totalAmount = resp.bid.items[i].amount;
                      else resp.bid.items[i].totalAmount = resp.bid.items[i-1].totalAmount + resp.bid.items[i].amount;
                    }
                    for(var i=0;i<resp.bid.items.length;i++){
                        var bid = resp.bid.items[i];
                        bid.direction = 'BUY';
                        bid.position = i + 1;
                        this.plate.bidRows.push(bid);
                        if(i == this.plate.maxPostion - 1) break;
                    }
                    if (resp.bid.items.length < this.plate.maxPostion)
                    {
                      for (var i=resp.bid.items.length;i<this.plate.maxPostion;i++){
                        var bid = {price:"--",amount:"--"}
                        bid.direction = 'BUY';
                        bid.position = i+1;
                        bid.totalAmount = "--";
                        this.plate.bidRows.push(bid);
                      }
                    }
                    //this.plate.bidRows = this.plate.bidRows.slice(0,this.plate.maxPostion);
                }
            })
        },
        getTrade(){
            var params={};
            params['symbol']=this.currentCoin.symbol;
            params['size']=20;
            this.$http.post(this.host+this.api.market.trade,params).then(response => {
                var resp=response.body;
                for(var i=0;i<resp.length;i++){
                    this.trade.rows.push(resp[i]);
                }
            })
        },
        startWebsock(){
            var stompClient  = null;
            var that=this;
            var socket = new SockJS(that.host+that.api.market.ws);
            stompClient = Stomp.over(socket);
            stompClient.debug=false;
            // this.datafeed = new Datafeeds.WebsockFeed(that.host+'/market',this.currentCoin,stompClient);
            // this.getKline();
            stompClient.connect({}, function(frame) {
              that.datafeed = new Datafeeds.WebsockFeed(that.host+'/market',that.currentCoin,stompClient);
              that.getKline();
                //订阅价格变化消息
                stompClient.subscribe('/topic/market/thumb', function(msg) {
                    var resp = JSON.parse(msg.body);
                    var coin = that.getCoin(resp.symbol);
                    if(coin != null){
                        coin.price=(resp.close).toFixed(2);
                        coin.rose=resp.chg>0 ? ('+'+(resp.chg*100).toFixed(2)+'%') : ((resp.chg*100).toFixed(2)+'%');
                        coin.close=(resp.close).toFixed(2);
                        coin.high=(resp.high).toFixed(2);
                        coin.low=(resp.low).toFixed(2);
                        coin.turnover=parseInt(resp.volume);
                    }
                });
                //订阅实时成交信息
                stompClient.subscribe('/topic/market/trade/'+that.currentCoin.symbol, function(msg) {
                    var resp = JSON.parse(msg.body);
                    if(resp.length > 0){
                        for(var i=0;i<resp.length;i++){
                            that.trade.rows.unshift(resp[i]);
                        }
                    }
                    if(that.trade.rows.length > 30){
                        that.trade.rows=that.trade.rows.slice(0,30);
                    }
                });
                if(that.isLogin){
                 //订阅委托取消信息
                    stompClient.subscribe('/topic/market/order-canceled/'+that.currentCoin.symbol+"/"+that.member.id, function(msg) {
                        var resp = JSON.parse(msg.body);
                        that.refreshAccount();
                    });
                    //订阅委托交易完成
                    stompClient.subscribe('/topic/market/order-completed/'+that.currentCoin.symbol+"/"+that.member.id, function(msg) {
                        var resp = JSON.parse(msg.body);
                        that.refreshAccount();
                    });
                }

                //订阅盘口消息
                stompClient.subscribe('/topic/market/trade-plate/'+that.currentCoin.symbol, function(msg) {
                    var resp = JSON.parse(msg.body);
                    console.log(resp);
                    if(resp.direction == 'SELL'){
                        var asks = resp.items;
                        that.plate.askRows = [];

                        for(var i=0;i<asks.length;i++){
                          if (i == 0) asks[i].totalAmount = asks[i].amount;
                          else asks[i].totalAmount = asks[i-1].totalAmount + asks[i].amount;
                        }

                        if(asks.length >= that.plate.maxPostion) {
                          for(var i = that.plate.maxPostion; i > 0 ;i--) {
                            var ask = asks[i-1];
                            ask.direction = 'SELL';
                            ask.position = i;
                            that.plate.askRows.push(ask);
                          }
                        }else {
                            for(var i=7;i>asks.length;i--){
                                var ask={price:'--',amount:'--'};
                                ask.direction='SELL';
                                ask.position=i;
                                ask.totalAmount=ask.amount;
                                that.plate.askRows.push(ask);
                            }
                          for(var i = asks.length; i > 0 ;i--) {
                            var ask = asks[i-1];
                            ask.direction = 'SELL';
                            ask.position = i;
                            that.plate.askRows.push(ask);
                          }
                        }
                    }
                    else{
                        var bids = resp.items;
                        that.plate.bidRows = [];
                        for(var i=0;i<bids.length;i++){
                          if (i == 0) bids[i].totalAmount = bids[i].amount;
                          else bids[i].totalAmount = bids[i-1].totalAmount + bids[i].amount;
                        }
                        for(var i=0;i<bids.length;i++){
                            var bid = bids[i];
                            bid.direction = 'BUY';
                            bid.position = i + 1;
                            that.plate.bidRows.push(bid);
                            if(i == that.plate.maxPostion - 1) break;
                        }
                        if(bids.length<that.plate.maxPostion){
                            for(var i=bids.length;i<that.plate.maxPostion;i++){
                                var bid={price:'--',amount:'--'}
                                bid.direction='BUY';
                                bid.position=i+1;
                                bid.totalAmount='--';
                                that.plate.bidRows.push(bid);
                            }
                        }
                       
                        // that.plate.bidRows = that.plate.bidRows.slice(0,that.plate.maxPostion);
                    }
                })
            });
        },
        limited_price(){
            this.showMarket=false;
        },
        market_price(){
            this.showMarket=true;
        },
        collect(index,row){
            if(!this.isLogin){
              this.$Message.info(this.$t("common.logintip"));
              return;
            }
            var params={};
            params['symbol']=row.symbol;
            this.$http.post(this.host+this.api.exchange.favorAdd,params).then(response => {
                var resp=response.body;
                if(resp.code==0){
                    this.$Message.info(this.$t("exchange.do_favorite"));
                    this.getCoin(row.symbol).isFavor = true;
                    row.isFavor = true;
                    this.coins.favor.push(row);
                }
            })
        },
        cancelCollect(index,row){
            if(!this.isLogin){
              this.$Message.info(this.$t("common.logintip"));
              return;
            }
            var params={};
            params['symbol'] = row.symbol;
            this.$http.post(this.host+this.api.exchange.favorDelete,params).then(response => {
                var resp=response.body;
                if(resp.code==0){
                    this.$Message.info(this.$t("exchange.cancel_favorite"));
                    this.getCoin(row.symbol).isFavor = false;
                    for (var i=0;i<this.coins.favor.length;i++){
                      var favorCoin = this.coins.favor[i];
                      if (favorCoin.symbol == row.symbol) {
                        this.coins.favor.splice(i,1);
                        break;
                      }
                    }
                }
            })
        },
        gohref(currentRow,oldCurrentRow){
            location.href='/#exchange/'+currentRow.href;
            location.reload();
        },
        buyWithLimitPrice(){
            if(this.form.buy.limitAmount==''){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.buyAmountRule1')
                });
                return;
            }
            var maxAmount = this.wallet.base/this.form.buy.limitPrice;
            if(this.form.buy.limitAmount>maxAmount){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.buyAmountRule2')+maxAmount
                });
                return;
            }
            var that = this;
            var params={};
            params['symbol']=this.currentCoin.symbol;
            params['price']=this.form.buy.limitPrice;
            params['amount']=this.form.buy.limitAmount;
            params['direction']='BUY';
            params['type']='LIMIT_PRICE';
            this.$http.post(this.host+this.api.exchange.orderAdd,params).then(response => {
                var resp=response.body;
                if(resp.code==0){
                    this.$Notice.success({
                        title: this.$t('common.tips'),
                        desc: this.$t('exchange.tradeSuccess')
                    });
                    this.getWallet();
                    this.getCurrentOrder();
                    this.getHistoryOrder();
                    this.form.buy.limitAmount = 0;
                }else{
                    this.$Notice.error({
                        title: this.$t('common.tips'),
                        desc: resp.message
                    });
                }
            })
        },
        buyWithMarketPrice(){
            if(this.form.buy.marketAmount==''){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.turnoverRule1')
                });
                return;
            }
            if(this.form.buy.marketAmount>parseFloat(this.wallet.base)){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.turnoverRule2')+this.wallet.base
                });
                return;
            }
            var params={};
            params['symbol']=this.currentCoin.symbol;
            params['price']=0;
            params['amount']=this.form.buy.marketAmount;
            params['direction']='BUY';
            params['type']='MARKET_PRICE';
            
            this.$http.post(this.host+this.api.exchange.orderAdd,params).then(response => {
                var resp=response.body;
                if(resp.code==0){
                    this.$Notice.success({
                        title: this.$t('common.tips'),
                        desc: this.$t('exchange.tradeSuccess')
                    });
                    this.refreshAccount();
                }else{
                    this.$Notice.error({
                        title: this.$t('common.tips'),
                        desc: resp.message
                    });
                }
            })
        },
        sellLimitPrice(){
            if(this.form.sell.limitAmount==''){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.sellAmountRule1')
                });
                return;
            }
            if(this.form.sell.limitPrice==''){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.sellPriceRule')
                });
                return;
            }
            if(this.form.sell.limitAmount > parseFloat(this.wallet.coin)){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.sellAmountRule2')+this.wallet.coin
                });
                return;
            }
            var params={};
            params['symbol'] = this.currentCoin.symbol;
            params['price'] = this.form.sell.limitPrice;
            params['amount'] = this.form.sell.limitAmount;
            params['direction']='SELL';
            params['type']='LIMIT_PRICE';
            var that = this;
            this.$http.post(this.host+this.api.exchange.orderAdd,params).then(response => {
                var resp=response.body;
                if(resp.code==0){
                    this.$Notice.success({
                        title: that.$t('common.tips'),
                        desc: that.$t('exchange.tradeSuccess')
                    });
                    this.refreshAccount();
                    this.form.sell.limitAmount = 0;
                }else{
                    this.$Notice.error({
                        title: this.$t('common.tips'),
                        desc: resp.message
                    });
                }
            })
        },
        sellMarketPrice(){
            if(this.form.sell.marketAmount==''){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.sellAmountRule1')
                });
                return;
            }
           if(this.form.sell.marketAmount > parseFloat(this.wallet.coin)){
                this.$Notice.error({
                    title: this.$t('common.tips'),
                    desc: this.$t('exchange.sellAmountRule2')+this.wallet.coin
                });
                return;
            }
            var params={};
            params['symbol']=this.currentCoin.symbol;
            params['price']=0;
            params['amount'] = this.form.sell.marketAmount;
            params['direction']='SELL';
            params['type']='MARKET_PRICE';
            var that = this;
            this.$http.post(this.host+this.api.exchange.orderAdd,params).then(response => {
                var resp=response.body;
                if(resp.code==0){
                    this.$Notice.success({
                        title: this.$t('common.tips'),
                        desc: this.$t('exchange.tradeSuccess')
                    });
                    this.refreshAccount();
                }else{
                    this.$Notice.error({
                        title: this.$t('common.tips'),
                        desc: resp.message
                    });
                }
            })
        },
        buyPlate(currentRow){
            this.form.buy.limitPrice = currentRow.price;
            this.form.sell.limitPrice = currentRow.price;
        },
        sellPlate(currentRow){
            this.form.buy.limitPrice = currentRow.price;
            this.form.sell.limitPrice = currentRow.price;
        },
        /**
         * 获取钱包信息
         */
        getWallet(){
            this.$http.post(this.host+this.api.uc.wallet+this.currentCoin.base,{}).then(response => {
                var resp=response.body;
                this.wallet.base = resp.data.balance;
            })
            this.$http.post(this.host+this.api.uc.wallet+this.currentCoin.coin,{}).then(response => {
                var resp=response.body;
                this.wallet.coin = resp.data.balance;
            })
        },
        getCurrentOrder(){ //查询当前委托
            var params={};
            params['pageNo']=0;
            params['pageSize']=100;
            params['symbol']=this.currentCoin.symbol;
            this.currentOrder.rows = [];
            var that = this;
            this.$http.post(this.host+this.api.exchange.current,params).then(response => {
                var resp=response.body;
                if(resp.content.length>0){
                    this.currentOrder.rows = resp.content;
                    this.currentOrder.rows.forEach((row,index)=>{
                        row.price = row.type=='MARKET_PRICE'?that.$t('exchange.marketPrice'):row.price;
                    })
                }
            })
        },
        getHistoryOrder(pageNo){ //查询历史委托(pageNo当前页码)
            if(pageNo == undefined){
                pageNo = this.historyOrder.page;
            }
            else{
                 pageNo = pageNo;
            }
            this.historyOrder.rows=[];
            var params={};
            params['pageNo'] = pageNo - 1;
            params['pageSize'] = this.historyOrder.pageSize;
            params['symbol']=this.currentCoin.symbol;
            var that = this;
            this.$http.post(this.host+this.api.exchange.history,params).then(response => {
                var resp=response.body;
                 if(resp.content.length>0){
                    this.historyOrder.total = resp.totalElements;
                    this.historyOrder.page = resp.number+1;
                    for(var i=0;i<resp.content.length;i++){
                        var row = resp.content[i];
                        row.price = row.type=='MARKET_PRICE'?this.$t('exchange.marketPrice'):row.price;
                        this.historyOrder.rows.push(row);
                    }
                  }
               
            });
        },
        cancel(index){
            var order = this.currentOrder.rows[index];
            this.$Modal.confirm({
                content: this.$t('exchange.confrimCancel')+'?',
                onOk: () => {
                    this.$http.post(this.host+this.api.exchange.orderCancel+"/"+order.orderId,{}).then(response => {
                        var resp=response.body;
                        if(resp.code==0){
                           this.refreshAccount();
                        }
                        else{
                            this.$Notice.error({
                                title: this.$t('common.tips'),
                                // title: that.$t('common.tips'),
                                desc: resp.message
                            });
                        }
                    })
                }
            })
        },
        refreshAccount:function(){
            this.getCurrentOrder();
            this.getHistoryOrder();
            this.getWallet();
        },
        timeFormat:function(tick){
            return moment(tick).format("HH:mm:ss");
        },
        dayFormat:function(tick){
            return moment(tick).format("MM-DD HH:mm:ss");
        },
        dateFormat:function(tick){
            return moment(tick).format("YYYY-MM-DD HH:mm:ss");
        },
        keyEvent(event){
            var re1 = new RegExp("\([0-9]+\.[0-9]{"+this.baseCoinScale+"})[0-9]*","");
            this.form.buy.limitPrice=this.form.buy.limitPrice.toString().replace(re1,'$1');
            this.form.sell.limitPrice=this.form.sell.limitPrice.toString().replace(re1,'$1');
            this.form.buy.marketAmount=this.form.buy.marketAmount.toString().replace(re1,'$1');

            var re2 = new RegExp("\([0-9]+\.[0-9]{"+this.coinScale+"})[0-9]*","");
            this.form.buy.limitAmount=this.form.buy.limitAmount.toString().replace(re2,'$1');
            this.form.sell.limitAmount=this.form.sell.limitAmount.toString().replace(re2,'$1');
            this.form.sell.marketAmount=this.form.sell.marketAmount.toString().replace(re2,'$1');
        }
   
    }
}
</script>

