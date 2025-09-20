function changeLanguage(lang) {
    var pdfUrl;
    switch (lang) {
        case 'ja':
            pdfUrl = '/source/index_ja.pdf';
            break;
        case 'en':
            pdfUrl = '/source/index_en.pdf';
            break;
        case 'ru':
            pdfUrl = '/source/index.pdf';
            break;
        default:
            pdfUrl = '/source/index.pdf'; // デフォルトは英語
    }

    // PDF.js のビューアに新しいPDFを読み込ませる
    PDFViewerApplication.open(pdfUrl);
}