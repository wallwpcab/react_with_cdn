'use strict';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
// const e = React.createElement;
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }render() {
//     if (this.state.liked) {
//       return 'You liked comment number ' + this.props.commentID;
//     }return e(
//       'button',  { onClick    : () => this.setState({ liked: true }) },'Like'
//     );
//   }
// }
//
//
// document.querySelectorAll('.like_button_container')    // Find all DOM containers, and render Like buttons into them.
//   .forEach(domContainer => {
//     const commentID = parseInt(domContainer.dataset.commentid, 10); // Read the comment ID from a data-* attribute.
//     ReactDOM.render(
//       e(LikeButton, { commentID: commentID }),
//       domContainer
//     );
//   });
