import {createContext} from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({});

function AppContext({children, value}) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

AppContext.propTypes = {
  children: PropTypes.node,
  value: PropTypes.object.isRequired,
}

export {AppContext, ThemeContext};