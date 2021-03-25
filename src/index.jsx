import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


window.fbAsyncInit = function() {
    window.FB.init({
      appId      : '421404729124755',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0',
      status: true,
      frictionlessRequests: true,
      useCachedDialogs: true,
      oauth: true
    });
    
      
    window.FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


ReactDOM.render(<App/>,document.getElementById('root'));

