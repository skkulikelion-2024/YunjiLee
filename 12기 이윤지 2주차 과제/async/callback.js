`use strict`;


//JavaScript is synchronous.
//Execute the code block by orger after hoisting.
//hoisting: var, function declaration(선언들이 가장 위에 올라가는거)

console.log(`1`);
setTimeout(() => console.log(`2`), 1000);
console.log(`3`);

//synchronous callback
function printimmediately(print) {
    print();
}

    printimmediately(() => console.log(`hello`));
    //asynchronous callback
function printwithdelay(print, timeout){
    setTimeout(print, timeout);
}
printwithdelay(() => console.log('async callback'), 2000);

//callback hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
    if (
        (id === `esme` && password ===`dream`) ||
        (id === `coder` && password === `academy`)
    ) {
  onSuccess(id);
} else {
    onError(new Error('not found'));
}
    }, 2000);
    }


getRoles(user, onSuccess, onError) {
    setTimeout(() => {
        if (user === `esme`) {
            onSuccess({ name: `esme`, role: `admin` });
        } else {
            onError(new Error(`no access`));
        }
    }, 1000);
}
}

const userStorage = new UserStorage();
const id = prompt(`enter your id`);
const password = prompt(`enter your password`);
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userwithRole => {
                alert(
                    `Hello ${userwithRole.name}, you have a ${userwithRole.role} role`
                );
            },
            error => {
                console.log(error);
            },
            );
        },
    error => {
        console.log(error);
    }
);
