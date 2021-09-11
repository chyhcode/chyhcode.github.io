var routes = {
	"g": "https://www.google.com.tw/",
	"s": "https://drive.google.com/drive/folders/0B2w1u6MIh8tjdUNldHQxQkcxVFE",
	"p": "http://portal.ntuh.gov.tw/",
	"b": "https://chyhcode.github.io/NTUH-tools/BookmarkletCreator/BookmarkletCreator.html",

	"google": "https://www.google.com.tw/",
	"starred": "https://drive.google.com/drive/starred",
	"shared": "https://drive.google.com/drive/folders/0B2w1u6MIh8tjdUNldHQxQkcxVFE",
	"portal": "http://portal.ntuh.gov.tw/",
	"bookmarklet": "https://chyhcode.github.io/NTUH-tools/BookmarkletCreator/BookmarkletCreator.html"
}

// 從 routes 中找到該關鍵字所對應到的網址
var url = routes[location.pathname.replace('/','')];
// 若該關鍵字有設定對應的網址，則轉跳到該網址中，若沒有則回到首頁
location.href = url ? url : 'https://chyhcode.github.io';