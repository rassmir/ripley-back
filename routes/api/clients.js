const router = require('express').Router()

const {Client} = require('../../config/database')

router.get('/', (req, res) => {
    return Client.findAll()
        .then(clients => res.status(200).send(clients))
        .catch(error => res.status(400).send(error))
})

router.post('/', (req, res) => {
    return Client.create(req.body)
        .then(client => res.status(200).send(client))
        .catch(error => res.json({error: 'Algo salió mal, inténtelo nuevamente'}))
})

router.put('/:clientId', (req, res) => {
    return Client.update(req.body, {
        where: {
            id: req.params.clientId
        }
    })
        .then(client => res.status(200).send(client))
        .catch(error => res.json({error: 'Algo salió mal, inténtelo nuevamente'}))
})

router.delete('/:clientId', (req, res, next) => {
    return Client.destroy({
        where: {
            id: req.params.clientId
        }
    }).then(client => {
            if (!client) {
                return res.status(404).send({error: 'Usuario no encontrado'});
            }
                res.status(204).send();
        }).catch(next);
})

module.exports = router;