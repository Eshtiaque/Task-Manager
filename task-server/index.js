require('dotenv').config()
const express =require('express');
const app=express();
const  cors =require('cors');
const port =process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');



//middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.eeu0ppt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {

  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const dbConnect = async () => {
  try {
    client.connect();
    console.log(" Database Connected Successfully✅ ");

  } catch (error) {
    console.log(error.name, error.message);
  }
}
dbConnect()


const taskCollection = client.db("TaskDB").collection("Task");
const UserCollection = client.db("TaskDB").collection("Users");
const TickCollection = client.db("TaskDB").collection("Tick");




app.get('/', (req, res) => {
  res.send('Lets task')
})
//user collection

app.get('/users', async (req, res) => {
    const result = await UserCollection.find().toArray();
    res.send(result);
  })
  

app.post('/users', async (req, res) => {
    const body = req.body;
    console.log(body);
    const result = await UserCollection.insertOne(body);
    res.send(result);
  })

// task collection
app.post('/task', async (req, res) => {
  const body = req.body;
  console.log(body);
  const result = await taskCollection.insertOne(body);
  // res.send(result);
  if (result?.insertedId) {
    return res.status(200).send(result);
  } else {
    return res.status(404).send({
      message: "can not insert try again later",
      status: false,
    });
  }
})

app.get('/task', async (req, res) => {
  const result = await taskCollection.find().toArray();
  res.send(result);
})


//my task added
app.get("/task/:email", async (req, res) => {
  console.log(req.params.email);
  const result = await taskCollection.find({ email: req.params.email }).toArray();
  res.send(result);
})


//search text
app.get('/searchText/:text', async (req, res) => {
  const text = req.params.text;
  const result = await taskCollection
    .find({
      $or: [
        { title: { $regex: text, $options: "i" } },
      ],
    })
    .toArray();
  res.send(result);
});
//edit start

//get single details data from all data
app.get('/allSocialPost/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }
  const result = await taskCollection.findOne(query);
  res.send(result);
})


app.get("/editTask/:id", async (req, res) => {
  const id = (req.params.id);
  const query = { _id: new ObjectId(id) }
  const result = await taskCollection.findOne(query);
  res.send(result);
})


//delete the toy by selecting id
app.delete("/task/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) }
  const result = await taskCollection.deleteOne(query);
  res.send(result);
})




//put data in server
app.patch("/task/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  console.log(body);
  const filter = { _id: new ObjectId(id) };
  const option = { upsert: true }
  const updateDoc = {
    $set: {
      title: body.title,
      name:body.name,
      date: body.date,
      email: body.email,
      description: body.description
    }
  };
  const result = await taskCollection.updateOne(filter, updateDoc, option);
  res.send(result);
});


app.listen(port, () => {
    console.log(`Lets run the Task server site on port : ${port}`)
  })