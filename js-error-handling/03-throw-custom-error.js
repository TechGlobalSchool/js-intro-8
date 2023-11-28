function getName(name) {
    if(name && typeof name === 'string') console.log('Thanks', name);
    else throw new Error("That's not a name");
}


getName('John'); // Thanks John

try {
    // Error: That's not a name
    getName(123);
    getName(true);
    getName(undefined);
    getName(null); 
    getName(''); 
}
catch(err) {
    console.log('It is not a proper name!!!');
}
finally {
    console.log('Program End!');
}