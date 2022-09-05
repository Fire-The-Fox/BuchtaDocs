import { Buchta } from "buchta";

const app = new Buchta();
app.enableDebug(true);

app.get("/", () => {
    return app.loadFile("index.html");
});

app.run(8080, () => {
    console.log("Buchta Docs is up");
});