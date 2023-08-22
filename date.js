const fs = require('fs');

const date = new Date ();
const currentDate = date.toDateString();
const currentTime = date.toTimeString();

//1. Write API endpoint which will create a text file in a particular folder.

//1.A Content of file should be current timestamp
//1.B The filename should be current date-time.txt


fs.writeFile(`./Day 39 Task/${currentDate} - ${currentDate}.txt`, currentTime, (err) => {
    console.log("Created file")
});

//2. Write API endpoint to retrieve all the text files in that particular folder

fs.readdir("./Day 39 Task", (err, files) => {
    if(err){
    console.log("Error", err);
}
    console.log('All file names', files);
});

