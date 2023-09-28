import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import express from 'express';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

// Configure lowdb to write data to JSON file
const adapter = new JSONFile(file)
const defaultData = {
    projects: [
        {
            "nameOfProject": "Proyecto 1",
            "descriptionOfProject": "Descripción del Proyecto 1",
            "id": "uid-1"
        },
        {
            "nameOfProject": "Proyecto 2",
            "descriptionOfProject": "Descripción del Proyecto 2",
            "id": "uid-2"
        }
    ]
}
const db = new Low(adapter, defaultData)

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
await db.read();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/projects', (req, res) => {
    const projects = db.data.projects;
    res.send(projects);
})

app.post('/project',express.json(), (req, res) => {
    console.log(req.body);
    db.data.projects.push(req.body);
    db.write();
    res.status(200).send('recibí');
})

// app.get('/project', (req, res) => {
//     console.log(req.query.id);
//     const id = req.query.id;
//     const project = db.data.projects[{ id: id }]
//     console.log(project);
//     res.status(200).send('id')
// })



app.get('/project', (req, res) => {
    const id = req.query.id;

    // Buscar el proyecto por ID en la lista de proyectos
    const project = db.data.projects.find(item => item.id === id);

    if (project) {
        res.status(200).json(project);
    } else {
        res.status(404).send('Proyecto no encontrado');
    }
});

app.delete('/project', (req, res) => {
    const id = req.query.id;
    console.log(id);
    // Encuentra el índice del proyecto a eliminar en la lista de proyectos
    const projectIndex = db.data.projects.findIndex(item => item.id === id);

    if (projectIndex !== -1) {
        // Elimina el proyecto de la lista
        db.data.projects.splice(projectIndex, 1);
        db.write();
        res.status(200).send('Proyecto eliminado');
    } else {
        res.status(404).send('Proyecto no encontrado');
    }
});

app.put('/project', (req, res) => {
    const id = req.query.id;
    const newData = req.body; // Los nuevos datos a asignar al elemento

    // Encuentra el elemento en la lista de proyectos por su ID
    const project = db.data.projects.find(item => item.id === id);

    if (project) {
        // Actualiza las propiedades del proyecto con los nuevos datos
        Object.assign(project, newData);

        // Guarda los cambios en la base de datos
        db.write();

        res.status(200).json(project); // Devuelve el proyecto actualizado
    } else {
        res.status(404).send('Proyecto no encontrado');
    }
});

app.listen(3030, function () {
    console.log('listening on 3030');
});


