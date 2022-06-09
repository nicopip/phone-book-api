const express = require('express')
const app = express()
 
const PORT = process.env.PORT || 8000


//Some JSON

let people = {
    pablo: {
        'id':1,
        'name':'Pablo',
        'number': '32-45-452134'
    },
    cerise: {
        'id':2,
        'name':'Cerise',
        'number': '32-32-452453'
    },
    mont: {
        'id':1,
        'name':'Mont',
        'number': '32-45-452134'
    }
}

// the server hears our request(landing page)
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

// At request date, count people in phone book
app.get('/info', (req, res) => {
    const date = new Date()    
    res.send(`Phonebook has info of ${Object.keys(people).length} people. ${date}`)    
})

//Response with full api (everryone)
app.get('/api',(req,res)=>{
    res.json(people)
})

//Adding a query name
app.get('/api/:name',(req,res)=>{
    const personName = req.params.name.toLowerCase()
    if(people[personName]){
        res.json(people[personName])        
    } else{
     res.json(people) 
    }
})


app.delete('/api/:id',(req,res)=>{
    //find the person to delete
    const id = Number(req.params[id])
    //Delete that person
    delete people[id]
})

app.post('/api',(req,res)=>{
    // assign body
    const body = req.body
    // conditions on raw code content
    if (!body.name) {
        return res.status(400).json({
          error: 'name must be unique'
        })
      } else if (!body.number) {
          return response.status(400).json({
              error: 'number missing'
          })
      }
    // create new person
    const person = {
        // calculate random id for person
        id: Math.floor(Math.random() * 100),
        // grab the name property from raw content
        name: body.name,
        // grab number property from raw content
        number: body.number 
      }
      // add a new person

      // response with all
      res.json(people)
})



// We tell the server to listen
app.listen(PORT,(req,res)=>{
    console.log(`The server is running on PORT ${PORT}`)
})