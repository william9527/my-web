import Immutable from 'immutable';

export const authURI = (process.env.NODE_ENV==='production')?
                        '/auth.php':process.env.REACT_APP_API+'/auth.php';
export const apiURI = 'https://api.hearthstonejson.com/v1/25770/enUS/cards.collectible.json';

export const apiCredential = 'include';
export const apiHeader = {'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'};

export const InitQuery = {from: null, to: null, source: '', 
        target: '', risk: [], detector: [], ruleID: '', message: ''};


export const State = Immutable.fromJS(
    {       
        pwdstep: 0,       
        verifypwd: null,
        mainTab: 0,
        logQuery: InitQuery,
        show_diagram: false
    });
