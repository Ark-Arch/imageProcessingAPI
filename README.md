SCRIPTS
1. npm install
2. npm run standardize => to pretty up and lint up the code
3. npm run dev => to build the code, and then run unit tests
4. npm run start => to start the server

5. npm run prettier => to pretty up the code alone
6. npm run lint => to lint up the code alone
7. npm run build => to transpile transcript to javascript alone
8. npm run jasmine => to run unit tests alone


accessible endpoints
1. a simple welcome page (localhost:3000/)

2. a list of available images (localhost:3000/api/images)

3. to resize your image
(localhost:3000/api/images?filename=fjord*width=700&height=500)

NOTE the following about the queries
1. the filename must exist
2. the width has to be greater than 0
3. the height has to be greater than 0
4. there must exist width and height queries (although the query filename could exist alone)