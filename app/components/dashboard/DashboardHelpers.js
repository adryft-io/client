import React from 'react';
import _ from 'underscore';


const getUniqueChannels = (data) => _.uniq(_.reduce(data.data, (prev, curr) => {
  prev.push(curr.trigger_channel);
  return prev;
}, []));

const listChannels = (channels, callback) => channels.map((channel, index) => (
  <div key={index} onClick={() => { callback(channel); }}>
    <li>{channel}</li>
  </div>
));

const listFormulae = (formulae, callback, start, end) =>
  formulae
  .slice(start, end)
  .map((formula, index) => (
    <div key={index} onClick={() => { callback(formula); }}>
      <li>{formula.trigger_name}</li>
    </div>
));

module.exports.getUniqueChannels = getUniqueChannels;
module.exports.listChannels = listChannels;
module.exports.listFormulae = listFormulae;