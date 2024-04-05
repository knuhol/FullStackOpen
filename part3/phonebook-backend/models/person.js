/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
const url = process.env.MONGODB_URI

mongoose
  .connect(url)
  .then((result) => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    validate: {
      validator: (v) => /^\d{2,3}-\d{6,}$/.test(v),
      message: 'Phone number is not valid.',
    },
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
