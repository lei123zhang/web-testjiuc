<template>
    <div class="problem-container">
        <h1>{{$t("problem.faq")}}</h1>


      <ul class="problemItem">
            <li v-for="(item,index) in newlist" :class="{'active':ind === index}">
                <div @click="onlistdetails(index)">{{item.title}}</div>
            </li>
        </ul>
      
     
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
        ind:'0',
        newlist: [
            {
                id:1,
                title:'如何充币',
            },
            {
                id:2,
                title:'如何提币',
            },
            {
                id:3,
                title:'简单四步-快速交易指南',
            },
            {
                id:4,
                title:'其他常见问题',
            }
        ]
    };
  },
 methods: {
    onlistdetails(index){
        this.proItem=false;
        this.proDet=true;
         window.localStorage.setItem('id', String(index))
         if(index==0){
            this.$router.push({ path: '/problem/one',query:{}})
         }
         else if(index==1){
            this.$router.push({ path: '/problem/two',query:{}})
         }
         else if(index==2){
            this.$router.push({ path: '/problem/three',query:{}})
         }
         else if(index==3){
            this.$router.push({ path: '/problem/four',query:{}})
         }
       
        this.ind=index
        // this.$router.push({ path: '/problem/one',query:{}})
    },
  },
  created: function() {
    //  this.onlistdetails();
    
  }
};
</script>
<style scoped>
 .problem-container{
    color:#ccd6eb;
    padding:0 10%;
 }
 .problem-container h1{
    font-size:22px;
    padding:18px;
    background:#1b222e;
    margin:20px 0px;
    font-weight: normal;
}
.problemItem{
    min-height: 720px;
    padding:18px;
    background:#1b222e;
    margin-bottom:106px;
}
.problemItem li{
    display: block;
    height:56px;
    line-height:56px;
    border-bottom:1px solid #263142;
    color:#ccd6eb;
    font-size:16px;
    cursor: pointer;
}
.problemItem li:hover{
    color:#2d8cf0;
}
.problemItem li:last-child{
    border-bottom:none;
}
</style>
