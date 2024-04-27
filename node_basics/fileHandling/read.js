// const { readFileSync } = require('fs');
// const txt= readFileSync('./node_basics/fileHandling/hello.txt' , 'utf8');
//         console.log(txt)
// // });

// console.log('do this ASAP');


const { readFile } = require('fs').promises;

hello()

async function hello(){
        
        const file = await readFile('./node_basics/fileHandling/hello.txt' , 'utf8');
        console.log(file)
}