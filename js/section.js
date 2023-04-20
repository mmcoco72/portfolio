//変数使い回し
import { sections } from "./menu.js";

//スクロールアニメーション
document.addEventListener("scroll", () => {

    //各セクションに対して
    sections.forEach(element => {

        //高さ取得
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;

        //エリア取得
        //上からスクロール時：要素のトップの高さ（位置） < 画面の高さ =画面内に要素が表示された時
        //下から〃：要素のボトムの高さ（位置） >= 0 =要素が上側に消えて見えなくなった時
        const fadeUp = (top < window.innerHeight) && (bottom >= 0);
        
        if(fadeUp) {
            element.classList.add("fade-up");
        } else {
            element.classList.remove("fade-up");
        }

    });

});


export { sections };
