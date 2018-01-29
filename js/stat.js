'use strict';
window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var histogramWidth = 40;
  var max = -1;
  function drawCloud(positionX, positionY, widthCloud, heightCloud, colorCloud) {
    ctx.fillStyle = colorCloud;
    ctx.fillRect(positionX, positionY, widthCloud, heightCloud);
  }
  drawCloud(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawCloud(100, 10, 420, 270, 'white');
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  for (var e = 0; e < times.length; e++) {
    if (times[e] > max) {
      max = times[e];
    }
  }
  for (var i = 0; i < names.length; i++) {
    var timeLevel = Math.round(times[i]);
    var histogramStep = histogramHeight - times[i] * histogramHeight / max;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }
    ctx.fillRect(120 + 40 * 2 * i, 100 + histogramStep, histogramWidth, times[i] * histogramHeight / max);
    ctx.fillStyle = 'black';
    ctx.fillText(timeLevel, 120 + 80 * i, 90 + histogramStep);
    ctx.fillText(names[i], 120 + 80 * i, 270);
  }

};
