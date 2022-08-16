# Proyecto ReactJS - Federico Anelli - Kickstarter Ecológico

El siguiente proyecto busca convertirse en una plataforma en donde los usuarios puedan donar dinero a causas o proyectos específicos relacionados a temas de ecología/sustentablidad.

El proyecto está inspirado en un número de plataformas como por ejemplo:

[GoFundMe](https://gofundme.com)

[Kickstarter](https://kickstarter.com)

[Patreon](https://www.patreon.com/)

De los proyectos, el más parecido es GoFundMe. Sin embargo, es diferente. Mientras que GoFundMe permite a cualquier usuario generar una causa benéfica de cualquier tema, este proyecto estará únicamente enfocado en causas benéficas y todos los proyectos integrados en la plataforma serán validados previamente. Es decir, no todos los proyectos serán aprobados.

# Dependencias utilizadas

### `gh-pages (4.0.0)`

1. El package.json tiene que tener un campo `homepage`: 

```javascript
  "homepage": "https://<github-username>.github.io/<project-repo>"
```

2.1. Instalar `gh-pages` via npm:

```javascript
  npm i --save-dev gh-pages
```

2.2. O yarn (recomendado):

```javascript
  yarn add --dev gh-pages
```

3.1. Agregar nuevo `script` a `package.json` via `yarn`:

```javascript
    "predeploy": "yarn run build",
    "deploy": "gh-pages -d build"
```

3.2. O `npm`:

```javascript
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```



### `react-router-dom (6.3.0)`

Instalar vía npm

```javascript
$ npm install react-router-dom@6
```

o Yarn

```javascript
$ yarn add react-router-dom@6
```


# Comandos

### `npm start`

Corre la app en modo de desarrollo.
Se visualiza desde [http://localhost:3000]

### `npm i ecologia`

Instala el paquete desde NPM

### `git clone https://github.com/FedericoAnelli/ecologia.git`

Clona el proyecto en un nuevo directorio
