import React from 'react';
import Axios from 'axios'

class Question extends React.Component {
    componentDidMount() {
        const url = 'http://10.1.10.177:8099/apis/hoidap/danhsachcautraloi?id_question=1&fbclid=IwAR0f4fKTCeA7r9ChMQDXi8M_DiN70IqLB_ugOVa441dl6R4WIu02V7aDUig'
        Axios.get(url)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
        <div className="form">
            <h1 className="header">QUIZ</h1>
            <p>This is a question</p>
            <div className="">
            <div>
                <button className="question" onClick={function() { alert('click'); }}>
                1{this.props.value}
                </button>
                <button className="question" onClick={function() { alert('click'); }}>
                2{this.props.value}
                </button>
            </div>
            <div>
                <button className="question" onClick={function() { alert('click'); }}>
                3{this.props.value}
                </button>
                <button className="question" onClick={function() { alert('click'); }}>
                4{this.props.value}
                </button>
            </div>
            </div>
            <button className="btn-control" onClick={function() { alert('click'); }}>
            <span>Previous</span>{this.props.value}
            </button>
            <button className="btn-control" onClick={function() { alert('click'); }}>
            <span>Next</span>{this.props.value}
            </button>
            <button className="btn-control" onClick={function() { alert('click'); }}>
            <span>Quit</span>{this.props.value}
            </button>

        </div>
        );
    }
}

export default Question;