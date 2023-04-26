import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from 'GlobalStyle';
import { Loader } from './Loader/Loader';
import { Header } from './Searchbar/Searchbar';
import { Component } from 'react';

export class App extends Component {
  state = {
    data: '',
  };
  handleFormSubmit = data => {
    this.setState({ data });
    console.log(data);
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div>
          <Header onSubmit={this.handleFormSubmit} />
          <Loader />
          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </>
    );
  }
}
// const API_KEY =  '34475511-5e81bdf830d449013fbfa8a58' ;
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
