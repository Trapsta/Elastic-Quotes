# ElasticQuotes - Quotes MiniSearch Engine with Elasticsearch

Search quotes by author(s) powered by;

  - Node
  - Express
  - VueJS
  - ElasticSearch

# Install

First provision an elasticsearch cluster on port 9200.
enable cors on elasticsearch.yml config by adding:


    http.cors.enabled : true
    http.cors.allow-origin : "*"

Install dependencies and start app.


    npm install
    node data.js
    node app.js


 
> *Go to /v2 to search from the client side.



License
----
MIT



