const express = require("express");
const router = express.Router();
const passport = require("passport");
const validatePostInput = require("../../validation/post");
const Post = require("../../models/Post");
const User = require("../../models/User");
const Request = require("../../models/Request");

