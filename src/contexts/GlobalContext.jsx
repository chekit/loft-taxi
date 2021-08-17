import React, { Component, createContext } from 'react';

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
    state = {
        isLoggedIn: false
    };

    render() {
        const { children } = this.props;

        return (
            // @TODO: Refactor global provider
            <GlobalContext.Provider value={{ ...this.state }}>
                <section>
                    {children}
                </section>
            </GlobalContext.Provider>
        );
    }
}

export default GlobalContextProvider;