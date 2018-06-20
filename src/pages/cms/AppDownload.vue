<template>
    <div class="appDownload-container">
        <div class="itemBox">
            <h1>客户端下载</h1>
            <!-- <Row>
                <Col span="6"> -->
                    <ul class="leftMenu">
                        <li>客户端下载教程</li>
                        <li v-for="(item,index) in downloadlist" class="" :class="{'iosTab': ind===index}">
                            <div to=""  @click="tabShowItem(index)">{{item.title}}</div>
                        </li>
                        <!-- <li><router-link to="">Android客户端下载</router-link></li> -->
                    </ul>
                <!-- </Col>
                <Col span="18"> -->
                    <div class="iosDetails" v-show="iosDownload">
                        <h2>ios客户端下载</h2>
                        <div class="iosStep">
                            <div>iOS客户端下载帮助文档</div>
                            <p>1、打开久财网APP iOS端下载地址 : <router-link to="https://fir.im/q8xk">https://fir.im/q8xk </router-link> ，扫码下载</p>
                            <img src="../../assets/images/down_pic_1.png"/>
                            <p>2、扫码完毕，出现以下界面，根据提示点击【右上角】按钮，选择【在Safari中打开】</p>
                            <img src="../../assets/images/down_pic_2.png"/>
                            <p>3、浏览器打开后，点击【下载安装】并同意在iTunes中【打开】链接，此时开始下载安装</p>
                            <img src="../../assets/images/down_pic_3.png"/>
                            <p>4、下载完成后，回到桌面点击【久财网】APP，弹出以下弹窗，点击【取消】</p>
                            <img src="../../assets/images/down_pic_4.png"/>
                            <p>5、找到【 设置 —> 通用 —> 设备管理 】并点击，如下图所示</p>
                            <img src="../../assets/images/down_pic_5.png"/>
                            <p>6、点击 “ Hefei Spark Inform.... ” ,进入下一界面，点击 “ 信任Hefei Spark Inform.... ” 弹出以下弹窗，点击“信任”</p>
                            <img src="../../assets/images/down_pic_6.png"/>
                            <p>7、信任之后便完成了久财网APP的下载安装，可以打开APP开始使用了。</p>
                        </div> 
                    </div>

                     <div class="iosDetails" v-show="andDownload">
                        <h2>Android客户端下载</h2>
                        <div class="iosStep">
                            <div>Android客户端下载帮助文档</div>
                            <p>1、打开久财网APP Android端下载地址 : <router-link to=" https://fir.im/8a3e"> https://fir.im/8a3e </router-link> 扫码下载安装包</p>
                            <img src="../../assets/images/down_code_andr.png"/>
                            <p>2、安装包下载完毕，按系统提示完成安装即可使用。</p>
                            
                        </div>
                    </div>
                <!-- </Col>
            </Row> -->
        </div>
    </div>
</template>
<script>
    export default {
  components: {},
  data() {
    return {
       ind:0,
        iosDownload:true,
        andDownload:false,
        downloadlist: [
            {
                id:0,
                title:'ios客户端下载',
            },
            {
                id:1,
                title:'Android客户端下载',
            },
            
        ]
    };
  },
mounted(){
    this.itemJudge()
},
 methods: {
   tabShowItem(index){
       this.ind=index;
        if(index==0){
            this.iosDownload=true;
            this.andDownload=false;
        }else{
            this.iosDownload=false;
            this.andDownload=true;
        }
  },
  itemJudge(){
   var type= this.$route.query.type;
   if(type=='android'){
       this.iosDownload=false;
        this.andDownload=true;
        this.ind=1;
   }else{
        this.iosDownload=true;
        this.andDownload=false;
         this.ind=0;
   }
  },
}
}
 </script>
<style scoped>
.appDownload-container{
    width: 100%;
    background: #263142;
}
.itemBox{
    position: relative;
    padding:0px 10% 0px;
    margin: 0 auto 106px;;
    background:#263142;
    color:#ccd6eb;
  }
  .itemBox h1{
      font-size: 22px;
    padding: 18px;
    background: #1b222e;
    margin: 20px 0px;
    font-weight: normal;
  }
  .leftMenu{
       width:200px; 
       position: absolute;
      background:#1b222e;
  }
  .leftMenu li{
      font-size:16px;
      line-height:60px;
      color:#878f9f;
       text-align: center;
  }
  .leftMenu li>div{
     cursor: pointer;
      color:#ccd6eb;
     
  }
   .leftMenu li.iosTab{
      background:#1c324e;
  }
  .iosDetails{
      margin-left:220px;
  }
  .iosDetails h2{
      padding:20px 30px;
      text-align:left;
      background:#1c324e;
      font-size:16px;
      font-weight: normal;

  }

  .iosStep{
      background:#1b222e;
      padding:20px 30px;
      font-size:14px;
      text-align: left;
      min-height:720px;
  }
  .iosStep p{
      margin:20px 0px;
}
</style>
