import { Component } from 'react';

class App extends Component {
  state = {
    context: [],
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  render() {
    return (
      <div
        style={{
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          padding: 50,
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Phonebook
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">add contact</button>
        </form>
      </div>
    );
  }
}

export default App;
