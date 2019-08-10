import 'whatwg-fetch';
import {apiURI, apiCredential, apiHeader} from '../constants/API';

export const LOGIN = 'LOGIN'
export const CONNECT_FAILED = 'CONNECT_FAILED'


const postAction = (postData, successAction, successFunction, failedFunction) => (  
    (dispatch, getState) => {
      let state = getState()
      let action = postData.action;
      var myRequest = new Request(apiURI);
      var myInit = { method: 'GET',             
                    headers: apiHeader
                  };
    
      fetch(myRequest, myInit).then(function(response) {     
      return response.json();
        }).then(function(data) {
          dispatch({ type: successAction, payload: { data: data }});

        
          
        }).catch(() => dispatch({ type: CONNECT_FAILED }));
                
        
    }
);

export const login = (username, password) => (

  (dispatch, getState) => {
    
    let postData = {action: 'login&username='+username+'&password='+password};
    dispatch(postAction(postData, LOGIN)); 
  }
);