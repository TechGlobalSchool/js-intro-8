function print1() {
    console.log('1');
}

function print2() {
    setTimeout(() => {
        console.log('2');
    }, 5000);
}

function print3() {
    console.log('3');
}

// JS is single-threaded and will invoke below functions one by one
print1(); 
print2();
print3();

/*
The order when there is no delay with the events
1
2
3

The order when there is delay with the event 2
1
3
2
*/