export function isWebp() {
    //проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 1);
        }
        webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    }
    //Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support == true ? "webp" : "no-webp";
        document.documentElement.classList.add(className);
    });
}