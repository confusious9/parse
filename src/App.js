import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

class Article extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.article.title}</li>
        <img src={`${this.props.article.thumbnail.location}${this.props.article.thumbnail.images.small}`} alt="loading..."/>
        <li>{this.props.article.author.name}</li>
        <img src={this.props.article.author.avatar} alt="loading..."/>
        <li>{this.props.article.comment_count}</li>
      </ul>
    
    )
  }
}

export default class App extends React.Component {
  state = {
    articlesList: []
  }

  componentDidMount() {
    axios.get('https://www.jalirani.com/files/barstool.json')
      .then(response => {
        const articles = response.data;
        this.setState({ articlesList: articles });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.articlesList
            .map(article => <Article article={article} />)
        }
      </ul>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          <ReactExample name="nelson"/>
      
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
