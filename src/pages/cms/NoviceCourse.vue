<template>
    <div class="course-container">
        <h1>{{$t("noviceCourse.noviceCourse")}}</h1>
        <h2>{{$t("noviceCourse.howBuyMoney")}}</h2>
        <div class="steps">
            
            
            <p>{{$t("noviceCourse.courseStepOne")}} 
                <router-link to="">【{{$t("noviceCourse.currencyExchange")}}】</router-link>
                {{$t("noviceCourse.clickEnter")}}
            </p>
            <img src="../../assets/images/article_pic_1.jpg"/>
           
            <p>{{$t("noviceCourse.courseStepTwoHand")}} 
                <router-link to="">【{{$t("noviceCourse.iBuy")}}】</router-link>
                {{$t("noviceCourse.courseStepTwofooter")}}
                 <router-link to="">【{{$t("noviceCourse.buy")}}】</router-link>
                  {{$t("noviceCourse.sure")}}
            </p>
           <img src="../../assets/images/article_pic_2.jpg"/>
            <p>{{$t("noviceCourse.courseStepThree")}}</p>
            <img src="../../assets/images/article_pic_3.jpg"/>
             <p>{{$t("noviceCourse.courseStepFourHand")}} 
                <router-link to="">【{{$t("noviceCourse.confirmBuy")}}】</router-link>
                {{$t("noviceCourse.courseStepFourfooter")}}
            </p>
            <img src="../../assets/images/article_pic_4.jpg"/>
             <p>{{$t("noviceCourse.courseStepFiveHand")}} 
                <router-link to="">【{{$t("noviceCourse.paymentCompleted")}}】</router-link>
                {{$t("noviceCourse.thatOk")}}
            </p>
             <img src="../../assets/images/article_pic_5.jpg"/>
            <p class="tip">{{$t("noviceCourse.reminder")}}</p>
            <p>{{$t("noviceCourse.courseStepSix")}}</p>
            <img src="../../assets/images/article_pic_6.jpg"/>
            <p>{{$t("noviceCourse.courseStepSever")}}</p>
        </div>
    </div>
</template>
<style scoped>
.course-container{
    color: #ccd6eb;
    padding: 0 10%;
}
.course-container h1{
    font-size: 22px;
    padding: 18px;
    background: #1b222e;
    margin: 20px 0px;
    font-weight: normal;
}
.course-container h2{
    font-size:18px;
    background: #254166;
    font-weight: normal;
    padding:12px 12px 12px 18px;
}
.steps{
    width: 100%;
    padding: 18px;
    background: #1b222e;
    font-size: 16px;
    margin-bottom: 106px;
}

.steps img{
    margin:15px 0px 25px 15px;
}
.tip{
    margin:0px 0px 20px 15px;
}
</style>