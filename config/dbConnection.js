var mongo = require('mongodb');

var connMongoDB = function (){
    console.log('connect DB');
    var db = new mongo.Db(
        'got',
        // criando objeto 'Server' para o MongoDB
        new mongo.Server('192.168.200.150', //endereco servidor do banco
            27017, // porta
            {} // /configuracaoes opcionais
        ),
        {} //configuracaoes opcionais
    );

    return db ;

}

module.exports = function () {

    return connMongoDB;
}