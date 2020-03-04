'use strict'

const connectDb = require('./db')

module.exports = {
  Query: {
    getCourses: async () => {
      let db
      let courses = []

      try {
        db = await connectDb ()
        courses = await db.collection('courses').find().toArray()
      } catch (error) {
        console.log(error)
      }
      return courses
    },
    getCourse:(root, args) =>{
      const courseF = courses.filter(course => course._id ===args.id)
      return courseF.pop()
    }
    }
  }