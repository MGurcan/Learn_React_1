import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card'
import Collapse from './components/Collapse'
const App = () => {

    return (

        <div className='container'>

            <div className='row'>
                <div className='card-group w-100'>
                    <div className='col'>

                        <Collapse href="collapseExample1">
                            <Card  image="https://picsum.photos/id/10/200/300" cardText="ali ata bak"/>
                        </Collapse>
                    </div>
                    <div className='col'>

                        <Collapse href="collapseExample2">
                            <Card cardTitle="Trabzon" image="https://picsum.photos/id/1/200/300" cardText="veli ata bak"/>
                        </Collapse>
                    </div>
                    <div className='col'>

                        <Collapse href="collapseExample3">
                            <Card cardTitle="Trabzon" image="https://picsum.photos/id/101/200/300" cardText="celi ata bak" />
                        </Collapse>
                    </div>
                </div>

            </div>

        </div>








    );
}



/*  class seklinde component 
class App2 extends React.Component{
    render(){
        return <h1>Ben muzafffer</h1>;
    }
}
*/
ReactDOM.render(
    <App />,

    document.getElementById('root')
);