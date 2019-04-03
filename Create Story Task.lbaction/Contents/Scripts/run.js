function runWithString(query) {
	if (!query) return

	const result = [
		{
			title: '创建',
			action: 'create',
			actionArgument: query
		}
	]

	const inputDeadlineDate = query.match(/(\d{1,4}\-){1,2}\d{2}/) && query.match(/(\d{1,4}\-){1,2}\d{2}/)[0]
	let outputDeadlineDate = inputDeadlineDate;
	if (inputDeadlineDate) {
		outputDeadlineDate = inputDeadlineDate
			.split('-')
			.map(unit => {
				if (unit.length < 2) {
					unit  = '0' + unit
				}
				return unit;
			})
			.join('-')
	}
	const deadlineTime = query.match(/\d{2}\:\d{2}/) && query.match(/\d{2}\:\d{2}/)[0]

	if (outputDeadlineDate || deadlineTime) {
		if (outputDeadlineDate) query = query.replace(inputDeadlineDate, '')
		if (deadlineTime) query = query.replace(deadlineTime, '')
		
		result.push({
			title: '创建并设置截止日',
			subtitle: query + ' ' + outputDeadlineDate + '' + deadlineTime,
			alwaysShowsSubtitle: true,
			action: 'createWithDeadline',
			actionArgument: {
				query,
				deadlineDate: outputDeadlineDate,
				deadlineTime
			}
		})
	}

	return result
}

function create(query) {
	const url = encodeURI(`omnifocus:///paste?target=/folder/c3fIdj74hVt&content=${query}: @autodone(true) @parallel(false)\n\t- 开发\n- 自测\n- 登记\n- 上车\n- Review\n- 大巴车验证\n- master验证\n- 发布\n- 回归`)
	
	LaunchBar.openURL(url)
}

function createWithDeadline({ query, deadlineDate, deadlineTime = '21:00' }) {
	const url = encodeURI(`omnifocus:///paste?target=/folder/c3fIdj74hVt&content=${query}: @autodone(true) @parallel(false) @due(${deadlineDate || new Date().toLocaleDateString().replace(/\//g, '-')} ${deadlineTime})\n\t- 开发\n- 自测\n- 登记\n- 上车\n- Review\n- 大巴车验证\n- master验证\n- 发布\n- 回归`)

	LaunchBar.openURL(url)
}
