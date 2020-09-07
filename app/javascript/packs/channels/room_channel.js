// TODO: remove
import consumer from "./consumer"
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import {buildBoardAction} from "../actions/board_action"

const RoomChannel = consumer.subscriptions.create("RoomChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    buildBoardAction
  },

  move(index) {
    this.perform('move', { index })
  }
});

export default RoomChannel;
