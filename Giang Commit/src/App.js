import React from 'react';
import './pages/css/style.css';

class App extends React.Component {
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

export default App;
