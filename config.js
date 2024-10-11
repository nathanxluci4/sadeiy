const fs = require('fs')

global.autoReact = true
global.antiBug  = true
global.tempatDB = 'db.json'



let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update'${__filename}'`)
    delete require.cache[file]
    require(file)
})
