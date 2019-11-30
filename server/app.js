const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');

//////////////////////////////////////////////////////////////////////
/*                         Middle Ware                              */
//////////////////////////////////////////////////////////////////////

app.use(logger("dev"));

// U R L E N C O D E D
app.use(express.urlencoded({ extended: true })); // bodyParser

// J S O N   A P I
app.use(express.json()) // required for building a json api in express.

// C O R S
app.options('*', cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}))

//////////////////////////////////////////////////////////////////////
/*                            Routes                                */
//////////////////////////////////////////////////////////////////////

const dataRouter = require("./routes/data");
app.use("/api", dataRouter);

//////////////////////////////////////////////////////////////////////
/*                            Server                                */
//////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`📡  Listening on port ${port}`));