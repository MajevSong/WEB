const express = require('express');
const app = express();

app.use(() => {
    console.log("WE GOT NEW REQUEST!")
})

app.listen(8080, () => {
    console.log("Listening on port 8080...");
});