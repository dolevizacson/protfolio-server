// initialization
const {
  modules,
  files,
  functions,
  routes,
  constants,
} = require('../utils/access');

// modules
const express = modules.EXPRESS;
const httpStatus = modules.HTTP_STATUS;

module.exports = class Controller {
  constructor(service, model, validationScope) {
    this.service = service;
    this.model = model;
    this.validationScope = validationScope;
    this.router = express.Router();
    this.middleware = require(files.MIDDLEWARE);
  }

  getRouter() {
    return this.router;
  }

  // get all active
  getAllActive() {
    this.router.get(
      routes.READ_ALL_ACTIVE,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const dataList = await this.service.readAllActive();
        res.send(dataList);
      })
    );
  }

  // get all
  getAll() {
    this.router.get(
      routes.READ_ALL,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const dataList = await this.service.readAll();
        res.send(dataList);
      })
    );
  }

  // get one active
  getOneActive() {
    this.router.get(
      routes.READ_ACTIVE,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const data = await this.service.readOneActive(id);
        res.send(data);
      })
    );
  }

  // get one
  getOne() {
    this.router.get(
      routes.READ,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const data = await this.service.readOne(id);
        res.send(data);
      })
    );
  }

  // post
  post() {
    this.router.post(
      routes.CREATE,
      this.middleware.auth.isLoggedIn,
      this.middleware.validation.validateWithModel(
        this.model,
        this.validationScope.DEFAULT
      ),
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const data = await this.service.create(req.body);
        res.status(httpStatus.CREATED).send(data);
      })
    );
  }

  // update
  update() {
    this.router.put(
      routes.UPDATE,
      this.middleware.auth.isLoggedIn,
      this.middleware.validation.validateWithModel(
        this.model,
        this.validationScope.UPDATE
      ),
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const updatedData = await this.service.update(id, req.body);
        res.send(updatedData);
      })
    );
  }

  // toggle
  toggle() {
    this.router.patch(
      routes.MODIFY,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const toggledData = await this.service.toggle(id);
        res.send(toggledData);
      })
    );
  }

  // delete
  delete() {
    this.router.delete(
      routes.DELETE,
      this.middleware.auth.isLoggedIn,
      functions.helpers.asyncWrapper(async (req, res, next) => {
        const { id } = req.params;
        const deletedData = await this.service.deleteOne(id);
        res.send(deletedData);
      })
    );
  }
};
