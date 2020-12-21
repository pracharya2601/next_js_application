import React from 'react';
export const languageContext = React.createContext();

export class LanguageProvider extends React.Component {
state = {
    name: 'name'
}
render() {
    return (
        <languageContext.Provider lang={this.state}>
            {this.props.children}
        </languageContext.Provider>
    )
 }
}