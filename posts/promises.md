---
title: "Promises and the DOM"
subtitle: "Basics on what a promise is and the Document Object Model"
date: "08/13/2022"
---


Promises. Asíncronas por naturaleza

Una *Promesa* (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve la promesa de proporcionar el valor en algún momento en el futuro.

```jsx
const promesa = new Promise((resolve, reject) => {

	setTimeout( () => {
	console.log( '2 segundos después' )
  }, 2000 )
 

});
```

A `[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)` is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Las promesa se crean con un argumento que es un CALLBACK, con dos argumentos

Resolve y Reject.

Es una convencion que se llamen asi

Resolve se ejecuta si la promesa es exitosa

Reject se ejecuta si la promesa presenta una falla o algo no se pueda cumplir

y necesite notificarle a la persona que espera la promesa q esta no se pudo cumplir

then → la promesa es exitosa. 

catch→dio error.

finally→despues del then y depsues del catch. 

```jsx
const promesa = new Promise((resolve, reject) => {

	setTimeout( () => {

  }, 2000 )
 
	promesa.then( () => {
		console.log('Then de la promesa') 
} )

});
```

como le mandamos argumentos al then?

The **DOM**

Document Object Model

The lawyer is the advocate, someone who speaks on behalf of another person. 

Likewise, this does happen in JS.

If we go to the console and type in Window.

We have an object.

This object is to JS the advocate.

It gives us information, details API’s on this particular window. 

This is object is a way of interacting and communicating with this window object 

Overall tree structure and nodes

It’s a document represented by objects and it’s modeled upon how you develop your html file. 

I can use document.querySelectorAll to select different types of selectors as I would with CSS. 

e.g. 

```jsx
document.querySelectorAll(  ‘p[data-content="123"] , body > h1.pClass > span‘);
```

I’d be accessing the p tag with attribute data-content=”123” and the h1 with class pClass within the body, and the span tag within the h1.

I can console log an element, by id using console.log but then I can also output it into the console via console.dir() to see the object that represents that element.

## **innerText and innerHTML**

Change the text of an element in the DOM accessing its innerText using document.getElementById(’hello’).innerText = ‘New String’

The difference is that I can add tag elements using innerHTML, e.g.

I can say

document.querySelectorAll(’hello’).innerHTML = ‘<span>Hi</span>’

![Captura de Pantalla 2022-12-28 a la(s) 13.28.55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d72fe17-06de-4b09-bb9f-fffe855b431d/Captura_de_Pantalla_2022-12-28_a_la(s)_13.28.55.png)

Also, in the object, i can ***see*** the html inside innerHTML whereas in innerText it won’t show. 

the document object also shows us there is an outerHTML and an outerText

When selecting querySelectorAll for example, it returns an array, so we need to access the index number to enter.

 Meaning: 

```html
<h1>
            Javascript Essentials
            <span>
                asd
            </span>
</h1>
```

```jsx
var spanH1 = document.querySelectorAll('h1 span');

spanH1[0].innerHTML = "new text here!!!"
```

**Event listeners**

We can have an inline event like

```html
<select name="cars" id="" onclick="console.log('you clicked me')">
            <option value="Volvo">Volvo</option>
            <option value="Saab">Saab</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
        </select>
```

OR

```jsx
var select = document.getElementsByName('cars')[0];
select.onclick = function(event){
    console.log(event)
};
```

on a script. 

We can only have ONE inline event. 

If we needed to have multiple events, we could have an addEventListener like so:

```jsx
select.addEventListener('click', function(event) {
    console.log('You have clicked on me!')
})

select.addEventListener('click', function(event) {
    console.log('You have clicked on me 2!')
})
```

See, we have two different event listeners. BUT the cb function is anonymous

I could define a function to use later on in the callback. Like, if I needed to remove it with a .removeEventListener e.g.