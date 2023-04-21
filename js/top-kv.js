window.onload = function() {
    //top__kvのアニメーション
    gsap.to(".l-header__deco1, .l-header__deco2, .l-header__deco3", {
        y: "110px",
        duration: 1,
        ease: "outBack",
        stagger: {
            from: "randam",
            amount: 1
        }
    });

    gsap.to(".l-header__deco4", {
        y: "160px",
        duration: 1,
        ease: "outBack",
        stagger: {
            amount: 1
        }
    });

    //ヘッダーの背景ぼかし
    window.addEventListener('scroll', () => {
        const header = document.querySelector(".l-header__inner-wrapper");
        let blurFlag = false;
        
        window.addEventListener('scroll', () => {
            //スクロール位置取得
            const scrollY = window.pageYOffset;

            if (scrollY > 80) {
                // header.style.backdropFilter = 'blur(2px)';
                header.classList.add('is-blur');
                blurFlag = true;
            } else {
                // header.style.backdropFilter = 'blur(0)';
                header.classList.remove('is-blur');
                blurFlag = false;
            }
        });
    });

}


