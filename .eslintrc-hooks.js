module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
     "es6": true,
     "browser": true,
     "jest": true
  },
  "plugins" : [
     "@typescript-eslint", 
     "react-hooks"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",      
    "plugin:jsx-a11y/recommended", 
    "plugin:@typescript-eslint/recommended"  
  ],
  "rules": {
     "react/react-in-jsx-scope": "off",
 
     "react-hooks/rules-of-hooks": "error",
     "react-hooks/exhaustive-deps": "warn"
  }
}
