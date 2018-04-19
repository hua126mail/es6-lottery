import yargs from 'yargs';

const args = yargs
	.option('production', {		//区分当前是线上还是开发环境
		boolean: true,
		default: false,
		describe: 'min all scripts'
	})
	.option('watch', {
		boolean: true,
		default: false,
		describe: 'watch all fies'
	})
	.option('verbose', {		//是否要详细输出命令行的日子
		boolean: true,
		default: false,
		describe: 'log'
	})
	.option('sourcemaps', {		//映射
		describe: 'force the creation of sourcemaps'
	})
	.option('port', {
		string: true,
		default: 8080,
		describe: 'server port'
	})
	.argv
