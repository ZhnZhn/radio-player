module.exports = {
  "root": true,
  "parser":  "@typescript-eslint/parser",  
  "plugins": [   
    "@typescript-eslint",
     "react",
     "react-hooks", 
     "jsx-a11y"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",      
    "plugin:jsx-a11y/recommended", 
    "plugin:@typescript-eslint/recommended"  
  ],
  "parserOptions": {
    "ecmaVersion": 2018,  
    "sourceType": "module",  
    "ecmaFeatures": {
      jsx:  true
    },
  },
  "env": {
    "browser": true
  },
  "rules": { 
    "react/prop-types": 0,

    //set react-hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings":  {
    "react":  {
      "version": "17.0.2"  
    }
  }
}