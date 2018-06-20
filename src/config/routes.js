import Vue from 'vue'
import Layout from '../public/layout'
import tradingcenter from '../pages/otc/TradingCenter'
import ordermanagement from '../pages/uc/OrderManagement'
import finance from '../pages/uc/Finance'
import membercenter from '../pages/uc/MemberCenter'
import tradeInfo from '../pages/otc/TradeInfo'

import checkuser from '../pages/otc/CheckUser'
import chat from '../pages/otc/Chat'
import notice from '../pages/cms/Notice'
import newhelp from '../pages/cms/NewHelp'
import question from '../pages/cms/Question'
import agreement from '../pages/cms/Agreement'
import exchargerule from '../pages/cms/ExchargeRule' /*交易规则*/
import userprotocol from '../pages/cms/UserProtocol' /*使用协议*/
import feenote from '../pages/cms/FeeNote' /*资费说明*/
import homenotice from '../pages/cms/HomeNotice' /*首页公告*/
import aboutus from '../pages/cms/AboutUs' /*关于我们*/
import joinus from '../pages/cms/JoinUs' /*加入我们*/
import rate from '../pages/cms/Rate'
import moneyindex from '../components/uc/MoneyIndex'
import record from '../components/uc/Record'
import recharge from '../components/uc/Recharge'
import withdraw from '../components/uc/Withdraw'
import safe from '../components/uc/Safe'
import account from '../components/uc/Account'
import withdrawAddr from '../components/uc/WithdrawAddress'
import chatline from '../components/otc/Chatline'
import noticeindex from '../components/cms/NoticeDeails'
import Index from '../pages/index/index'
import m_Index from '../pages/index/m_index'
import Login from '../pages/uc/login'
import Register from '../pages/uc/register'
import FindPwd from '../pages/uc/findpwd'
import Exchange from '../pages/exchange/exchange'
import Help from '../pages/cms/help'
import Message from '../pages/cms/message'
import OTCMain from '../pages/otc/Main'
import OtcTrade from '../pages/otc/Trade'
import OtcOrder from '../components/uc/myorder'
import OtcAd from '../components/otc/MyAd'
import adPublish from '../pages/otc/AdPublish'

import IndustryInfor from '../pages/cms/IndustryInfor'
import IndustryArtic from '../components/cms/IndustryArtic'
import ArticDetails from '../components/cms/ArticDetails'
import identbusiness from '../pages/uc/IdentBusiness'
import Problem from '../pages/cms/Problem'
import ProblemOne from '../pages/cms/Problem/one'
import ProblemTwo from '../pages/cms/Problem/two'
import ProblemThree from '../pages/cms/Problem/three'
import ProblemFour from '../pages/cms/Problem/four'
import Law from '../pages/cms/Law'
import NoviceCourse from '../pages/cms/NoviceCourse'
import Privacy from '../pages/cms/Privacy'
import AppDownload from '../pages/cms/AppDownload'
import ContactUs from '../pages/cms/ContactUs'
import BTC from '../pages/cms/DigitalAssets/BTC'
import ETH from '../pages/cms/DigitalAssets/ETH'
import LTC from '../pages/cms/DigitalAssets/LTC'
import USDT from '../pages/cms/DigitalAssets/USDT'
import BCH from '../pages/cms/DigitalAssets/BCH'
import ETC from '../pages/cms/DigitalAssets/ETC'
import EOS from '../pages/cms/DigitalAssets/EOS'
import QTUM from '../pages/cms/DigitalAssets/QTUM'
import NEO from '../pages/cms/DigitalAssets/NEO'

export default [
    { path: '/', component: Index },
    { path: '/law', component: Law },
    { path: '/noviceCourse', component: NoviceCourse },
    { path: '/contactUs', component: ContactUs },
    { path: '/appDownload', component: AppDownload },
    { path: '/privacy', component: Privacy },
    { path: '/index', component: Index },
    { path: '/m_index', component: m_Index },
    { path: '/login', component: Login },
    { path: '/login/returnUrl/:returnUrl', component: Login },
    { path: '/register', component: Register },
    { path: '/findPwd', component: FindPwd },
    { path: '/exchange', component: Exchange },
    { path: '/exchange/*', component: Exchange },
    { path: '/help', component: Help },
    { path: '/message', component: Message },
    { path: '*', component: Index },
    { path: '/problem/one', component: ProblemOne },
    { path: '/problem/two', component: ProblemTwo },
    { path: '/problem/three', component: ProblemThree },
    { path: '/problem/four', component: ProblemFour },
    // { path: '/problem', component: Problem },
    { 
        path: '/problem',
        component: Problem ,
   
    },
    { path: '/digAssets/btc', component: BTC },
    { path: '/digAssets/eth', component: ETH },
    { path: '/digAssets/ltc', component: LTC },
    { path: '/digAssets/usdt', component: USDT },
    { path: '/digAssets/bch', component: BCH },
    { path: '/digAssets/etc', component: ETC },
    { path: '/digAssets/eos', component: EOS },
    { path: '/digAssets/qtum', component: QTUM },
    { path: '/digAssets/neo', component: NEO },
    { path: '/notice', component: notice},
    { 
        path: '/industryInfor',
        component:IndustryInfor,
        children: [{
            path: 'articIndex',
            component: IndustryArtic,
           
        },
        {
            path: 'index',
            component: ArticDetails
        },
       
    ]
       
    },
    {
        path: '/otc',
        component: OTCMain,
        children: [{
                path: 'trade/*',
                component: OtcTrade
            },
            {
                path: 'ad',
                component: OtcAd
            },
            {
                path: 'ad/create',
                component: adPublish
            },
            {
                path: 'ad/update',
                component: adPublish
            },
            {
                path: 'order',
                component: OtcOrder
            }
        ]
    },
    {
        path: '/finance',
        component: finance,
        children: [{
                path: '',
                component: moneyindex
            },
            {
                path: 'index',
                component: moneyindex
            },
            {
                path: 'record',
                component: record
            },
            {
                path: 'recharge',
                component: recharge
            },
            {
                path: 'withdraw',
                component: withdraw
            },
            {
                path: 'withdraw/address',
                component: withdrawAddr
            },
        ]
    },
    {
        path: '/uc',
        component: membercenter,
        children: [{
                path: '',
                component: safe
            },
            {
                path: 'safe',
                component: safe
            },
            {
                path: 'account',
                component: account
            },
        ]
    },
    {
        name: 'tradeInfo',
        path: '/otc/tradeInfo',
        component: tradeInfo
    },
    {
        path: '/checkuser',
        component: checkuser
    },
    {
        path: '/chat',
        component: chat
    },
    {
        path: '/identbusiness',
        component: identbusiness
    },
    {
        path: '/newhelp',
        component: newhelp,
        children: [{
                path: '',
                component: noticeindex
            },
            {
                path: 'index',
                component: noticeindex
            },
            {
                path: 'account',
                component: account
            },
        ]
    },
    {
        path: '/question',
        component: question
    },
    {
        path: '/agreement',
        component: agreement
    },
    {
        path: '/rate',
        component: rate
    },
    {
        path: '/about-rule',
        component: exchargerule
    },
    {
        path: '/about-protocol',
        component: userprotocol
    },
    {
        path: '/feenote',
        component: feenote
    },
    {
        path: '/about-notice',
        component: homenotice
    },
    {
        path: '/about-us',
        component: aboutus
    },
    {
        path: '/join-us',
        component: joinus
    }
];