"use strict";

function index(req, res) {
  const params = req.params;
  res.send({ params });
}

function create(req, res) {
  const params = req.params;
  res.send({ params });
}

function getUser(req, res) {
  const id = req.query.params;
  res.send({ userId: id });
}

function update(req, res) {
  const params = req.params;
  res.send({ params });
}

module.exports = {
  index,
  create,
  getUser,
  update,
};
