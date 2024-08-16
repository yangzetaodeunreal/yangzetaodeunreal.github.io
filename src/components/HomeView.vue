<script setup lang="ts">
</script>

<template>
    <section class="section intro">
        <img src="../assets/avatar.jpg" alt="avatar" class="avatar-box">
        <div class="intro-content">
            <p v-html="$t('home.shortIntro')"></p>
        </div>
    </section>
    <section class="section skills-section">
        <h2>{{ $t('home.mySkills')  }}</h2>
        <div class="skills-list">
            <div class="skill-item">
                <img src="../assets/c-sharp-svgrepo-com.svg" alt="c-sharp">
                <p>{{ $t('home.skillCSharp') }}</p>
            </div>
            <div class="skill-item">
                <img src="../assets/vue-svgrepo-com.svg" alt="c-sharp">
                <p>{{ $t('home.skillVue') }}</p>
            </div>
            
            <div class="skill-item">
                <img src="../assets/icons8-sql-server.svg" alt="c-sharp">
                <p>{{ $t('home.skillSQL') }}</p>
            </div>
            <div class="skill-item">
                <img src="../assets/golang-svgrepo-com.svg" alt="c-sharp">
                <p>{{ $t('home.skillGolang') }}</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons8-git.svg" alt="c-sharp">
                <p>{{ $t('home.skillGit') }}</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons8-kubernetes.svg" alt="c-sharp">
                <p>{{ $t('home.skillK8s') }}</p>
            </div>
        </div>
        <p class="skill-more">{{ $t('home.skillMore') }}</p>
    </section>
    <section class="section career-line-section">
        <h2 style="text-align: center;">{{ $t('home.careerLine')}}</h2>
        <div class="career-list">
            <div class="career-node">
                <img src="../assets/Kooboo.png" alt="">
                <p>{{ $t('home.careerIntern.title')}}</p>
                <p class="career-date">{{ $t('home.careerIntern.date')}}</p>
            </div>
            <img class="story-line-icon" draggable="false" src="../assets/storyLine.svg" width="50px">
            <div class="career-node">
                <img src="../assets/xmut.jpg" alt="">
                <p>{{ $t('home.careerGraduated.title')}}</p>
                <p class="career-date">{{ $t('home.careerGraduated.date')}}</p>
            </div>
            <img class="story-line-icon" draggable="false" src="../assets/storyLine.svg" width="50px">
            <div class="career-node">
                <img src="../assets/vitaminstore.svg" width="300px" alt="">
                <p>{{ $t('home.careerVitaminstore.title')}}</p>
                <p class="career-date">{{ $t('home.careerVitaminstore.date')}}</p>
            </div>
        </div>
    </section>
    <section id="contact-me" class="section contact-section">
        <h2 style="text-align: center;">{{ $t('home.contactMe') }}</h2>
        <div class="contact-content">
            <img src="../assets/wechatQRCode.png" alt="wechatQRCode">
            <div>
                <p>{{ $t('home.wechat')}}:<a href="https://u.wechat.com/MNHs6i2BJ0vDAwnM2mdX9Nw?s=2">danieldeweixinhao</a></p>
                <p>{{ $t('home.email') }}:<a href="mailto:zetao_yang@outlook.com">mail@zetaoyang.com</a></p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section {
    padding-top: 20px;
}

.section h2 {
    color: orange;
    font-size: xx-large;
    padding: 20px;
}

.intro {
    display: flex;
    gap: 10px;
}

@media only screen and (max-width: 850px) {
    .intro {
        flex-wrap: wrap;
    }
}

.intro img {
    border-radius: 50% 0px 50% 0px;
    width: 97%;
    max-width: 500px;
    height: fit-content;
    border: 5px solid orange;
}

.skills-section {
    text-align: center;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 50px;
}

.skill-item {
    width: 300px;
}

.skill-item img {
    width: 100px;
}

.skill-more {
    color: gray;
    padding: 50px;
}


.career-list {
    display: flex;
    gap: 5px;
    flex-direction: column;
}

.career-node {
    text-align: center;
}

.career-date {
    color: gray;
}

.story-line-icon {
    align-self: center;
    padding-bottom: 20px;
}

.contact-content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
}

.contact-content img {
    width: 100%;
    max-width: 250px;
    height: auto;
}
</style>