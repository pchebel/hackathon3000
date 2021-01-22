import React, { useEffect, useState, Component } from 'react';
import { SnackbarContent } from '@material-ui/core';


class PostFacebook extends Component{

  onButtonClickHandler = () => {
    window.alert('Hi')
  };

  render(){ 
    return(<div className="App">
      <button onClick={this.onButtonClickHandler}>Enter</button>
    </div>);

  }
}

export default PostFacebook;
