const mongoose = require('mongoose');
const Demo = require('../model/demo');

const createAPI = async (req, resp) => {
    try {
        let demo = new Demo(req.body);
        demo = await demo.save();
        console.log("demo");
        resp.status(200).send(demo);
    } catch (error) {
        console.log(error);
        resp.status(500).send(error);
    }
};

const readAPI = async (req, resp) => {
    try {
        const demo = await Demo.find();
        console.log(demo);
        resp.status(200).send(demo);
    } catch (error) {
        console.log(error);
        resp.status(500).send(error);
    }
};

const updateAPI = async (req, resp) => {
    try {
        const demo = await Demo.updateOne(
            { _id: req.params.key },
            { $set: req.body }
        );
        if(demo.modificationCount && demo.matchedCount) {
            console.log("Update successfully");
            resp.status(200).send("Updated Successfully");
        }
    } catch (error) {
        console.log(error);
        resp.status(500).send(error);
    }
};

const deleteAPI = async (req, resp) => {
    try {
        const demo = Demo.deleteOne({ _id: req.params.key });
        if(demo.deletedCount) {
            console.log("deleted successfully");
            resp.status(200).send("deleted successfully");
        }
    } catch (error) {
        console.log("500");
        resp.status(500).send(error);
    }
};

module.exports = {
    createAPI,
    readAPI,
    updateAPI,
    deleteAPI
};
