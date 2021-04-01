const express = require('express');
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: __dirname + "/variables.env" });

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// API endpoint