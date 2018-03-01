// const rl =  require('readline')

// const r1 = rl.createInterface({
//     input: process.stdin
// })

// r1.on('line', (input) => {
//     console.log('input:',input)
// })
const {spawn} = require('child_process')
const os = require('os')

function takeInput(args){
    const env = args[0].trim()
    const rest =' '+ args.slice(1).join(" ")
    let result = ''
    switch(os.platform()){
        case 'win32': result=`set ${env}&&` + rest; break;
        case 'linux': result=env + rest; break;
        default: console.log('no platform detected')
    }
    console.log('result', result)
    const cli = spawn(result, [], { stdio:'inherit',shell: true })

    cli.on('data', (data) => {
        console.log(data.toString())
    })
}

takeInput(process.argv.slice(2))