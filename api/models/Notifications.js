const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const Video = require("./Video.js");
const mongooseDelete = require("mongoose-delete");

const NotificationsSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

NotificationsSchema.plugin(mongooseDelete, { overrideMethods: "all" });
const NotificationsModel = model("Notifications", NotificationsSchema);

module.exports = NotificationsModel;
//Esquema Notifications