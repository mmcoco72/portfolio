//ハンバーガーメニュー
let section;
let sections;

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("l-hamburger");
    const circle = document.querySelector(".l-menu__circle");
    const menu = document.querySelector(".l-menu-wrapper");
    const body = document.querySelector("body");
    
    //activeクラスを付与する要素
    const elements = [hamburger, circle, menu, body];
    //セクション名の要素取得
    const items = document.querySelectorAll(".l-menu__item-name");
    
    //クリック時にクラス付与
    function toggleActive() {

        elements.forEach((element) => {
            element.classList.toggle("active");
        });

        //ハンバーガーメニュークリック時セクション名をクリックできるようにする
        if(menu.classList.contains("active")) {
            items.forEach((item) => {
                item.removeAttribute("disabled");
            });
        //閉じたときはクリックできないようにする
        } else {
            items.forEach((item) => {
                item.setAttribute("disabled", "");
            });
        }

    }

    hamburger.addEventListener("click", toggleActive);


    //ハンバーガーメニュー内のセクション名クリックで移動
    const about = document.getElementById("about");
    const work = document.getElementById("work");
    const contact = document.getElementById("contact");
    sections = [about, work, contact];




    //セクション名に対してのアクション
    items.forEach((item) => {
        
        item.addEventListener("click", (e) => {

            //HTMLからデータ属性を取得
            const i = e.target.dataset.index;

            //選択したセクションの判定
            section = sections[i];

            //セクションごとに移動先を指定
            window.scrollTo( {
                top: section.offsetTop - 104,
                behavior: "smooth"
            });

            //セクション名をクリックできないように
            item.setAttribute("disabled", true);
        });
    });

    //メニューを閉じる
    items.forEach((item) => {
        item.addEventListener("click", () => {
            toggleActive();
        })
    });

});



//大画面の時のヘッダーメニュー
const navItems = document.querySelectorAll(".l-nav__item");

navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const section = sections[index];
        const sectionTop = section.offsetTop;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
    });
});

export { sections };
