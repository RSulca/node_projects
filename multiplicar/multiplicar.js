const fs = require('fs');

let read = (number, limit=10) => {
    let data = '';
    for (let i = 1; i <= limit; i++) {
        data += `${number}x${i}=${number * i}\n`;
    }
    console.log(data);
}

let save = async (number, limit=10) => {
    let data = '';
    if (!Number.isInteger(number)) {
        // !Number(number) caracteres numericos o numeros tal cual
        throw 'Is not a number';
        return;
    }

    for (let i = 1; i <= limit; i++) {
        data += `${number}x${i}=${number * i}\n`;
    }
    fs.writeFile(`tables/table-${number}.txt`, data, (err) => {
        if (err) throw 'err';
    })
    return `The file table-${number} has been saved!`
}

module.exports = {
    save,
    read
} 