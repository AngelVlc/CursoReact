## Requisitos

#### Globales

npm install -g yarn (instalador de paquetes)

yarn global add live-server (servidor web)

yarn global add babel-cli@6.24.1 (compilador js)

#### Proyecto

yarn init

yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2 (presets para babel)



## Ejecución

1. babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
1. live-server public


## index.html

```html
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
```

