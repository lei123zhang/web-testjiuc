<template>
    <div class="law-container">
        <h1>{{$t("law.lawTitle")}}</h1>
        <div class="lawDesc">
            <h2>{{$t("law.firstArticle")}}</h2>
            <p>{{$t("law.firstDesc")}}</p>
            <h2>{{$t("law.secondArticle")}}</h2>
            <p>{{$t("law.secondDesc")}}</p>
            <h2>{{$t("law.thirdArticle")}}</h2>
            <p>{{$t("law.thirdDesc")}}</p>
            <h2>{{$t("law.fourthArticle")}}</h2>
            <p>{{$t("law.fourthDesc")}}</p>
            <h2>{{$t("law.fifthArticle")}}</h2>
            <p>{{$t("law.fifthDesc")}}</p>
        </div>
    </div>
</template>
<style scoped>
.law-container{
    color:#ccd6eb;
    padding:0 10%;
}
.law-container h1{
    font-size:22px;
    padding:18px;
    background:#1b222e;
    margin:20px 0px;
    font-weight: normal;
}
.lawDesc{
    width:100%;
    min-height:720px;
    padding:18px;
    background:#1b222e;
    font-size:16px;
    margin-bottom:106px;
}
.lawDesc h2{
    font-size:16px;
}
.lawDesc p{
    margin-bottom:30px;
    line-height: 2em;
}
</style>
