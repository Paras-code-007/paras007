const chalk= require('chalk')
const logSymbols = require('log-symbols')

const bio= `${chalk.cyan.inverse.bold(' Paras Arora - WEB DEVELOPER | AR VR Enthusiast ')}

${chalk.italic(`An aspiring enthusiast 
A key learner, want to gather as much information as i can
`)}`

const projects= `${chalk.keyword('orange').inverse.bold(' Some key Projects: ')}
${chalk.bold.keyword('red')('Shopvela')}: ${chalk.underline.dim('http://shopvela.herokuapp.com/')}
`

const socialHandles= `
${chalk.bold.underline('Profile links')}
${chalk.inverse.bold.hex('#6cc644')(' Github: ')} ${chalk.dim.underline('https://github.com/Paras-code-007')}
${chalk.inverse.bold.hex('#1da1f2')(' Twitter: ')} ${chalk.dim.underline('https://twitter.com/paras0025')}
${chalk.inverse.bold.hex('#86888a')(' LinkedIn: ')} ${chalk.dim.underline('https://www.linkedin.com/in/paras-arora-343470197/')}
${chalk.bold.bgYellow(' Portfolio: ')} ${chalk.dim.underline('http://parascode007.com')}`

const fact= `paras is cool`
const headrepo= 'Paras-code-007'
const sbrepo= 'Repositories'

module.exports= {
    bio,
    socialHandles,
    projects,
    fact,
    headrepo,
    sbrepo
}