let input = prompt('What would like to do?');
const todos = ['fries', 'frog'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**************');

    } else if (input === 'new') {
        const newTodo = prompt('what would like to add?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);

    } else if (input === 'delete') {
        const remove = parseInt(prompt('what would like to remove?'));
        if (!Number.isNaN(remove)) {
            const deleted = todos.splice(remove, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
            
        }else{
            console.log('Unknow index');
        }
    }


    input = prompt('What would like to do?')
}
console.log('ok quit');
