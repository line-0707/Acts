let front = document.getElementById('pdfFrame');
let back = document.getElementById('pdfBackup'); // 隠しiframe

function changeLanguage(lang) {
    let pdfUrl;
    let titleText;

    switch (lang) {
        case 'ru': pdfUrl = 'source/index.pdf'; titleText = 'Информационная Сайта'; break;
        case 'en': pdfUrl = 'source/index_en.pdf'; titleText = 'Information Site'; break;
        case 'ja': pdfUrl = 'source/index_ja.pdf'; titleText = '情報サイト'; break;
        default: pdfUrl = 'source/index.pdf'; titleText = 'Информационная Сайта';
    }

    // バックiframeに新しいPDFを読み込む
    back.src = 'pdfviewer/web/viewer.html?file=' + encodeURIComponent(pdfUrl) + '#toolbar=0&navpanes=0';
    back.onload = () => {
        back.style.display = 'block';
        back.style.opacity = 0;
        back.style.transition = 'opacity 0.5s';

        requestAnimationFrame(() => {
            back.style.opacity = 1;
            front.style.opacity = 0;
        });

        setTimeout(() => {
            front.src = back.src;
            front.style.opacity = 1;
            back.style.display = 'none';
        }, 500);
    };

    document.title = titleText;
}