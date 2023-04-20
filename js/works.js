//Work 作品切り替え機能

const path = "./img";

//表示画像一覧
const img_mov = `${path}/works/diary.mov`;
const img_src = new Array(`${path}/works/filter.jpg`, `${path}/works/site.png`, `${path}/works/paint.jpg`);

//インデックス番号
let numImg = 0;

changeImg = (numImg) => {
    //src属性にインデックス(=numImg)参照して画像変更
    document.getElementById("p-work__img").src = img_src[numImg];
}


//コンテンツ切り替え
const title = document.getElementsByClassName("p-work__head-title");
const detail = document.getElementsByClassName("p-work__detail");
const point = document.getElementsByClassName("p-work__point");
const term = document.getElementsByClassName("p-work__term");
const tech = document.getElementsByClassName("p-work__tech");

//インデックス番号
let numTitle = 0;
let numDetail = 0;
let numPoint = 0;
let numTerm = 0;
let numTech = 0;


//コンテンツ入れ替え
const hideContent = (content, index) => {
    content[index].style.display = "none";
}

const showContent = (content, index) => {
    content[index].style.display = "block";
}


//ボタン挙動
next = () => {
    
    //ボタンアニメーション
    //クリック時に沈む
    const btn = document.querySelector(".c-work__button");
    btn.classList.add("clicked");

    //クリックで沈んだ後
    setTimeout(() => {
        //クリック後上に上がる
        btn.style.transform = "translateY(-20px)"; transition = "all ease 1s";

        //クラス削除で元に戻る
        setTimeout(() => {
        btn.classList.remove("clicked");
        btn.style.transform = "";
        }, 300);
    }, 300);


    //コンテンツ切り替え
    const img = document.getElementById("p-work__img");
    const mov = document.getElementById("p-work__mov");
    
    // 最後まで表示したら１つ目に戻る
    //↓numImg,numTitleの数字は要素数-1
    if(numImg == 2 && numTitle == 2 && numDetail == 2 && numPoint == 2 && numTerm == 2 && numTech == 2) {
        //画像切り替え
        img.style.display = "none";
        numImg = 0;
        mov.style.display = "block";

        //文章切り替え
        hideContent(title, numTitle);
        hideContent(detail, numDetail);
        hideContent(point, numPoint);
        hideContent(term, numTerm);
        hideContent(tech, numTech);
        numTitle = 0; numDetail = 0; numPoint = 0; numTerm = 0; numTech = 0;
        showContent(title, numTitle);
        showContent(detail, numDetail);
        showContent(point, numPoint);
        showContent(term, numTerm);
        showContent(tech, numTech);

    }
    else {
        //画像切り替え
        numImg ++;
        mov.style.display = "none";
        img.style.display = "block";

        //文章切り替え
        hideContent(title, numTitle);
        hideContent(detail, numDetail);
        hideContent(point, numPoint);
        hideContent(term, numTerm);
        hideContent(tech, numTech);
        numTitle++; numDetail++; numPoint++; numTerm++; numTech++;
        showContent(title, numTitle);
        showContent(detail, numDetail);
        showContent(point, numPoint);
        showContent(term, numTerm);
        showContent(tech, numTech);
    }

    changeImg(numImg);
}


