I created page about New launchers.

With simple enviroment wepbpack. I instal only React dom and Typescript by NPM. I create the tsconfig.json and use Babel to do the code transpilation and babel plugin-transform-runtimr that allows to use the async and adwait JS features. Also i add Eslint library to use the TypeScript parser, and the standard React and TypeScript rules as a basestyle guidelines in the code.  
I've explicitly added the  two React hooks rules and suppressed the react/prop-types rule because prop types aren’t relevant in React with TypeScript.
I install webpack as a bundler all our Js code into bundle.js our index.html and have a server to use during development. I add the webpack plugin babel-loader to allow Babel to trasnpile the React and typeScript code into JS. The Webpack configuration file is JavaScript based as standard. However, I used TypeScript installing a package called ts-node. To be inform about any type  error in the type checking process, i installed the forks-ts-cehcker-webpack-plugin.
Also i installed file-loader to can put fonts files and webpack reconise it.
