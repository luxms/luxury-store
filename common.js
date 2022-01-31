
function _send(msg) {
  var strMsg = JSON.stringify(msg);
  _crossFrameSend(strMsg);
}

function _crossFrameSend(strMsg) {
  window.parent.postMessage(strMsg, '*');
}
