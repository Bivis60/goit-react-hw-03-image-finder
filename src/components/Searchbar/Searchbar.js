import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export class Header extends Component {
  state = {
    data: '',
  };

  handleDataChange = event => {
    this.setState({ data: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.data.trim() === '') {
      toast.error('Please enter a value !');
      return;
    }
    this.props.onSubmit(this.state.data);
    this.setState({ data: '' });
  };

  render() {
    return (
      <header
      //  className="searchbar"
      >
        <form
          onSubmit={this.handleSubmit}
          //   className="form"
        >
          <button
            type="submit"
            //  className="button"
          >
            <ImSearch />
            <span
            //    clasNames="button-label"
            >
              Search
            </span>
          </button>

          <input
            //   className="input"
            type="text"
            value={this.state.data}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleDataChange}
          />
        </form>
      </header>
    );
  }
}
