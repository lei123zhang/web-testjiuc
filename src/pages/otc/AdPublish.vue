<template>
    <div class="content-wrap">
        <div class="ww">
            <div class="container" id="List" style="width:100%;">
                <div class="contbox">
                    <div class="nav-right col-xs-12 col-md-10 padding-right-clear">
                        <div class="send-box">
                            <div class="title-box">
                                <h6 class="titles">{{$t('otc.createAd')}}
                                    <i class="iconfont icon-hongjiantou"></i>
                                </h6>
                                <p>{{$t('otc.createAdTip1')}}
                                    <router-link to="/otc/trade/usdt">{{$t('otc.tradeAd')}}</router-link>
                                    。
                                </p>
                                <p>{{$t('otc.createAdTip2')}}</p>
                                <p>{{$t('otc.createAdTip3')}}
                                    <router-link to="/otc/ad">{{$t('otc.myAd')}}</router-link>
                                    。
                                </p>
                            </div>
                            <!-- 广告内容 -->
                            <div class="formbox send-form">
                                <Form ref="form" :model="form" :rules="ruleValidate" :label-width="90">
                                    <FormItem :label="$t('otc.iWant')" prop="advertiseType">
                                        <RadioGroup v-model="form.advertiseType">
                                            <Radio label="1" :disabled='isId'>{{$t('otc.onlineSale')}}</Radio>
                                            <Radio label="0" :disabled='isId'>{{$t('otc.onlinePurchase')}}</Radio>
                                        </RadioGroup>
                                    </FormItem>
                                    <FormItem :label="$t('otc.unit')" prop="coin">
                                        <Select :placeholder="$t('common.pleaseSelect')" v-model="form.coin" :disabled='isId'>
                                            <Option v-for="item in coinList" :value="item.id" :key="item.id">{{item.unit}}</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem :label="$t('common.country')" prop="country">
                                        <Select :placeholder="$t('common.pleaseSelect')" v-model="form.country" @on-change="onAreaChange">
                                            <Option v-for="area in areas" :value="area.zhName" :key="area.zhName">{{area.zhName}}</Option>
                                        </Select>
                                    </FormItem>
                                    <!-- 1 -->
                                    <FormItem :label="$t('otc.currency')" prop="rmb">
                                        <Input v-model="form.rmb" disabled placeholder=""></Input>
                                    </FormItem>
                                    <FormItem :label="$t('otc.openFixedPrice')">
                                        <i-switch v-model="form.fixed" size="large">
                                            <span slot="open">{{$t('otc.open')}}</span>
                                            <span slot="close">{{$t('otc.close')}}</span>
                                        </i-switch>
                                    </FormItem>
                                    <p class="msg" v-show="form.fixed">{{$t('otc.fixedTip')}}</p>
                                    <!-- 溢价 -->
                                    <FormItem :label="$t('otc.premisePrice')" prop="premisePrice" v-show="!form.fixed" class="ivu-form-item-required">
                                        <Input v-model="form.premisePrice" :placeholder="$t('otc.premisePriceTip1')" autocomplete="off">
                                         <span slot="append">%</span>
                                        </Input>
                                    </FormItem>
                                    <FormItem :label="$t('otc.fixedPrice')" prop="fixedPrice" v-show="form.fixed" class="ivu-form-item-required">
                                        <Input v-model="form.fixedPrice" :placeholder="$t('otc.fixedPriceTip')">
                                        <span slot="append">CNY</span>
                                        </Input>
                                    </FormItem>
                                    <!-- 1 -->
                                    <p class="msg">{{$t('otc.cankao')}}：
                                        <span class="cankao">{{cankao}}</span>
                                    </p>
                                    <p class="msg" v-show="!form.fixed">{{$t('otc.premisePriceTip2')}}{{wantstyle}}。</p>
                                    <div class="ivu-form-item">
                                        <label class="ivu-form-item-label" style="width: 90px;">{{$t('otc.tradePrice')}}</label>
                                        <div class="ivu-form-item-content" style="margin-left: 90px;">
                                            <div class="ivu-input-wrapper ivu-input-type" id="price">
                                                {{price}}
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <p class="msg">{{$t('otc.valuationFormula')}}：（Bitstamp+Bitfinex+Coinbase）/ 3 *{{gongshi.toFixed(4) }}</p>
                                    <FormItem :label="wantstyle+$t('common.amount')" prop="number">
                                        <Input v-model="form.number" :placeholder="$t('otc.enterRequest')+wantstyle+$t('otc.sAmount')"></Input>
                                    </FormItem>
                                    <FormItem :label="$t('otc.tradeDeadline')" prop="timeLimit">
                                        <Input v-model="form.timeLimit" :placeholder="$t('otc.timeLimitTip1')+'('+wantTime+$t('otc.min')+')'">
                                        <span slot="append">{{$t('otc.min')}}</span>
                                        </Input>
                                    </FormItem>
                                    <p class="msg">{{$t('otc.timeLimitTip2')}} </p>

                                    <router-link to="/uc/account" style="padding-left: 90px;">{{$t('otc.addPayMode')}}</router-link>
                                    <FormItem :label="$t('otc.payMode')" prop="payMode">
                                        <Select :placeholder="$t('common.pleaseSelect')" v-model="form.payMode" multiple style="width:260px">
                                            <Option v-for="item in payModeList" :value="item.value" :key="item.value" :disabled="item.isOpen">{{ item.label }}</Option>
                                        </Select>
                                    </FormItem>
                                    
                                    <FormItem :label="$t('otc.minLimit')" prop="minLimit">
                                        <Input v-model="form.minLimit" :placeholder="$t('otc.minLimitTip')">
                                        <span slot="append">CNY</span>
                                        </Input>
                                         <div class="red-warn" v-show="amountShow">(最小交易额必须大于等于100)</div>
                                    </FormItem>
                                     
                                    <FormItem :label="$t('otc.maxLimit')" prop="maxLimit">
                                        <Input v-model="form.maxLimit" :placeholder="$t('otc.maxLimitTip')">
                                        <span slot="append">CNY</span>
                                        </Input>
                                    </FormItem>
                                    <FormItem :label="$t('otc.remarkMessage')" prop="remark">
                                        <Input v-model="form.remark" type="textarea" :autosize="{minRows: 4,maxRows: 6}" :placeholder="$t('otc.remarkMessageTip')"></Input>
                                    </FormItem>
                                    <FormItem :label="$t('otc.openAutoReply')">
                                        <i-switch v-model="form.autoReply" size="large">
                                            <span slot="open">{{$t('otc.open')}}</span>
                                            <span slot="close">{{$t('otc.close')}}</span>
                                        </i-switch>
                                    </FormItem>
                                    <p class="msg">{{$t('otc.openAutoReplyTip')}}</p>
                                    <FormItem :label="$t('otc.autoReply')" prop="autoword" v-show="form.autoReply">
                                        <Input v-model="form.autoword" type="textarea" :autosize="{minRows: 4,maxRows: 6}" :placeholder="$t('otc.autoReplyTip')"></Input>
                                    </FormItem>
                                    <FormItem :label="$t('common.priceW')" prop="priceW">
                                        <Input v-model="form.priceW" :placeholder="$t('otc.priceWTip')" type="password"></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" long @click="handleSubmit('form')" :disabled="disAllowBtn">{{$t('otc.submit')}}</Button>
                                        <!-- <Button type="ghost" @click="handleReset('form')" style="margin-left: 8px">Reset</Button> -->
                                    </FormItem>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
  
        const numberCheck = (rule, value, callback) => {
            if (value === '' || value == 0) {
                callback(new Error('请输入正确数字'));
            } else if (Number.isNaN(Number(value))) {
                callback(new Error('请输入正确数字'));
            }else {
                callback();
            }
        };
        const premisePriceCheck = (rule, value, callback) => {
            if (this.form.fixed == false) {
                if (!value || value == 0) {
                    return callback(new Error('溢价值为0-20'));
                } else if (Number.isNaN(Number(value))) {
                    callback(new Error(''));
                } else if (value < 0 || value > 20) {
                    callback(new Error('请输入正确数字'));
                } else {
                    callback();
                }
            } else {
                callback();
            }
        };
        const fixedPCheck = (rule, value, callback) => {
            if (this.form.fixed == true) {
                if (value === '') {
                    callback(new Error('请输入正确数字'));
                } else if (!/^\d+$/.test(value)) {
                    callback(new Error('请输入正确数字'));
                } else {
                    callback();
                }
            } else {
                callback();
            }
        };
        const maxCheck = (rule, value, callback) => {
            let priceNow = (this.price + '').replace(/,/g, '').replace(/[^\d|.]/g, '') - 0;
            priceNow = this.round(this.mul(priceNow, this.form.number), 8)
            value=Number(value);
            if (!value || value == 0) {
                return callback(new Error('请输入您的最大交易额！'));
            } else if (!/^\d+$/.test(value)) {
                callback(new Error('请输入整数'));
            } else if (value < this.form.minLimit) {
                callback(new Error('最大交易额必须大于最小交易额！'));
            } else if (value > priceNow) {
                callback(new Error('最大交易额不能超过您的卖出总金额' + priceNow + 'CNY！'));
            } else {
                this.amountShow=false;
                
                this.$refs.form.validateField('minLimit');
                callback();
            }
        };
        const minCheck = (rule, value, callback) => {
             value=Number(value);
            if (!value || value == 0) {
                return callback(new Error('请输入您的最小交易额！'));
            } else if (!/^\d+$/.test(value)) {
                callback(new Error('请输入整数'));
            } else if (value < 100) {
                this.amountShow=true;
                callback(new Error('最小交易额必须大于等于100！'));
            }
            else if (this.form.maxLimit && this.form.maxLimit != 0 && value > (this.form.maxLimit - 0)) {
                // console.log(this.form.maxLimit)
                callback(new Error('最小交易额必须小于最大交易额'));
            } else {
                this.amountShow=false;
                callback();
            }
        };
        //    期限
        const timeLimitCheck = (rule, value, callback) => {
            //数字
            if (value === '' || !/^\d+$/.test(value)) {
                callback(new Error('请输入正确数字'));
            }
            //出售
            if (this.form.advertiseType == 1) {
                if (value < 15 || value > 120) {
                    callback(new Error('请输入正确数字'));
                } else {
                    callback();
                }
            }
            //买入   
            if (this.form.advertiseType == 0) {
                if (value < 10 || value > 30) {
                    callback(new Error('请输入正确数字'));
                }
                else {
                    callback();
                }
            } else {
                callback();
            }
        };
        return {
            isId: false,
            disAllowBtn: false,
            //币种列表
            coinList: [],
            //账户余额
            balance: 100,
            //参考价
            cankao: '',
            price: '',
            gongshi: 1,
            wantstyle: this.$t('common.sell'),
            wantTime: '15-120',
            areas:[],
            amountShow:true,
            form: {
                advertiseType: '1',
                coin: '1',
                country: 'china',
                rmb: '',
                fixed: false,
                premisePrice: '',
                fixedPrice: '',
                number: '',
                timeLimit: '',
                payMode: [],
                minLimit: '',
                maxLimit: '',
                autoReply: false,
                remark: '',
                priceW: '',
                autoword: '',
            },
            ruleValidate: {
                advertiseType: [
                    { required: true, trigger: 'change' }
                ],
                coin: [
                    { required: true, message: '请输入币种', trigger: 'change' }
                ],
                country: [
                    { required: true, message: '请输入正确选项', trigger: 'change' }
                ],
                rmb: [
                    { required: true, message: '请输入正确选项', trigger: 'change' }
                ],
                premisePrice: [
                    { validator: premisePriceCheck, message: this.$t('otc.premisePriceValidate'), trigger: 'blur' }
                ],
                fixedPrice: [
                    { validator: fixedPCheck, message: this.$t('otc.fixedPriceValidate'), trigger: 'blur' }
                ],
                number: [
                    { required: true, validator: numberCheck, message: this.$t('otc.numberValidate'), trigger: 'blur' }
                ],
                timeLimit: [
                    { required: true, validator: timeLimitCheck, message: this.$t('otc.timeLimitValidate'), trigger: 'blur' },
                ],
                payMode: [
                    { required: true, type: 'array', min: 1, message: this.$t('otc.payModeValidate'), trigger: 'change' },
                ],
                minLimit: [
                    { required: true, validator: minCheck, trigger: 'blur' }
                ],
                maxLimit: [
                    { required: true, validator: maxCheck, trigger: 'blur' }
                ],
                // autoword: [
                //     { required: true,  message: '自动回复内容不能为空', trigger: 'blur' }
                // ],
                priceW: [
                    { required: true, message: this.$t('otc.priceWValidate'), trigger: 'blur' }
                ],
            },
            payModeList: [
                {
                    value: this.$t('common.alipay'),
                    label: this.$t('common.alipay'),
                    isOpen: true,
                },
                {
                    value: this.$t('common.wechat'),
                    label: this.$t('common.wechat'),
                    isOpen: true,
                },
                {
                    value: this.$t('common.unionPay'),
                    label: this.$t('common.unionPay'),
                    isOpen: true,
                },
            ]
        }
    },
    methods: {
        init() {
            this.$store.commit('leftmenu','ad');
        },
        mul(a, b) {
            var c = 0,
                d = a.toString(),
                e = b.toString();
            try {
                c += d.split(".")[1].length;
            } catch (f) { }
            try {
                c += e.split(".")[1].length;
            } catch (f) { }
            return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
        },
        div(a, b) {
            var c, d, e = 0,
                f = 0;
            try {
                e = a.toString().split(".")[1].length;
            } catch (g) { }
            try {
                f = b.toString().split(".")[1].length;
            } catch (g) { }
            return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), this.mul(c / d, Math.pow(10, f - e));
        },
        round(v, e) {
            var t = 1;
            for (; e > 0; t *= 10, e--);
            for (; e < 0; t /= 10, e++);
            return Math.round(v * t) / t;
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                   
                    this.disAllowBtn = true
                    //创建
                    var params = {};
                    params['price'] = (this.price + '').replace(/[^\d|.]/g, '') - 0;
                    params['advertiseType'] = this.form.advertiseType;
                    params['coin.id'] = this.form.coin;
                    params['minLimit'] = this.form.minLimit;
                    params['maxLimit'] = this.form.maxLimit;
                    params['timeLimit'] = this.form.timeLimit;
                    params['country'] = this.form.country;
                    if (this.form.fixed == true) {
                        params['priceType'] = 0;
                    } else if (this.form.fixed == false) {
                        params['priceType'] = 1;
                    }
                    params['premiseRate'] = this.form.premisePrice;
                    params['remark'] = this.form.remark;
                    params['number'] = this.form.number;
                    params['pay'] = this.form.payMode;
                    params['jyPassword'] = this.form.priceW;
                    if (this.form.autoReply == true) {
                        params['auto'] = 1;
                    } else if (this.form.autoReply == false) {
                        params['auto'] = 0;
                    }
                    params['autoword'] = this.form.autoword;

                    //修改
                    var isIdparams = {}
                    isIdparams['id'] = this.$route.query.id;
                    isIdparams['advertiseType'] = this.form.advertiseType;
                    isIdparams['price'] = (this.price + '').replace(/[^\d|.]/g, '') - 0;
                    isIdparams['coin.id'] = this.form.coin;
                    isIdparams['minLimit'] = this.form.minLimit;
                    isIdparams['maxLimit'] = this.form.maxLimit;
                    isIdparams['timeLimit'] = this.form.timeLimit;
                    isIdparams['country'] = this.form.country;
                    if (this.form.fixed == true) {
                        isIdparams['priceType'] = 0;
                    } else if (this.form.fixed == false) {
                        isIdparams['priceType'] = 1;
                    }
                    isIdparams['premiseRate'] = this.form.premisePrice;
                    isIdparams['remark'] = this.form.remark;
                    isIdparams['number'] = this.form.number;
                    isIdparams['pay'] = this.form.payMode;
                    isIdparams['jyPassword'] = this.form.priceW;
                    if (this.form.autoReply == true) {
                        isIdparams['auto'] = 1;
                    } else if (this.form.autoReply == false) {
                        isIdparams['auto'] = 0;
                    }
                    isIdparams['autoword'] = this.form.autoword;
                    if (this.isId) {
                        this.$http.post(this.host + '/otc/advertise/update', isIdparams).then(response => {
                          
                            var resp = response.body;
                            if (resp.code == 0) {
                                this.$Message.success(resp.message);
                                var that = this;
                                setTimeout(() => {
                                    that.$router.push('/otc/ad');
                                }, 3000)
                            } else {
                                this.$Message.error(resp.message);
                                this.disAllowBtn=false
                            }
                            //  this.disAllowBtn=false
                        })
                    } else {
                        //创建
                        this.$http.post(this.host + '/otc/advertise/create', params).then(response => {
                            var resp = response.body;
                            if (resp.code == 0) {
                                this.$Message.success(resp.message);
                                var that = this;
                                setTimeout(() => {
                                    that.$router.push('/otc/ad');
                                }, 3000)
                            } else {
                                this.$Message.error(resp.message);
                                this.disAllowBtn=false
                            }
                            // this.disAllowBtn=false
                        })
                    }

                } else {
                    this.$Message.error('提交失败!');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        onAreaChange(value){
            // console.log("onAreaChange:"+value);
            for(var i=0;i<this.areas.length;i++){
                if(this.areas[i].zhName == value){
                    this.form.rmb = this.areas[i].localCurrency;
                }
            }
        },
        findCoin(coinId) {
            for (let i = 0; i < this.coinList.length; i++) {
                if (this.coinList[i].id == coinId) {
                    return this.coinList[i].unit
                }
            }
        },
        getAreas(){
            this.$http.post(this.host + '/uc/support/country').then(response => {
                var resp = response.body;
                this.areas = resp.data;
                this.form.country = this.areas[0].zhName;
                this.form.rmb = this.areas[0].localCurrency;
            });
        },
        getMember() {
            //获取个人安全信息
            let self = this
            this.$http.post(this.host + '/uc/approve/security/setting').then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                    if (resp.data.realName == null || resp.data.realName == "") {
                        this.$Message.success('请先进行实名等一系列认证');
                        self.$router.push('/uc/safe');
                    } else if (resp.data.phoneVerified == 0) {
                        this.$Message.success('请先进行手机等一系列认证');
                        self.$router.push('/uc/safe');
                    } else if (resp.data.fundsVerified == 0) {
                        this.$Message.success('请先进行资金密码等一系列认证');
                        self.$router.push('/uc/safe');
                    } else {
                        this.getAccount()
                    }
                } else {
                    this.$Message.error(resp.message);
                }
            })
        },
        getAccount() {
            //获取个人账户信息
            let self = this
            this.$http.post(this.host + '/uc/approve/account/setting').then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                    if (resp.data.bankVerified == 0 && resp.data.aliVerified == 0 && resp.data.wechatVerified == 0) {
                        this.$Message.success('请至少绑定一种支付方式');
                        self.$router.push('/uc/account');
                    }
                    if (resp.data.aliVerified == 1) {
                        this.payModeList[0].isOpen = false
                    }
                    if (resp.data.wechatVerified == 1) {
                        this.payModeList[1].isOpen = false
                    }
                    if (resp.data.bankVerified == 1) {
                        this.payModeList[2].isOpen = false
                    }
                } else {
                    this.msg = resp.message
                    this.$Message.error(resp.message);
                }
            })
        },
    },
    mounted() {
    },
    computed: {
        wantHistory() {
            return this.form.advertiseType
        },
        premisePriceHistory() {
            return this.form.premisePrice
        },
        fixedPriceHistory() {
            return this.form.fixedPrice
        },
        coin(){
            return this.form.coin
        }
    },
    watch: {
        coin(newValue, oldValue){//币与参考价格的联动
            this.$http.post(this.host + '/otc/coin/all').then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                    for (const obj of resp.data) {
                        if(obj.id == newValue){
                            let lv = (1 + this.form.premisePrice / 100).toFixed(4);
                            this.cankao = obj.marketPrice + ''
                            let cankoNew = this.cankao.replace(/,/g, '').replace(/[^\d|.]/g, '') - 0
                            this.price = (cankoNew * lv).toLocaleString() + ' CNY/' + this.findCoin(this.form.coin);
                           
                        }
                    }
                } 
            })
        },
        wantHistory(newValue, oldValue) {
            if (newValue == '1') {
                this.wantstyle = this.$t('common.sell');
                this.wantTime = '15-120';
            } else {
                this.wantstyle = this.$t('common.buy');
                this.wantTime = '10-30';
            }
        },
        premisePriceHistory(newValue, oldValue) {
            let lv = (1 + newValue / 100).toFixed(4);
            let cankoNew = this.cankao.replace(/,/g, '').replace(/[^\d|.]/g, '') - 0

            // this.price = (cankoNew * lv).toLocaleString() + ' CNY/' + this.findCoin(this.form.coin);
            this.price = this.round(this.mul(cankoNew, lv), 2).toLocaleString() + ' CNY/' + this.findCoin(this.form.coin);
            this.gongshi = (1 + newValue / 100);
        },
        fixedPriceHistory(newValue, oldValue) {
            this.price = (newValue - 0).toLocaleString();
        },

    },
    created() {
        this.init();
        this.getMember();
        this.getAreas();
        let lv = (1 + this.form.premisePrice / 100).toFixed(4);
        //获取币种(展示币跟参考价格)
        this.$http.post(this.host + '/otc/coin/all').then(response => {
            var resp = response.body;
            if (resp.code == 0) {
                // console.log(resp.data[0].marketPrice)
                this.coinList = resp.data;
                 this.form.coin = resp.data[0].id;
                this.cankao = resp.data[0].marketPrice + ''
                let cankoNew = this.cankao.replace(/,/g, '').replace(/[^\d|.]/g, '') - 0
                this.price = (cankoNew * lv).toLocaleString() + ' CNY/' + this.findCoin(this.form.coin);
               
            } else {
                this.$Message.error(resp.message);
            }
        })
        //查看id修改广告
        if (this.$route.query.id) {
            this.isId = true
            this.$http.post(this.host + '/otc/advertise/detail', { id: this.$route.query.id }).then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                    this.form.coin = resp.data.coinId + ''
                    this.form.country = resp.data.country
                    this.cankao = resp.data.marketPrice + ''
                    if (resp.data.priceType == 0) {
                        this.form.fixed = true
                        this.form.fixedPrice = resp.data.price
                    } else if (resp.data.priceType == 1) {
                        this.form.fixed = false
                    }
                    this.price = resp.data.price
                    this.form.advertiseType = resp.data.advertiseType + ''
                    this.form.minLimit = resp.data.minLimit
                    this.form.maxLimit = resp.data.maxLimit
                    this.form.remark = resp.data.remark
                    this.form.timeLimit = resp.data.timeLimit
                    this.form.premisePrice = resp.data.premiseRate
                    this.form.payMode = (resp.data.payMode + '').split(",")
                    // console.log(this.form.payMode)
                    this.form.number = resp.data.number
                    if (resp.data.auto == 0) {
                        this.form.autoReply = true
                    } else if (resp.data.auto == 1) {
                        this.form.autoReply = false
                    }
                    this.form.autoword = resp.data.autoword
                } else {
                    this.$Message.error(resp.message);
                }
            })
        }
    },
}
</script>

<style scoped>
.red-warn{
    color: red;
    position: absolute;
    right:-163px;
    top:0px;
}
.cankao {
    color: #e24a64;
}

#price {
    font-size: 18px;
    color: #e24a64;
}

.send-box .send-form .msg {
    padding-left: 90px;
    margin-bottom: 10px;
    position: relative;
    top: -4px;
}

.formbox {
    width: 40%;
    padding-top: 30px;
}

.send-box {
    background-color: #fff;
    color: #9194a5;
    padding: 32px;
}

.send-box .title-box {
    border-bottom: 1px dashed #ebeff5;
    padding-bottom: 30px;
}

.send-box .title-box .titles {
    font-size: 18px;
    font-weight: normal;
    color: #242a4a;
    margin-bottom: 15px;
}

.send-box .title-box p {
    line-height: 2;
}

.send-box .title-box p a {
    color: #15b3f0;
}

/* common */

.contbox {
    padding-bottom: 30px;
}

.leftmenu a.router-link-active {
    background: #ebeff5;
    color: #00b5f6 !important;
}

.order-table {
    margin-top: 20px;
}

.content-wrap {
    background: #eee;
    min-height: 750px;
}

.container {
    margin: 0 auto;
}

.contbox {
    background: #fff;
}
</style>