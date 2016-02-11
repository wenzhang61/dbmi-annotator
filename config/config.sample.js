var config = {};
config.store = {};
config.annotator = {};

// postgres db
config.postgres = process.env.DATABASE_URL || 'postgres://<username>:<password>@<hostname/ip addresss>:<port>/<schema name>'; 

// dbmi annotator 
config.annotator.host = 'host name or ip address';
config.annotator.port = 'port';


// annotator store
config.store.host = 'host name or ip address';
config.store.port = 'port';


module.exports = config;