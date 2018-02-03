# jquery-bgimg-unsplash

### Plugin para mostrar imagenes de fondo random, imagenes provenientes de la pagina unsplash

#### Instalación
```
npm install jquery-bgimg-unsplash
```

##### Necesitas cargar primero jQuery
```html
<script src="/node_modules/jquery/dist/jquery-js"></script>
<script src="/node_modules/jquery-bgimg-unsplash/src/index.js"></script>
```


Before usign the Unsplash API, you need to register as developer then you must put the **CLIENT_ID** to be enable to get photos from Unsplash API

```
window.BgimgUnsplash.setup(clientId);
```

#### How it wroks?
```html
<div id="bgimgUnsplash"></div>
```

```js
$(document).ready(function(){
	window.BgimgUnsplash.setup(clientId);
    $('#bgimgUnsplash').BgimgUnsplash({
    	minHeight: '700px', //by default it´s 800 px
        background-Size: 'contain', // by default it´s cover
        background.Position: 'top center', // by default it´s center
        background.Color: 'red' //by default it's black
    });
});
```
