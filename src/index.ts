import "reflect-metadata";
import {createConnection} from "typeorm";
import {Customer} from "./entity/Customer";
import * as express from "express"

const app = express();
const PORT = process.env.PORT || 3000

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const customer = new Customer();
    customer.firstName = "Timber";
    customer.lastName = "Saw";
    customer.login = "login@mail.com";
    customer.pass = "asdasd";
    await connection.manager.save(customer);
    console.log("Saved a new user with id: " + customer.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Customer);
    console.log("Loaded users: ", users);

}).catch(error => console.log(error));

app.listen(PORT, () => {
    console.log(`It's a life on ${PORT} port...`)
})