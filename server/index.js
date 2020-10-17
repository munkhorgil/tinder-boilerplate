const app = require('express')();

const users = [
  {
    id: "userid1",
    info: {
        "age": 20,
        "type": "single",
        "gender": "male",
        "sexuality": "straight",
        "name": "John",
        "about": "Tell us more about you",
        "desires": ["Food"],
        "interests": ["Food"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/3lZtNr9",
        }
    ]
  },
  {
    id: "userid2",
    info: {
        "age": 24,
        "type": "single",
        "gender": "male",
        "sexuality": "straight",
        "name": "Kyle",
        "about": "Tell us more about you",
        "desires": ["Video Game"],
        "interests": ["Video Game"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/31i1jAN",
        }
    ]
  },
  {
    id: "userid3",
    info: {
        "age": 22,
        "type": "single",
        "gender": "female",
        "sexuality": "straight",
        "name": "Elizabeth",
        "about": "Tell us more about you",
        "desires": ["Photograph"],
        "interests": ["Photograph"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/2IEAXme",
        }
    ]
  },
  {
    id: "userid3",
    info: {
        "age": 26,
        "type": "single",
        "gender": "male",
        "sexuality": "straight",
        "name": "Paul",
        "about": "Tell us more about you",
        "desires": ["Cars"],
        "interests": ["Cars"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/3nW8DvT",
        }
    ]
  },
  {
    id: "userid4",
    info: {
        "age": 29,
        "type": "single",
        "gender": "male",
        "sexuality": "straight",
        "name": "Paul",
        "about": "Tell us more about you",
        "desires": ["Cars"],
        "interests": ["Cars"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/37h3Mz9",
        }
    ]
  },
  {
    id: "userid5",
    info: {
        "age": 19,
        "type": "single",
        "gender": "female",
        "sexuality": "straight",
        "name": "Jeniffer",
        "about": "Tell us more about you",
        "desires": ["Music"],
        "interests": ["Music"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/2H93EqC",
        }
    ]
  },
  {
    id: "userid6",
    info: {
        "age": 18,
        "type": "single",
        "gender": "female",
        "sexuality": "straight",
        "name": "Sarah",
        "about": "Tell us more about you",
        "desires": ["Music"],
        "interests": ["Music"]
    },
    associated: null,
    photos: [
        {
          url: "https://bit.ly/3lWZt0g",
        }
    ]
  },
]

app.use('/currentUser', function(_, res, _) {
  return res.send({ currentUser: users[0] });
});

app.use('/users', function(_, res, _) {
  return res.send({ users });
})

app.listen(3000, function() {
  console.log('App listening port at 3000');
});