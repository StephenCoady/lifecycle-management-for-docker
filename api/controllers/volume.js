"use strict";
const Docker = require('dockerode');

const docker = new Docker({
  socketPath: '/var/run/docker.sock'
});

exports.listVolumes = (req, res) => {
  docker.listVolumes((err, data) => {
    res.status(200).json({
      volumes: data
    })
  });
}

exports.listSpecificVolume = (req, res) => {
  let id = req.params.id;
  let volume = docker.getVolume(id);

  volume.inspect((err, data) => {

    if (data === null) {
      res.status(404).json({
        volume: "Volume not found",
        error: err
      })
    } else {
      res.status(200).json({
        volume: data
      })
    }
  });
}
