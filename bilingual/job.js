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
        jo1: "Job Search",
        jo2: "Search for jobs you love to do in japan",
        s1: "All category",
        s2: "Part time",
        s3: "Full time",
        s4: "Remote",
        s5: "office job",
        l1: "Select Location",
        l2: "Tokyo",
        l3: "Sapporo",
        l4: "Hiroshima",
        l5: "other cities",
        fi1: "Find Job",
        hometab: "recent",
        profiletab: "full-time",
        contacttab: "part-time",
        contacttab2: "intern",
        j9: "more job post",
        jo3: "Get job information daily",
        jo4: "Subscribe to our newsletter and get a coupon code!"
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
        jo1: "求人検索",
        jo2: "日本でやりたい仕事を探してください",
        s1: "すべてのカテゴリ",
        s2: "パートタイム",
        s3: "フルタイム",
        s4: "リモート",
        s5: "事務職",
        l1: "場所を選択",
        l2: "東京",
        l3: "札幌",
        l4: "広島",
        l5: "他の都市",
        fi1: "ジョブの検索",
        hometab: "最近",
        profiletab: "フルタイム",
        contacttab: "パートタイム",
        contacttab2: "インターン",
        j9: "その他の求人情報",
        jo3: "毎日求人情報を取得します",
        jo4: "ニュースレターを購読してクーポンコードを入手してください!"
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
    let jo1 = document.getElementById("jo1");
    let jo2 = document.getElementById("jo2");
    let s1 = document.getElementById("s1");
    let s2 = document.getElementById("s2");
    let s3 = document.getElementById("s3");
    let s4 = document.getElementById("s4");
    let s5 = document.getElementById("s5");
    let l1 = document.getElementById("l1");
    let l2 = document.getElementById("l2");
    let l3 = document.getElementById("l3");
    let l4 = document.getElementById("l4");
    let l5 = document.getElementById("l5");
    let fi1 = document.getElementById("fi1");
    let hometab = document.getElementById("hometab");
    let profile = document.getElementById("profiletab");
    let contacttab = document.getElementById("contacttab");
    let contacttab2 = document.getElementById("contacttab2");
    let j9 = document.getElementById("j9");
    let jo3 = document.getElementById("jo3");
    let jo4 = document.getElementById("jo4");







    const setLanguage = (language) => {

        if (language == "jn") {
            console.log(language)
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
            jo1.innerText = trans.jn.jo1;
            jo2.innerText = trans.jn.jo2;
            s1.innerText = trans.jn.s1;
            s2.innerText = trans.jn.s2;
            s3.innerText = trans.jn.s3;
            s4.innerText = trans.jn.s4;
            s5.innerText = trans.jn.s5;
            l1.innerText = trans.jn.l1;
            l2.innerText = trans.jn.l2;
            l3.innerText = trans.jn.l3;
            l4.innerText = trans.jn.l4;
            l5.innerText = trans.jn.l5;
            fi1.innerText = trans.jn.fi1;
            hometab.innerText = trans.jn.hometab;
            profiletab.innerText = trans.jn.profiletab;
            contacttab.innerText = trans.jn.contacttab;
            contacttab2.innerText = trans.jn.contacttab2;
            j9.innerText = trans.jn.j9;
            jo3.innerText = trans.jn.jo3;
            jo4.innerText = trans.jn.jo4;

        } else if (language == "en") {
            console.log(language)
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
            jo1.innerText = trans.en.jo1;
            jo2.innerText = trans.en.jo2;
            s1.innerText = trans.en.s1;
            s2.innerText = trans.en.s2;
            s3.innerText = trans.en.s3;
            s4.innerText = trans.en.s4;
            s5.innerText = trans.en.s5;
            l1.innerText = trans.en.l1;
            l2.innerText = trans.en.l2;
            l3.innerText = trans.en.l3;
            l4.innerText = trans.en.l4;
            l5.innerText = trans.en.l5;
            fi1.innerText = trans.en.fi1;
            hometab.innerText = trans.en.hometab;
            profiletab.innerText = trans.en.profiletab;
            contacttab.innerText = trans.en.contacttab;
            contacttab2.innerText = trans.en.contacttab2;
            j9.innerText = trans.en.j9;
            jo3.innerText = trans.en.jo3;
            jo4.innerText = trans.en.jo4;
        }
    }
};