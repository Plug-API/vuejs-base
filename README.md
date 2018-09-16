# vuejs-base
Project with Vue-JS 2 to be used as the basis for new projects.
Already included WebPack2, VueX, VueRouter and Vuetify.
Created originally with Vue-Cli 3.

```
Artifacts:
.
├── dist : Arquivos produtivos
├── src : Fontes de desenvolvimento
|   ├── assets : Imagens e outras dependências
|   ├── components : WebCompnents Vue
|   ├── plugins : Plugins integrados com Vue
|   ├── store : Vuex para armazenamento de estado
│   └── views : WebComponents renderizados pelo roteador
|   main.js : Arquivo de configuração principal do Vue
|   router.js : VueRouter para controle de Roteamento
├── tests : Testes
|   ├── e2e : Testes de comportamento
│   └── unit : Testes unitários
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```
