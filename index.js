#!/usr/bin/env node
import inquirer from 'inquirer';
console.log(`======================================
.                                    .
. Welcome To My "TO-DO List" Program .
.                                    .
======================================`);
let running = true;
let todos = [];
while (running) {
    const features = await inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            name: "options",
            choices: ["Add", "View", "Delete", "Quit"],
        }
    ]);
    console.log("======================================");
    if (features.options === "Add") {
        let i = true;
        console.log();
        console.log("============================");
        console.log("Enter as many tasks you want");
        console.log("Type exit to quit.");
        console.log("============================");
        while (i) {
            const task = await inquirer.prompt([
                {
                    message: "\u2022 ",
                    type: "input",
                    name: "add",
                },
            ]);
            if (task.add == "exit") {
                i = false;
            }
            else if (task.add == "") {
                console.log("Field cannot be empty");
            }
            else {
                todos.push(task.add);
            }
        }
    }
    else if (features.options === "View") {
        console.log();
        console.log("============================");
        console.log("Following are your tasks for");
        console.log("the day:");
        console.log("============================");
        console.table(todos);
    }
    else if (features.options === "Delete") {
        console.log();
        console.log("============================");
        console.log("Give the index no of task");
        console.log("you want to delete");
        console.log("============================");
        const del = await inquirer.prompt([
            {
                message: "",
                type: "number",
                name: "no",
            }
        ]);
        if (del.no >= todos.length || isNaN(del.no)) {
            console.log("Invalid index number");
            console.log("Returning to main menu......");
            console.log();
        }
        else {
            let temp = todos[del.no];
            todos.splice(del.no, 1);
            console.log();
            console.log(`Task "${temp}" deleted successfully!`);
            console.log("Returning to main menu......");
            console.log();
        }
        ;
    }
    else if (features.options === "Quit") {
        running = false;
        console.log("Program terminated successfully.....");
        console.log("======================================");
    }
}
;
