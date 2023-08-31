const express = require(`express`)
class Server {
    constructor(){
        this.port = process.env.port||3000
        this.app = express()
        this.routers()
    }
    routers(){
        this.app.get('/', (req, res) => {
            res.send('Hello World!!!!!')
        })
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}
module.exports = Server;