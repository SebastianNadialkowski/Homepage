# MY HOMEPAGE 


### Homepage is a page about me and such a first standalone project built from scratch (it's in Polish)

Established for future portfolio as *Front End Developer*.

- the site is being developed all the time (to the best of my ability)
- current form and previous ones can be seen in the repository 
- by default, it will be a collection of my projects, and my small biography 

## DEMO 
Take a look > (https://sebastiannadialkowski.github.io/Homepage/index.html)
![HOMEPAGE](https://user-images.githubusercontent.com/121190741/212138970-65481075-62fd-4465-b911-fd4f4adae0b9.gif)


## COMMENT & USED TECHNOLOGIES

- there is a button on the page to change the font color, I encourage you to click ;)
- ![image](https://user-images.githubusercontent.com/121190741/211202097-650adda8-479c-4c6e-9344-01049c70e8a4.png)

I recently did a little refactoring of the code responsible for this function

was:
```javascript
let button = document.querySelector(".js-button");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("body--alternative");
    button.classList.toggle("button--green");
    button.innerText = body.classList.contains("body--alternative") ? " zielony " : " czerwony "
});
```

now is:

- 2 features have been added: changeTextColorClick, doIt 

```javascript
{
    const button = document.querySelector(".js-button");
    const doIt = () => {
        button.addEventListener("click", changeTextColorClick);
    };

    const changeTextColorClick = () => {
        const body = document.querySelector(".body")
        body.classList.toggle("body--alternative");
        button.classList.toggle("button--green");
        button.innerText = body.classList.contains("body--alternative") ? " zielony " : " czerwony "
    };

    doIt();
}
```

- this element I had to give outside the function because they both use "button" and I didn't want to duplicate it in each function

```javascript
{
    const button = document.querySelector(".js-button");
```

### Used Technologies
- HTML
- CSS
- Java Script
- GIT
- BEM convention

## THANK YOU FOR VISITING ;)

I invite you to visit my site, it changes as I learn new things


