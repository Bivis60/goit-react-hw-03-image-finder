import { ToastContainer, toast } from 'react-toastify';
import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Header } from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GetImages } from './GetImages';
import { Loader } from './Loader/Loader';
import { ButtonLoadMore } from './Button/Button';

export class App extends Component {
  state = {
    data: null,
    dataTotal: [],
    total: 0,
    page: 1,
    loading: false,
    error: null,
    showModal: false,
    empty: false,
  };

  componentDidUpdate(_, prevState) {
    const prevData = prevState.data;
    const currentData = this.state.data;
    const page = this.state.page;
    const prevStatePage = prevState.page;

    if (prevData !== currentData || prevStatePage !== page) {
      this.setState({ loading: true });

      GetImages({ currentData, page })
        .then(data => {
          if (data.hits.length === 0) {
            this.setState({ empty: true });
          }
          this.setState(prevSt => ({
            page: prevSt.page,
            dataTotal: [...prevSt.dataTotal, ...data.hits],
            total: data.total,
          }));
        })
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  addPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = data => {
    this.setState({
      data,
      dataTotal: [],
      total: 0,
      page: 1,
      loading: false,
      error: null,
      showModal: false,
      empty: false,
    });
  };

  openModal = (largeImageURL, tags) => {
    console.log(largeImageURL, tags);
  };

  render() {
    const { loading, dataTotal } = this.state;

    return (
      (
        <>
          <GlobalStyle />
          <div>
            <Header onSubmit={this.handleFormSubmit} />
            {loading && <Loader />}
            {dataTotal && (
              <ImageGallery imageData={dataTotal} openModal={this.openModal} />
            )}
            <ButtonLoadMore addPage={this.addPage} />
            <ToastContainer position="top-center" autoClose={3000} />
          </div>
        </>
      )
    );
  }
}
