<template>
    <div class="page-view">
        <div class="page-content">
            <div class="layout" v-show="m_nav">
                <div class="layout-ceiling">
                    <router-link to="/">
                        <div class="layout-logo"></div>
                    </router-link>
                    <div class="layout-ceiling-main">
                        <div class="header_nav">
                            <Menu :active-name="activeNav" theme="dark" width="auto" :open-names="['1']">
                                <Submenu name="1" style="background:#021b3a;">
                                    <router-link to="/">
                                        <MenuItem name="nav-index">{{$t("header.index")}}</MenuItem>
                                    </router-link>
                                    <router-link to="/exchange">
                                        <MenuItem name="nav-exchange">{{$t("header.exchange")}}</MenuItem>
                                    </router-link>
                                    <router-link to="/otc/trade/usdt">
                                        <MenuItem name="nav-otc">{{$t("header.otc")}}</MenuItem>
                                    </router-link>
                                    <router-link to="/finance">
                                        <MenuItem name="nav-asset">{{$t("header.asset")}}</MenuItem>
                                    </router-link>
                                    <router-link to="/uc/safe">
                                        <MenuItem name="nav-uc">{{$t("header.ucenter")}}</MenuItem>
                                    </router-link>
                                    <!-- <router-link to="/help">
                                        <MenuItem name="nav-service">{{$t("header.service")}}</MenuItem>
                                    </router-link> -->
                                </Submenu>
                            </Menu>
                        </div>
                        <div class="login_register" v-if="isLogin">
                            <Dropdown>
                                <a href="javascript:void(0)">
                                    <img style="vertical-align:middle;width:15px;" src="./assets/images/user.png">
                                    <span>{{member.username}}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <div @click="logout">
                                        <DropdownItem>
                                            <img src="./assets/images/logout.png"> {{$t("common.logout")}}
                                        </DropdownItem>
                                    </div>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div class="login_register" v-else>
                            <Menu active-name="1-1" theme="dark" width="auto" :open-names="['2']">
                                <Submenu name="2" style="background:#021b3a;">
                                    <router-link to="/login" id="login">
                                        <MenuItem name="1-1">{{$t("common.login")}}</MenuItem>
                                    </router-link>
                                    <router-link to="/register" id="register">
                                        <MenuItem name="1-2">{{$t("common.register")}}</MenuItem>
                                    </router-link>
                                </Submenu>
                            </Menu>
                        </div>
                        <Dropdown @on-click="changelanguage">
                            <a style="width:90px;height:20px;line-height:20px;border:1px solid;border-radius:20px;padding:0 12px;" href="javascript:void(0)">
                                {{languageValue}}
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="en">English</DropdownItem>
                                <DropdownItem name="cn">简体中文</DropdownItem>
                                <DropdownItem name="hk">繁体中文</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <router-view></router-view>
            <div class="footer" v-show="m_nav">
                <div class="footer_content">
                    <div class="footer_left">
                        <img src="./assets/images/footer_logo.png"/>
                        <!-- <p>{{$t("footer.gsmc")}}</p> -->
                        <p style="margin-top:20px;">Copyright © 2013 - 2018&nbsp;&nbsp;{{$t("footer.gsmc")}}</p>
                    </div>
                    <div class="footer_right">
                        <ul>
                            <li class="footer_title">
                                <div>{{$t("footer.aboutus")}}</div>
                            </li>
                             <li>
                                <router-link to="/about-us">{{$t("footer.gyjc")}}</router-link>
                            </li>
                            <li>
                                <!-- <router-link to="/newhelp/index?id=2">{{$t("footer.szzcjs")}}</router-link> -->
                                 <router-link to="/digAssets/btc">{{$t("footer.szzcjs")}}</router-link>
                            </li>
                            <li>
                                <router-link to="/feenote">{{$t("footer.fltk")}}</router-link>
                            </li>
                        </ul>
                        <ul>
                            <li class="footer_title">
                                <div>{{$t("footer.clause")}}</div>
                            </li>
                            <li>
                                <router-link to="/about-protocol">{{$t("footer.userPrivacy")}}</router-link>
                            </li>
                            <li>
                              <router-link to="/privacy">{{$t("footer.ysLaw")}}</router-link>
                            </li>
                            <li>
                              <router-link to="/law">{{$t("footer.lawExplain")}}</router-link>
                            </li>
                        </ul>
                        <ul>
                            <li class="footer_title">
                                <div>{{$t("footer.help")}}</div>
                            </li>
                            <li>
                                <router-link to="/appDownload">{{$t("footer.APPDownload")}}</router-link>
                            </li>
                            <li>
                                <router-link to="/noviceCourse">{{$t("footer.xsjc")}}</router-link>
                            </li>
                            <li>
                                <router-link to="/problem">{{$t("footer.problem")}}</router-link>
                            </li>
                        </ul>
                        <ul>
                            <li class="footer_title">
                                <div>{{$t("footer.contact")}}</div>
                            </li>
                            <li>
                                <router-link to="/notice">{{$t("footer.gsjj")}}</router-link>
                            </li>
                            <li>
                                <router-link to="/industryInfor">{{$t("footer.industryInfor")}}</router-link>
                            </li>
                            <li>
                                <router-link to="/contactUs">{{$t("footer.contactus")}}</router-link>
                            </li>
                             <li>
                                <router-link to="/join-us">{{$t("footer.jrwm")}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'app',
    data() {
        return {
             m_nav:true,
            // languageValue: '简体中文'
        }
    },
    computed: {
        'activeNav': function() {
            return this.$store.state.activeNav;
        },
        'isLogin': function() {
            return this.$store.getters.isLogin;
        },
        'member':function(){
            return this.$store.getters.member;
        },
        'languageValue':function () {
            var curlang = this.$store.getters.lang;
            if(curlang == "English") this.$i18n.locale = 'en';
            return curlang;
        }
    },
    
    created: function() {
        this.initialize();
    },
    methods: {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
        initialize() {
            this.$store.commit('recoveryMember');
            this.$store.commit('initLang');
            this.checkLogin();
        },
        logout() {
            this.$http.post(this.host + '/uc/logout', {}).then(response => {
                var resp = response.body;
                if (resp.code == 0) {
                    this.$Message.success(resp.message);
                    this.$store.commit('setMember',null);
                    location.href = "/";
                } else {
                    this.$Message.error(resp.message);
                }
            })
        },
        checkLogin() {
            this.$http.post(this.host + '/uc/check/login', {}).then(response => {
                var result = response.body;
                if(result.code == 0 && result.data == false){
                   this.$store.commit('setMember',null);
                }
            });
        },
        changelanguage: function(name) {
            if (name == 'en') {
                // this.languageValue = 'English';
                this.$store.commit('setlang','English');
                this.$i18n.locale = 'en';
            }
            if (name == 'cn') {
                // this.languageValue = '简体中文';
                this.$store.commit('setlang','简体中文');
                this.$i18n.locale = 'zh';
            }
            // if (name == 'hk') {
            //     this.languageValue = '繁体中文';
            // }
        }
    },
    mounted () {
       
        if (this._isMobile()) {
        // alert("手机端");
        this.m_nav=false;
        this.$router.replace('/m_index');
        } else {
        // alert("pc端");
        //this.$router.replace('/index');
        }
       
    },
}
</script>

<style>
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #263142;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened{
    background: #021b3a;
}
li{
    list-style-type: none;
}


/*自定义滚动条样式*/

::-webkit-scrollbar {
    width: 10px;
    background: #0b0d1b;
}

::-webkit-scrollbar-thumb {
    background: #1f1b2a;
    border-radius: 25px;
}

.hide {
    display: none;
}

.blue {
    color: #6BF !important;
}

.red {
    color: #AE4E54 !important;
}

.ivu-btn-info {
    background: #2AABFE;
    border-color: #2AABFE;
}

.ivu-btn-primary {
    /* background:#1855fd;
    border-color:#1855fd; */
}

.ivu-btn.active,
.ivu-btn:active {
    color: #fff;
    background: #2AABFE;
    border-color: #2AABFE;
}

.ivu-btn-text.active,
.ivu-btn-text:active {
    color: #2b85e4;
    background-color: transparent;
    border-color: transparent;
}

.ivu-btn.disabled,
.ivu-btn.disabled.active,
.ivu-btn.disabled:active,
.ivu-btn.disabled:focus,
.ivu-btn.disabled:hover,
.ivu-btn[disabled],
.ivu-btn[disabled].active,
.ivu-btn[disabled]:active,
.ivu-btn[disabled]:focus,
.ivu-btn[disabled]:hover,
fieldset[disabled] .ivu-btn,
fieldset[disabled] .ivu-btn.active,
fieldset[disabled] .ivu-btn:active,
fieldset[disabled] .ivu-btn:focus,
fieldset[disabled] .ivu-btn:hover {
    color: #fff;
    background: #54677F;
}

.ivu-carousel-dots li button {
    width: 30px;
    height: 10px;
    border-radius: 14px;
}

.ivu-menu-dark,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background: #18202A;
}

#checkbox {
    width: 10px;
}

#sendCode {
    position: absolute;
    border: 0;
    top: 0;
    right: 0;
    width: 30%;
    color: #D5851D;
    cursor: pointer;
}

.login_form {
    background: url(./assets/images/login_bg.jpg) no-repeat center;
    height: 760px;
    background-size: cover;
    position: relative;
    overflow: hidden;
}

.login_left {
    width: 60%;
    height: 400px;
    margin: 0 auto;
    margin-top: 215px;
    background: #1E2125;
    position: relative;
    padding: 0 50px;
    color: #979797;
    font-size: 20px;
}

.login_right {
    position: absolute;
    background: #fff;
    width: 400px;
    height: 560px;
    top: -90px;
    right: 50px;
}

.login_title {
    color: #000;
    text-align: center;
    height: 80px;
    font-size: 25px;
}



/* .login_right .ivu-select-selection{
        background:#EAEDEE;
} */

.login_right .ivu-select-dropdown {
    background: #fff;
}

.ivu-form-inline .ivu-form-item {
    display: block;
    margin-right: 0;
}

.modify .ivu-input-wrapper {
    width: 40%;
}

.ivu-btn-ghost {
    /* color:#fff; */
}

.layout {
    position: relative;
}

.layout-logo {
    width: 100px;
    height: 40px;
    background: url(./assets/images/logo.png) no-repeat;
    background-size: cover;
    float: left;
    position: relative;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-ceiling {
    padding: 0 4%;
    background: #021b3a;
    overflow: hidden;
}

.layout-ceiling-main {
    float: right;
    height: 40px;
    line-height: 40px;
}

.layout-ceiling-main .ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 0;
}

.layout-ceiling-main .ivu-menu-item {
    font-size: 14px;
}

.layout-ceiling-main a {
    color: #fff;
    display: inline-block;
    line-height:36px;
    height: 40px;
    text-align: center;
    /* margin-left: 30px; */
}
.layout-ceiling-main a li{
    border-top:4px solid transparent;
    box-sizing: border-box;
}
.header_nav {
    float: left;
    margin-right: 20px;
}

.header_nav .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
.header_nav .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    /* background: url(./assets/images/menu_active.png) !important ;  */
 
     background:#061425 !important;
     border-top:4px solid #1154fd;
}

.login_register .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
.login_register .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background: #1855fd;
    border-radius: 5px;
}

.login_register {
    float: left;
}

#login,
#register {
    color: #fff;
    display: inline-block;
    line-height: 25px;
    width: 75px;
    height: 25px;
    text-align: center;
    margin: 0;
}

.login_register a {
    margin-left: 0;
}

.ivu-dropdown-rel a {
    width: 100%;
}

.ivu-dropdown-menu {
    width: 100px;
     background:#0d1b42;
}

.layout-ceiling-main .ivu-select-dropdown {
    background: #0d1b42;
    margin-left: 25px;
}

.ivu-select-dropdown a {
    width: 100%;
    text-align: left;
    margin: 0;
}

.ivu-dropdown-item:hover {
    background:none;
}

.ivu-dropdown-item {
    color: #fff;
   
}

.ivu-dropdown-item img {
    vertical-align: middle;
}

.ivu-radio-inner:after {
    background: #18202A;
}



/*安全中心*/

.user_center {
    height: 900px;
}

.ivu-menu-submenu-title {
    display: none;
}

.ivu-menu-item {
    text-align: center;
}

.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
    padding-left: 15px !important;
    padding-right: 15px;
    color: #fff;
}

.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background: #1855fd !important;
}

.layout_menu_right {
    margin-left: 3%;
    background: #18202A;
    color: #fff;
    padding-bottom: 130px;
}

.menu_right_title {
    font-size: 16px;
    line-height: 45px;
    margin: 0 10px;
    padding-left: 20px;
    border-bottom: 1px solid #263142;
}



/* .ivu-form .ivu-form-item-label{
        color:#fff;
    }
    .ivu-form-item-required .ivu-form-item-label:before{
        display:none;
    } */

.category .ivu-radio-group.ivu-radio-group-button {
    width: 100%;
}

.category .ivu-radio-group label {
    font-size: 14px;
}

.category .ivu-radio-group-button .ivu-radio-wrapper {
    background: #28313E;
    color: #979797;
    border: 0;
    padding: 0 25px;
}

.category .ivu-radio-group-button .ivu-radio-wrapper-checked {
    color: #fff;
    background: #2F3D52;
    box-shadow: none;
}

.category .ivu-radio-wrapper span {
    padding-left: 0;
}

.purse_address_left {
    float: left;
    width: 86%;
}

.purse_address p {
    font-size: 10px;
    line-height: 25px;
    color: #979797;
}

.purse_address_left_icon {
    line-height: 40px;
    height: 40px;
    width: 100%;
}

.purse_address_left_icon img {
    vertical-align: middle;
    margin-right: 10px;
}

.purse_address span {
    font-size: 14px;
    float: left;
    color: #fff;
    padding: 0 20px;
    background: #28313E;
    width: 21%;
}

.purse_address_left_icon label {
    float: left;
    width: 72%;
    height: 40px;
    border: 2px solid #28313E;
    padding-left: 20px;
}

#qrcode canvas {
    width: 120px;
}

#qrcode img {
    width: 100%;
}

.ivu-select-item:hover {
    background: #aaa;
}

.ivu-select-item-selected,
.ivu-select-item-selected:hover {
    background: #aaa
}

.chart_container #chart_updated_time {
    float: left;
}

.footer {
    float: left;
    width: 100%;
}

.footer_content {
    /* height: 200px; */
    padding: 50px 10%;
    color: #53575c;
    background: #0b0d1b;
    overflow: hidden;
}

.footer_left {
    float: left;
    font-size: 14px;
}

.footer_right {
    float: right;
}

.footer_right ul {
    float: left;
    margin: 0 30px;
}
.footer_right ul li{
    margin-bottom:10px;
}
.footer_right ul li a {
    color: #fff;
}

.footer_title {
    font-size: 15px;
    height: 30px;
}

.ivu-select-selected-value {
    color: #bbbec4
}
/* .ivu-tabs{
    color:#BCD7E6
} */
.ivu-tabs-bar{
    border-bottom:0;
}



/*法币交易*/

.ww {
    width: 85%;
    margin: 0 auto;
    min-width: 1200px;
}

.ivu-col {
    text-align: center;
}

#List {
    width: 1200px;
    background: #f7f7fa;
}
</style>