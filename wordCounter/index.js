import inquirer from 'inquirer';
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function startWordCount(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Enter The Paragraph For Word Count: ",
            name: "paragraph"
        });
        console.log(counter(res.paragraph));
    } while (true);
}
startWordCount(counter);
