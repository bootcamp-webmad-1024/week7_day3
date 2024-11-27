const { Schema, model } = require("mongoose")

const taskSchema = Schema({
  title: {
    type: String,
    minlength: [5, 'El título debe tener 5 caracteres'],
    required: [true, 'El título es obligatorio']
  },
  description: {
    type: String,
    minlength: [10, 'La descripción debe tener 10 caracteres'],
    required: [true, 'La descripción es obligatoria']
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }

})

const Task = model("Task", taskSchema)

module.exports = Task