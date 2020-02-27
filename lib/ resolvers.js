'use strict'

const courses = [
  {
    _id: 'anyid1',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion'
  },
  {
    _id: 'anyid.2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion'
  },
  {
    _id: 'anyid.3',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion',
    topic: 'programcion'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
      getCourse:(root, args) =>{
        const course = courses.filter(course => course.id ===args.id)
        return course.pop()
      }
    }
  }