import { program } from "commander";
import { listContacts, getContactById, removeContact, addContact } from "./contact.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":

          listContacts().then(console.table);
      break;

    case "get":
          getContactById(id).then((contact) => console.log(contact || null));
      break;

    case "add":
          addContact(name, email, phone).then((contact) => console.log(contact));
      break;

    case "remove":
      removeContact(id).then(contact=>console.log(contact))
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);