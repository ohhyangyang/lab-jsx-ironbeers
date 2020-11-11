const React = require('react');
const Layout = require('./Layout');

function RandomBeer(props){
    return(
        
    <Layout>
    <img src={props.responseFromAPI[0].image_url}/>
    <h1>{props.responseFromAPI[0].name}</h1>
    <p>{props.responseFromAPI[0].description}</p>
    <p>{props.responseFromAPI[0].tageline}</p>
    <h2>Food Pairing</h2>
    <ul>

    {
        props.responseFromAPI[0].food_pairing.map((obj)=>{
            return(
                <li>{obj}</li>
            )
        })
    }

    </ul>
    <h2>Brewer Tips:</h2>
    <p>{props.responseFromAPI[0].brewers_tips}</p>
    

    </Layout>
    )
}
module.exports = RandomBeer;