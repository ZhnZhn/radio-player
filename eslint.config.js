const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");

const tseslint = require("typescript-eslint");

const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = defineConfig([ 
  tseslint.configs.strict,  
  jsxA11y.flatConfigs.recommended, {
  ignores: [
    "js/*",
    "node_modules/*"   
  ],
  languageOptions: {
    globals: {

      document: true,
      window: true,
      navigator: true,     
      setTimeout: true,
      clearTimeout: true,
      setInterval: true,
      clearInterval: true,
      requestAnimationFrame: true,
      MediaMetadata: true,
     
      HTMLElement: true,
      HTMLButtonElement: true,     
      HTMLDivElement: true,
      Event: true,
      KeyboardEvent: true
      
    },   
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      }
    }
  },
  
  files: ["**/*.{js,ts,tsx}"],  
  plugins: {
    js,
    react,
    "react-hooks": reactHooks
  },
  extends: [
    "js/recommended"
  ],
     
  rules: {
    //edit eslint rules
    //"for-direction": 0,

    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "no-console": 0,
    "no-whitespace-before-property": 2,

    "default-case": 2,
    "jsx-quotes": [2, "prefer-double"],
    "no-unused-expressions": 1,
    "no-unused-vars": [1, {"args": "none"}],
    "no-use-before-define": ["error", { "variables": false }],
   
    //set react rules    
    "react/jsx-boolean-value": [1, "always"],        
    "react/jsx-uses-vars": 1,            
    "react/self-closing-comp": 1,
    
    "react/jsx-wrap-multilines": ["error", {
       "declaration": true,
       "assignment": true,
       "return": true,
       "arrow": true
    }],    

    //set react-hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    //edit jsx-a11y rules
    //"jsx-a11y/no-access-key": 0,
    "jsx-a11y/label-has-for": 0    
  }
 },{
    languageOptions: {      
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"]    
 }
])

