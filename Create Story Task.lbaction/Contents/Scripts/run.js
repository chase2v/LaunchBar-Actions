function runWithString(query) {
	if (!query) return
	
	LaunchBar.openURL(`omnifocus:///paste?target=/folder/c3fIdj74hVt&content=${query}:%20@autodone(true)%20@parallel(false)%20@due(2019-03-10%2017:00)%0A%09-%20%E5%BC%80%E5%8F%91%0A-%20%E8%87%AA%E6%B5%8B%0A-%20%E7%99%BB%E8%AE%B0%0A-%20%E4%B8%8A%E8%BD%A6%0A-%20Review%0A-%20%E9%AA%8C%E8%AF%81%0A-%20%E5%8F%91%E5%B8%83%0A-%20%E5%9B%9E%E5%BD%92`)
}