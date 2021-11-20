const amount = 12
if(amount <10){
    console.log("small number")
} else {
    console.log("large number")
}

console.log("hey its my first node app")
/*-every file in node is a module by default
-module is a global object variable with properties, one property is exports and you can put anything you want to access in other files in that export
-exports is an object inside modules
--too access module exports you can assign to a variable or just rquire, require has parameter and you need to pas in where the module is located
require("./controller") IF it's a module you created you must do the location as such if it's a 3p supported module you dont need the ./ you just do require("express")
-when you import a module, you invoke it ...... ?
-node has built in modules : operating system module, path, fs, http server module
-*/