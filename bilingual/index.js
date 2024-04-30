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
        b1: "Browse recent jobs",
        hometab: "recent",
        profiletab: "full-time",
        contacttab: "part-time",
        contacttab2: "intern",
        j1: "full time",
        j2: "apply",
        j3: "full time",
        j4: "apply",
        j5: "full time",
        j6: "apply",
        j7: "full time",
        j8: "apply",
        j9: "more job post",
        f1: "Quick links",
        f2: "About us",
        f5: "Job openings",
        f6: "Newsletter",
        f7: "Popular cities",
        f8: "Subscribe now"


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
        b1: "最近のジョブを参照",
        hometab: "最近",
        profiletab: "フルタイム",
        contacttab: "パートタイム",
        contacttab2: "インターン",
        j1: "フルタイム」",
        j2: "適用",
        j3: "フルタイム",
        j4: "適用",
        j5: "フルタイム",
        j6: "適用",
        j7: "フルタイム",
        j8: "適用",
        j9: "その他の求人情報",
        f1: "クイックリンク",
        f2: "私たちについて",
        f5: "求人",
        f6: "ニュースレター",
        f7: "人気のある都市",
        f8: "今すぐ購読してください"
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
    let j1 = document.getElementById("j1");
    let j2 = document.getElementById("j2");
    let j3 = document.getElementById("j3");
    let j4 = document.getElementById("j4");
    let j5 = document.getElementById("j5");
    let j6 = document.getElementById("j6");
    let j7 = document.getElementById("j7");
    let j8 = document.getElementById("j8");
    let j9 = document.getElementById("j9");
    let f1 = document.getElementById("f1");
    let f2 = document.getElementById("f2");
    let f5 = document.getElementById("f5");
    let f6 = document.getElementById("f6");
    let f7 = document.getElementById("f7");
    let f8 = document.getElementById("f8");








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
            j1.innerText = trans.jn.j1;
            j2.innerText = trans.jn.j2;
            j3.innerText = trans.jn.j3;
            j4.innerText = trans.jn.j4;
            j5.innerText = trans.jn.j5;
            j6.innerText = trans.jn.j6;
            j7.innerText = trans.jn.j7;
            j8.innerText = trans.jn.j8;
            j9.innerText = trans.jn.j9;
            f1.innerText = trans.jn.f1;
            f2.innerText = trans.jn.f2;
            f5.innerText = trans.jn.f5;
            f6.innerText = trans.jn.f6;
            f7.innerText = trans.jn.f7;
            f8.innerText = trans.jn.f8;

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
            j1.innerText = trans.en.j1;
            j2.innerText = trans.en.j2;
            j3.innerText = trans.en.j3;
            j4.innerText = trans.en.j4;
            j5.innerText = trans.en.j5;
            j6.innerText = trans.en.j6;
            j7.innerText = trans.en.j7;
            j8.innerText = trans.en.j8;
            j9.innerText = trans.en.j9;
            f1.innerText = trans.en.f1;
            f2.innerText = trans.en.f2;
            f5.innerText = trans.en.f5;
            f6.innerText = trans.en.f6;
            f7.innerText = trans.en.f7;
            f8.innerText = trans.en.f8;

        }
    }
};