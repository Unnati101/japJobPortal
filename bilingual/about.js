const trans = {
    en: {
        nah: "Home",
        na1: "About Us",
        na2: "Job Search",
        nl: "login",
        nle: "Job Seeker login",
        nls: "employee login",
        sn: "sign up",
        sns: "job seeker sign up",
        sne: "employee sign up",
        f1: "Quick links",
        f2: "About us",
        f5: "Job openings",
        f6: "Newsletter",
        f7: "Popular cities",
        ab1: "About Us",
        ab2: "Finding right job for you in japan",
        ab3: "Why choose us",
        ab4: "We are a global employment platform allowing people seek their dream jobs and employers list their job openings as well as identify the right resource all in one place and at no cost! ",
        ab5: "The motive to start this platform is to, help connect both employers and job seekers without spending any money and also to reduce time.",
        ab6: "Testimonies"


    },
    jn: {
        nah: "家",
        na1: "私たちについて",
        na2: "求人検索",
        nl: "ログイン",
        nle: "求職者ログイン",
        nls: "従業員ログイン",
        sn: "サインアップ",
        sns: "求職者登録",
        sne: "従業員登録",
        f1: "クイックリンク",
        f2: "私たちについて",
        f5: "求人",
        f6: "ニュースレター",
        f7: "人気のある都市",
        ab1: "当社について",
        ab2: "日本であなたにぴったりの仕事を見つけてください。",
        ab3: "当社を選んだ理由",
        ab4: "私たちは、人々が夢の仕事を探し、雇用主が求人情報をリストアップし、適切なリソースを 1 か所で無料で特定できるようにする世界的な雇用プラットフォームです! ",
        ab5: "このプラットフォームを開始する動機は、お金をかけずに雇用主と求職者の両方を結びつけるのを支援し、時間を短縮することです。",
        ab6: "証言"
    }
}

window.onload = function () {

    const languageSelecttop = document.querySelector(".lang");
    languageSelecttop.addEventListener("change", (event) => {
        setLanguage(event.target.value)
    })


    let nah = document.getElementById("nah");
    let na1 = document.getElementById("na1");
    let na2 = document.getElementById("na2");
    let nl = document.getElementById("nl");
    let nls = document.getElementById("nls");
    let nle = document.getElementById("nle");
    let sn = document.getElementById("sn");
    let sns = document.getElementById("sns");
    let sne = document.getElementById("sne");
    let f1 = document.getElementById("f1");
    let f2 = document.getElementById("f2");
    let f5 = document.getElementById("f5");
    let f6 = document.getElementById("f6");
    let f7 = document.getElementById("f7");
    let ab1 = document.getElementById("ab1");
    let ab2 = document.getElementById("ab2");
    let ab3 = document.getElementById("ab3");
    let ab4 = document.getElementById("ab4");
    let ab5 = document.getElementById("ab5");
    let ab6 = document.getElementById("ab6");








    const setLanguage = (language) => {

        if (language == "jn") {
            console.log(language)
            ab1.innerText = trans.jn.ab1;
            ab2.innerText = trans.jn.ab2;
            nah.innerText = trans.jn.nah;
            na1.innerText = trans.jn.na1;
            na2.innerText = trans.jn.na2;
            nl.innerText = trans.jn.nl;
            nls.innerText = trans.jn.nls;
            nle.innerText = trans.jn.nle;
            sn.innerText = trans.jn.sn;
            sns.innerText = trans.jn.sns;
            sne.innerText = trans.jn.sne;
            f1.innerText = trans.jn.f1;
            f2.innerText = trans.jn.f2;
            f5.innerText = trans.jn.f5;
            f6.innerText = trans.jn.f6;
            f7.innerText = trans.jn.f7;
            ab1.innerText = trans.jn.ab1;
            ab2.innerText = trans.jn.ab2;
            ab3.innerText = trans.jn.ab3;
            ab4.innerText = trans.jn.ab4;
            ab5.innerText = trans.jn.ab5;
            ab6.innerText = trans.jn.ab6;

        } else if (language == "en") {
            console.log(language)
            ab1.innerText = trans.en.ab1;
            ab2.innerText = trans.en.ab2;
            nah.innerText = trans.en.nah;
            na1.innerText = trans.en.na1;
            na2.innerText = trans.en.na2;
            nl.innerText = trans.en.nl;
            nls.innerText = trans.en.nls;
            nle.innerText = trans.en.nle;
            sn.innerText = trans.en.sn;
            sns.innerText = trans.en.sns;
            sne.innerText = trans.en.sne;
            f1.innerText = trans.en.f1;
            f2.innerText = trans.en.f2;
            f5.innerText = trans.en.f5;
            f6.innerText = trans.en.f6;
            f7.innerText = trans.en.f7;
            ab1.innerText = trans.en.ab1;
            ab2.innerText = trans.en.ab2;
            ab3.innerText = trans.en.ab3;
            ab4.innerText = trans.en.ab4;
            ab5.innerText = trans.en.ab5;
            ab6.innerText = trans.en.ab6;
        }
    }
};