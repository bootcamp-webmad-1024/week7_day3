module.exports = app => {

    const indexRouter = require("./index.routes")
    app.use("/api", indexRouter)

    const projectsRouter = require("./project.routes")
    app.use("/api", projectsRouter)

    const tasksRouter = require("./task.routes")
    app.use("/api", tasksRouter)
}