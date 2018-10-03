const elasticsearch = require('elasticsearch');
const quotes = require('./quotes.json');

const client = new elasticsearch.Client({
	hosts: ['http://localhost:9200']
});

client.ping({
	requestTimeout: 30000,
}, function (error) {
	if (error) {
		console.log('Elasticsearch cluster is down');
	} else {
		console.log('Elasticsearch cluster is up and running');
	}
});


client.indices.create({
	index: 'quotes.factory'
}, function (error, response, status) {
	if (error) {
		console.log(error);
	} else {
		console.log('Created a new index', response);
	}
});

var bulk = [];

quotes.forEach(quote => {
	bulk.push({index: {
			_index: "quotes.factory",
			_type: "quotes_list",
		}
	})

	bulk.push(quote);
});


client.bulk({body: bulk}, function(err, response){
	if (err) {
		console.log('Bulk ops failed'.red, err);
	} else {
		console.log('Successfully imported %s'.green, quotes.length);
	}
});