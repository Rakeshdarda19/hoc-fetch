import React from "react";
import './style.css'
import Header from "./Header";
class Fetch extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {

        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            this.setState({ data: data.splice(0, 15) })
        } catch (err) {
            console.log(err)
        }
    }
    render() {

        const { data } = this.state
        return (
            <>
                <Header />
                <h2>Fake API Products</h2>
                <div className="container">
                    {data.map((item) => {
                        return (
                            <>
                                <div className="box">
                                    <div className="content">
                                        <h5>{item.title}</h5>
                                        <h6>{item.description}</h6>
                                    </div>
                                    <img src= {item.image} />
                                </div>
                            </>
                        )
                    })}

                </div>
            </>
        )
    }
}

export default Fetch

