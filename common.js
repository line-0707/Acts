document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    function applyTheme(theme) {
        const iconName = theme === 'dark' ? 'light_mode' : 'dark_mode';
        if (theme === 'dark') { body.classList.add('dark-mode'); }
        else { body.classList.remove('dark-mode'); }
        themeToggle.innerHTML = `<span class="material-symbols-outlined">${iconName}</span>`;
    }

    themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
        // 現在のページが renderPage 関数を持っているか確認してから呼び出す
        if (typeof renderPage === 'function') {
            renderPage(document.documentElement.lang);
        }
    });

    // 初回読み込み時のテーマ設定
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    // 言語スイッチャーのロジック
    const langButtons = document.querySelectorAll('.lang-switcher button');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            // 現在のページが renderPage 関数を持っているか確認してから呼び出す
            if (typeof renderPage === 'function') {
                renderPage(newLang);
            }
        });
    });
});