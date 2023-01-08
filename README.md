# HOMEPAGE 

### Cześć! 

### Homepage to strona *O Mnie* oraz taki pierwszy samodzielny projekt zbudowany od zera

Powstała z myślą o przyszłym portfolio jako *Front End Developer*

- strona jest cały czas rozwijana (w miare mojej mauki)
- obecna forma oraz poprzednie do zobaczenia w repozytorium 
- domyslnie będzie to zbiór moich projektów, oraz mój mały zyciorys 

Zapraszam do obejrzenia (https://sebastiannadialkowski.github.io/Homepage/index.html)
![image](https://user-images.githubusercontent.com/121190741/211201983-4401a998-55da-418c-81d5-10d904593a62.png)



- na stronce jest przycisk do zmiany koloru czcionki, zachęcam do kliknięcia ;)
- ![image](https://user-images.githubusercontent.com/121190741/211202097-650adda8-479c-4c6e-9344-01049c70e8a4.png)


ostatnio zrobiłem mały refactoring kodu odpowiedzialnego za tą funkcje (*praca domowa moduł 5*):

było:
```javascript
let button = document.querySelector(".js-button");
let body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("body--alternative");
    button.classList.toggle("button--green");
    button.innerText = body.classList.contains("body--alternative") ? " zielony " : " czerwony "
});
```

jest:

- zostały dodane 2 funkcje : changeTextColorClick, doIt 

```javascript
{
    const button = document.querySelector(".js-button");
    const init = () => {
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

- ten element musiałem dać na zewnątrz funkcji poniewaz obie korzystają z "button" i nie chciałem powielać tego w kazdej funkcji

```javascript
{
    const button = document.querySelector(".js-button");
```

Zapraszam od odwiedzania mojej strony, co jakis czas się zmienia

Pozdrawiam !

