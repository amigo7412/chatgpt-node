import express from "express";
import { Configuration, OpenAIApi } from "openai";
// import readline from "readline";
import env from "dotenv";

const app = express();

env.config();

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: 'user', content: 'Hello' }]
}).then((res) => {
    console.log(res.data.choices[0].message?.content)
}).catch((e) => {
    console.log(e);
})

// const userInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// userInterface.prompt();

// userInterface.on('line', async (input) => {
//     await openai.createCompletion
// })

app.listen(process.env.PORT, () => {
    return console.log(`Express is listening on PORT ${process.env.PORT}`)
})