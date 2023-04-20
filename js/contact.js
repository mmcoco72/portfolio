//コンタクトフォームの送信
window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".p-contact-form");
    const button = form.querySelector(".c-button");

    //送信済みの表示
    form.addEventListener("submit", (event) => {
        button.innerText = '送信完了';
        button.style.backgroundColor = `rgba(255, 255, 255, 0.2)`;
        //ネオン風
        button.style.boxShadow = "0 0 20px #E5D790";
        button.style.textShadow = "0 0 6px #E5D790";

        form.submit();

        //リロードしてトップにスクロール
        setTimeout(() => {
            location.reload();
            window.scrollTo(0, 0);
          }, 3000);

    });
});