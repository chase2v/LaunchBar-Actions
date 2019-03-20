function runWithString(query) {
	if (!query) return

	const url = encodeURI(`omnifocus:///paste?target=/folder/c3fIdj74hVt&content=${query}: @autodone(true) @parallel(false) @due(2019-03-10 17:00)\n\t- 开发\n- 自测\n- 登记\n- 上车\n- Review\n- 验证\n- 发布\n- 回归`)
	
	LaunchBar.openURL(url)
}