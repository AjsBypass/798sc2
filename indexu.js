const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    let code = input.value.trim();
    setCookie("access", btoa(code.toLocaleLowerCase()),7);
    setTimeout(window.location.href='index.html?r='+ (new Date()).getTime(),100); 
    });

function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }

    function eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }