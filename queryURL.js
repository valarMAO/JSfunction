//获取URL地址中问号传递的信息和哈希值
function queryURL(url) {
	// 获取？和#的值
	let askIn = url.indexOf('?'),
		wellIn = url.indexOf('#'),
		askText = '',
		wellText = '';
	// #不存在
	wellIn === -1 ? wellIn = url.length : null;
	// ?存在
	askIn >= 0 ? askText = url.substring(askIn + 1, wellIn) : null;
	wellText = url.substring(wellIn + 1);
	// 获取每一部分信息
	let result = {};
	wellText !== '' ? result['HASH'] = wellText : null;
	if (askText !== '') {
		let ary = askText.split('&');
		ary.forEach(item => {
			let itemAry = item.split('=');
			result[itemAry[0]] = itemAry[1];
		})
	}
	return result;
}