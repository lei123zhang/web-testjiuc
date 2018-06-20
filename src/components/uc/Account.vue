<template>
    <div class="nav-right">
        <div class="nav-right col-xs-12 col-md-10 padding-right-clear">
            <div class="bill_box rightarea padding-right-clear record account-box">
                <section class="trade-group merchant-top">
                    <i class="merchant-icon tips"></i>
                    <span class="tips-word">{{$t('uc.bindRealNameAccount')}}</span>
                    <span class="tips-g">{{$t('uc.AccountTip')}}</span>
                </section>
                <section class="accountContent">
                    <div class="account-in">
                        <div class="account-item">
                            <div class="account-item-in">
                                <i class="icons bankfor"></i>
                                <span class="card-number">{{$t('uc.bankCardNo')}}</span>
                                <p v-if="user.bankVerified==1" class="bankInfo" style="color: grey;">
                                    {{user.bankInfo.cardNo}}
                                </p>
                                <p v-else class="bankInfo" style="color: grey;">
                                    {{$t('uc.bankCardNoTip')}}
                                </p>
                                <a class="btn" v-if="user.bankVerified==1" @click="showItem(1)">{{$t('common.modify')}}</a>
                                <a class="btn" v-else @click="showItem(1)">{{$t('uc.bind')}}</a>
                            </div>
                            <div class="account-detail" v-show="choseItem==1">
                                <div class="detail-list">
                                    <Form ref="formValidate1" :model="formValidate1" :rules="ruleValidate" :label-width="85">
                                        <!-- name -->
                                        <FormItem :label="$t('common.name')" prop="name">
                                            <Input disabled size="large" v-model="formValidate1.name"/>
                                        </FormItem>
                                        <!-- bankName -->
                                        <FormItem :label="$t('uc.bankName')" prop="bankName">
                                            <Select :placeholder="$t('common.pleaseSelect')" v-model="formValidate1.bankName" size="large">
                                                <Option v-for="item in bankNameList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                            </Select>
                                        </FormItem>
                                        <!-- bankBranch -->
                                        <FormItem :label="$t('uc.bankBranch')" prop="bankBranch">
                                            <Input v-model="formValidate1.bankBranch" size="large" />
                                        </FormItem>
                                        <!-- bankNo -->
                                        <FormItem :label="$t('uc.bankNo')" prop="bankNo">
                                            <Input v-model="formValidate1.bankNo" size="large" type="text" />
                                        </FormItem>
                                        <!-- bankNoConfirm -->
                                        <FormItem :label="$t('uc.bankNoConfirm')" prop="bankNoConfirm">
                                            <Input v-model="formValidate1.bankNoConfirm" size="large" type="text"/>
                                        </FormItem>
                                        <!-- passwd -->
                                        <FormItem :label="$t('common.priceW')" prop="password">
                                            <Input v-model="formValidate1.password" type="password" size="large" />
                                        </FormItem>
                                        <!-- Button -->
                                        <FormItem>
                                            <Button type="primary" @click="handleSubmit('formValidate1')">{{$t('common.save')}}</Button>
                                            <!-- <Button type="ghost" @click="handleReset('formValidate1')" style="margin-left: 8px">Reset</Button> -->
                                        </FormItem>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div class="account-item">
                            <div class="account-item-in">
                                <i class="icons alipay"></i>
                                <span class="card-number">{{$t('uc.alipayNo')}}</span>
                                <p v-if="user.aliVerified==1" class="bankInfo" style="color: grey;">
                                    {{user.alipay.aliNo}}
                                </p>
                                <p v-else class="bankInfo" style="color: grey;">
                                    {{$t('uc.alipayNoTip')}}
                                </p>
                                <a class="btn" v-if="user.aliVerified==1" @click="showItem(2)">{{$t('common.modify')}}</a>
                                <a class="btn" v-else @click="showItem(2)">{{$t('uc.bind')}}</a>
                            </div>
                            <div class="account-detail" v-show="choseItem==2">
                                <div class="detail-list">
                                    <Form ref="formValidate2" :model="formValidate2" :rules="ruleValidate" :label-width="85">
                                      <Row>
                                        <Col span="8">
                                        <input type="hidden" name="aliPreview" :value="aliPreview" />
                                        <img :alt="$t('uc.imgtip')" id="aliImg" style="width: 200px;height: 300px;" :src="aliImg">
                                        <div class="acc_sc">
                                          <Upload ref="upload" :on-success="aliHandleSuccess" :headers="uploadHeaders" :action="uploadUrl">
                                            <Button type="ghost" icon="ios-cloud-upload-outline">{{$t('uc.upload')}}</Button>
                                          </Upload>
                                        </div>
                                        </Col>

                                        <Col span="16">
                                        <!-- name -->
                                        <FormItem :label="$t('common.name')" prop="name">
                                            <Input disabled size="large" v-model="formValidate2.name"/>
                                        </FormItem>
                                        <!-- alipay -->
                                        <FormItem :label="$t('uc.alipayNo')" prop="alipay">
                                            <Input v-model="formValidate2.alipay" size="large"/>
                                        </FormItem>
                                        <!-- passwd -->
                                        <FormItem :label="$t('common.priceW')" prop="password">
                                            <Input v-model="formValidate2.password" type="password" size="large"/>
                                        </FormItem>
                                        <!-- Button -->
                                        <FormItem>
                                            <Button type="primary" @click="handleSubmit('formValidate2')">保 存</Button>
                                            <!-- <Button type="ghost" @click="handleReset('formValidate2')" style="margin-left: 8px">Reset</Button> -->
                                        </FormItem>
                                        </Col>

                                      </Row>

                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div class="account-item">
                            <div class="account-item-in">
                                <i class="icons wechat"></i>
                                <span class="card-number">{{$t('uc.wechatNo')}}</span>
                                <p v-if="user.wechatVerified==1" class="bankInfo" style="color: grey;">
                                    {{user.wechatPay.wechat}}
                                </p>
                                <p v-else class="bankInfo" style="color: grey;">
                                    {{$t('uc.wechatNoTip')}}
                                </p>
                                <a class="btn" v-if="user.wechatVerified==1" @click="showItem(3)">{{$t('common.modify')}}</a>
                                <a class="btn" v-else @click="showItem(3)">{{$t('uc.bind')}}</a>
                            </div>
                            <div class="account-detail" v-show="choseItem==3">
                                <div class="detail-list">
                                    <Form ref="formValidate3" :model="formValidate3" :rules="ruleValidate" :label-width="85">
                                      <Row>
                                        <Col span="8">
                                          <input type="hidden" name="wePreview" :value="wePreview" />
                                          <img :alt="$t('uc.imgtip')" id="weImg" style="width: 200px;height: 300px;" :src="weImg">
                                          <div class="acc_sc">
                                            <Upload ref="upload" :on-success="weHandleSuccess" :headers="uploadHeaders" :action="uploadUrl">
                                              <Button type="ghost" icon="ios-cloud-upload-outline">{{$t('uc.upload')}}</Button>
                                            </Upload>
                                          </div>
                                        </Col>
                                        <Col span="16">
                                        <!-- name -->
                                        <FormItem :label="$t('common.name')" prop="name">
                                            <Input disabled size="large" v-model="formValidate3.name"/>
                                        </FormItem>
                                        <!-- wechat -->
                                        <FormItem :label="$t('uc.wechatNo')" prop="wechat">
                                            <Input v-model="formValidate3.wechat" size="large"/>
                                        </FormItem>
                                        <!-- passwd -->
                                        <FormItem :label="$t('common.priceW')" prop="password">
                                            <Input v-model="formValidate3.password" type="password" size="large"/>
                                        </FormItem>
                                        <!-- Button -->
                                        <FormItem>
                                            <Button type="primary" @click="handleSubmit('formValidate3')">{{$t('common.save')}}</Button>
                                            <!-- <Button type="ghost" @click="handleReset('formValidate3')" style="margin-left: 8px">Reset</Button> -->
                                        </FormItem>
                                        </Col>
                                      </Row>
                                    </Form>
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

export default {
    components: {
    },
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t('uc.bankNoRule1')));
            } else if (!/^\d+$/.test(value)) {
                callback(new Error(this.$t('uc.bankNoRule1')));
            } else {
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error(this.$t('uc.bankNoRule1')));
            } else if (!/^\d+$/.test(value)) {
                callback(new Error(this.$t('uc.bankNoRule1')));
            } else if (value !== this.formValidate1.bankNo) {
                callback(new Error(this.$t('uc.bankNoRule2')));
            } else {
                callback();
            }
        };
        return {
            uploadHeaders:{'x-auth-token':localStorage.getItem('TOKEN')},
            uploadUrl:this.host+'/uc/upload/oss/image',
            aliImg:'',
            aliPreview:'',
            weImg:'',
            wePreview:'',
            isNoName: true,
            msg: '',
            choseItem: 0,
            user: {},
            formValidate1: {
                name: '',
                password: '',
                bankName: '',
                bankBranch: '',
                bankNo: '',
                bankNoConfirm: '',

            },
            formValidate2: {
                name: '',
                alipay: '',
                password: '',
            },
            formValidate3: {
                name: '',
                wechat: '',
                password: '',
            },
            bankNameList: [
                {
                    value: '中国工商银行',
                    label: '中国工商银行'
                },
                {
                    value: '中国农业银行',
                    label: '中国农业银行'
                },
                {
                    value: '中国建设银行',
                    label: '中国建设银行'
                },
                {
                    value: '中国邮政储蓄银行',
                    label: '中国邮政储蓄银行'
                },
                {
                    value: '招商银行',
                    label: '招商银行'
                },
                {
                    value: '中国银行',
                    label: '中国银行'
                },
                {
                    value: '交通银行',
                    label: '交通银行'
                },
                {
                    value: '中信银行',
                    label: '中信银行'
                },
                {
                    value: '华夏银行',
                    label: '华夏银行'
                },
                {
                    value: '中国民生银行',
                    label: '中国民生银行'
                },
                {
                    value: '广发银行',
                    label: '广发银行'
                },
                {
                    value: '平安银行',
                    label: '平安银行'
                },
                {
                    value: '兴业银行',
                    label: '兴业银行'
                },
                {
                    value: '上海浦东发展银行',
                    label: '上海浦东发展银行'
                },
                {
                    value: '浙商银行',
                    label: '浙商银行'
                },
                {
                    value: '渤海银行',
                    label: '渤海银行'
                },
                {
                    value: '恒丰银行',
                    label: '恒丰银行'
                },
                {
                    value: '花旗银行',
                    label: '花旗银行'
                },
                {
                    value: '渣打银行',
                    label: '渣打银行'
                },
                {
                    value: '汇丰银行',
                    label: '汇丰银行'
                },
                {
                    value: '中国光大银行',
                    label: '中国光大银行'
                },
                {
                    value: '上海银行',
                    label: '上海银行'
                },
                {
                    value: '江苏银行',
                    label: '江苏银行'
                },
                {
                    value: '重庆银行',
                    label: '重庆银行'
                },
                {
                    value: '天津银行',
                    label: '天津银行'
                },
                {
                    value: '厦门银行',
                    label: '厦门银行'
                },
                {
                    value: '城市商业银行',
                    label: '城市商业银行'
                },
                {
                    value: '农村商业银行',
                    label: '农村商业银行'
                },
                {
                    value: '徽商银行',
                    label: '徽商银行'
                },



            ],
            ruleValidate: {
                name: [
                    { required: true, message: this.$t('uc.realRule'), trigger: 'blur' }
                ],
                bankName: [
                    { required: true, message: this.$t('uc.bankNameRule'), trigger: 'change' }
                ],
                bankBranch: [
                    { required: true, message: this.$t('uc.bankBranchRule'), trigger: 'blur' }
                ],
                bankNo: [
                    { required: true, type: 'string', min: 6, message: this.$t('uc.bankNoRule1'), trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' },
                ],
                bankNoConfirm: [
                    { validator: validatePassCheck, trigger: 'blur' },
                    { required: true, type: 'string', min: 6, message: this.$t('uc.bankNoRule1'), trigger: 'blur' },
                ],
                password: [
                    { required: true, message: this.$t('common.priceWRule1'), trigger: 'blur' },
                    { min: 6, message: this.$t('common.passwordRule'), trigger: 'blur' }
                ],
                alipay: [
                    { required: true, message: this.$t('uc.alipayNoRule'), trigger: 'blur' }
                ],
                wechat: [
                    { required: true, message: this.$t('uc.wechatNoRule'), trigger: 'blur' }
                ],
            },

        }
    },
    methods: {
        aliHandleSuccess (res, file) {
          this.aliImg=this.aliPreview=res.data;
        },
        weHandleSuccess (res, file) {
          this.weImg=this.wePreview=res.data;
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.submit(name)
                } else {
                    this.$Message.error(this.$t('common.saveFail'));
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        submit(name) {
            //银行卡
            if (name == 'formValidate1') {
                let param = {}
                param['bank'] = this.formValidate1.bankName
                param['branch'] = this.formValidate1.bankBranch
                param['jyPassword'] = this.formValidate1.password
                param['realName'] = this.formValidate1.name
                param['cardNo'] = this.formValidate1.bankNo
              if (this.user.bankVerified==1) { //修改
                this.$http.post(this.host + '/uc/approve/update/bank', param).then(response => {
                  var resp = response.body;
                  if (resp.code == 0) {
                    this.$Message.success(this.$t('common.saveSuccess'));
                    this.getAccount()
                    this.choseItem = 0
                  } else {
                    this.$Message.error(resp.message);
                  }
                })
              }else { //设置
                this.$http.post(this.host + '/uc/approve/bind/bank', param).then(response => {
                    var resp = response.body;
                    if (resp.code == 0) {
                        this.$Message.success(this.$t('common.saveSuccess'));
                        this.getAccount()
                        this.choseItem = 0
                    } else {
                        this.$Message.error(resp.message);
                    }
                })
              }
            }
            //支付宝
            if (name == 'formValidate2') {
                let param = {}
                param['ali'] = this.formValidate2.alipay
                param['jyPassword'] = this.formValidate2.password
                param['realName'] = this.formValidate2.name
                param['qrCodeUrl'] = this.aliPreview;

              if (this.user.aliVerified==1){
                  this.$http.post(this.host + '/uc/approve/update/ali', param).then(response => {
                    var resp = response.body;
                    if (resp.code == 0) {
                      this.$Message.success(this.$t('common.saveSuccess'));
                      this.getAccount()
                      this.choseItem = 0
                    } else {
                      this.$Message.error(resp.message);
                    }
                  })
              }else {
                this.$http.post(this.host + '/uc/approve/bind/ali', param).then(response => {
                    var resp = response.body;
                    if (resp.code == 0) {
                        this.$Message.success(this.$t('common.saveSuccess'));
                        this.getAccount()
                        this.choseItem = 0
                    } else {
                        this.$Message.error(resp.message);
                    }
                })
              }
            }
            //微信
            if (name == 'formValidate3') {
                let param = {}
                param['wechat'] = this.formValidate3.wechat
                param['jyPassword'] = this.formValidate3.password
                param['realName'] = this.formValidate3.name
                param['qrCodeUrl'] = this.wePreview;

              if(this.user.wechatVerified==1) {
                    this.$http.post(this.host + '/uc/approve/update/wechat', param).then(response => {
                    var resp = response.body;
                    if (resp.code == 0) {
                        this.$Message.success(this.$t('common.saveSuccess'));
                        this.getAccount()
                        this.choseItem = 0
                    } else {
                        this.$Message.error(resp.message);
                    }
                    })
              }else{
                this.$http.post(this.host + '/uc/approve/bind/wechat', param).then(response => {
                    var resp = response.body;
                    if (resp.code == 0) {
                        this.$Message.success(this.$t('common.saveSuccess'));
                        this.getAccount()
                        this.choseItem = 0
                    } else {
                        this.$Message.error(resp.message);
                    }
                })
              }
            }
        },
        showItem(index) {
            this.choseItem = index;
        },
        noName() {
            this.$Message.error(this.msg);
        },
        getAccount() {
            //获取个人账户信息
            this.$http.post(this.host + '/uc/approve/account/setting').then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                    this.user = resp.data;
                    this.formValidate1.name = this.formValidate2.name = this.formValidate3.name = this.user.realName
                    // this.usernameS = (this.user.username + '').slice(0, 1)
                    // this.dataCount = resp.data.length
                    this.isNoName = false
                    // console.log(resp.data)
                    //设置
                    this.formValidate1.bankName = this.user.bankInfo == null ? '' : this.user.bankInfo.bank
                    this.formValidate1.bankBranch = this.user.bankInfo == null ? '' : this.user.bankInfo.branch
                    this.formValidate1.bankNo = this.user.bankInfo == null ? '' : this.user.bankInfo.cardNo
                    this.formValidate2.alipay = this.user.alipay == null ? '' : this.user.alipay.aliNo
                    this.formValidate3.wechat = this.user.wechatPay == null ? '' : this.user.wechatPay.wechat

                    this.aliImg = this.aliPreview = this.user.alipay == null ? '' : this.user.alipay.qrCodeUrl;
                    this.weImg = this.wePreview = this.user.wechatPay == null ? '' : this.user.wechatPay.qrWeCodeUrl;

                } else {
                    this.msg = resp.message
                    this.$Message.error(resp.message);
                    this.$router.push("/uc/safe");
                }
            })
        }

    },
    created() {
        this.getAccount()
    },
    computed: {
    }
}
</script>
<style scoped>
.account-box .account-in .account-item .account-detail {
    padding: 30px 0;
    background: white;
    margin: 6px 0;
}

.account-box .account-in .account-item .account-detail .detail-list {
    width: 80%;
    margin: 0 auto;
}

.account-box .account-in .account-item .account-detail .detail-list .input-control {
    margin-bottom: 10px;
    height: 45px;
}

.detail-list .input-control .ivu-input-group-prepend {
    width: 63px;
}

.detail-list .input-control .ivu-input {
    height: 45px;
}

.account-box .account-in .account-item {
    margin-bottom: 10px;
}

.account-box .account-in .account-item .account-item-in {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 15px 30px 15px 50px;
    background-color: white;
    -webkit-box-shadow: 0 4px 0 0 rgba(69, 112, 128, 0.06);
    box-shadow: 0 4px 0 0 rgba(69, 112, 128, 0.06);
    font-size: 14px;
    color: #242a4a;
}

.account-box .account-in .account-item .account-item-in .icons {
    height: 17px;
    width: 17px;
    display: inline-block;
    margin-top: -1px;
    background-size: 100% 100%;
}

.account-box .account-in .account-item .account-item-in .bankfor {
    background-image: url(../../assets/img/bankcard.png);
}

.icons.alipay {
    background-image: url(../../assets/img/alipay.png);
}

.icons.wechat {
    background-image: url(../../assets/img/wechat.png);
}

.account-box .account-in .account-item .account-item-in .card-number {
    width: 142px;
    height: 40px;
    margin-right: 15px;
    border-right: 1px dashed #d0d5de;
    padding: 0 15px;
    line-height: 40px;
    text-align: left;
    display: inline-block;
}

.account-box .account-in .account-item .account-item-in .bankInfo {
    width: 73%;
    text-align: left;
}

.account-box .account-in .account-item .account-item-in .btn {
    padding: 8px 10px;
    cursor: pointer;
}

.tips-g {
    color: #8994a3;
    font-size: 12px;
}

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
