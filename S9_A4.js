var fs = require('fs');

    fs.readFile('student.json', 'utf8', function (error, data) //reading the file
    {
        console.log(data);

        fs.writeFile('student.json', 'higher', 'utf8', function (error) //overriding the file

        {
            console.log(data);
            if (error) throw error;
        });
    })


