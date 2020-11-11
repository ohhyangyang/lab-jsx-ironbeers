const React = require('react');
const Layout = require('./Layout');

function Home() {

  return (
    <Layout>
      <img src="/images/beer.png"/>
      <a href="/beers">Check the Beers!</a>
      <a href="/random-beer">Check a random Beer</a>
    </Layout>
  );
  
}


module.exports = Home;