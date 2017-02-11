'use strict';

System.register(['moment', 'jquery', 'lodash', 'jquery.flot', 'jquery.flot.gauge', 'jquery.flot.pie', 'jquery.flot.time', './orderBar.js', 'app/core/utils/kbn', 'app/core/config', 'app/core/time_series2', 'app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var moment, $, _, kbn, config, TimeSeries, MetricsPanelCtrl, _createClass, SingleStatPlusCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }, function (_jquery) {
      $ = _jquery.default;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_jqueryFlot) {}, function (_jqueryFlotGauge) {}, function (_jqueryFlotPie) {}, function (_jqueryFlotTime) {}, function (_orderBarJs) {}, function (_appCoreUtilsKbn) {
      kbn = _appCoreUtilsKbn.default;
    }, function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_appCoreTime_series) {
      TimeSeries = _appCoreTime_series.default;
    }, function (_appPluginsSdk) {
      MetricsPanelCtrl = _appPluginsSdk.MetricsPanelCtrl;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('SingleStatPlusCtrl', SingleStatPlusCtrl = function (_MetricsPanelCtrl) {
        _inherits(SingleStatPlusCtrl, _MetricsPanelCtrl);

        function SingleStatPlusCtrl($scope, $injector) {
          _classCallCheck(this, SingleStatPlusCtrl);

          var _this = _possibleConstructorReturn(this, (SingleStatPlusCtrl.__proto__ || Object.getPrototypeOf(SingleStatPlusCtrl)).call(this, $scope, $injector));

          var panelDefaults = {
            legend: {
              show: true, // disable/enable legend
              values: true
            },
            pointCount: 0,
            pointSize: 10,
            prefix: '',
            postfix: '',
            values: {
              current: 0,
              next: 0,
              sum: 0,
              count: 0,
              showValue: true,
              showNext: false,
              showSum: false
            },
            showGraph: true,
            fontSize: '25px',
            fontWeight: '10px',
            font: { family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
            bgColor: null,
            graphChoice: 'bar',
            barColor: 'red',
            graphOptions: {},
            chartData: [],
            tempData: {},
            singleSet: {},
            aliases: [],
            dataChoice: '',
            showAll: true,
            opacity: false,
            colors: ['red', 'blue', 'lightgreen', 'yellow', 'cyan', 'orange', 'grey', 'purple', 'white', 'red', 'blue', 'green'],
            gaugeOptions: {
              legend: {
                show: false
              },
              series: {
                grow: {
                  active: true,
                  duration: 150
                },
                gauges: {
                  gauge: {
                    min: null,
                    max: null,
                    background: { color: 'grey' },
                    border: { color: null },
                    shadow: { show: false },
                    font: { size: 10, family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
                    margin: 0,
                    width: 25,
                    color: 'red'
                  },
                  threshold: {
                    label: {
                      show: true,
                      margin: 0,
                      font: { size: 15 }
                    },
                    show: true,
                    width: 3,
                    margin: 0
                  },
                  show: true,
                  frame: { show: false },
                  label: {
                    show: true,
                    font: { size: 10, family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
                    margin: 0
                  },
                  layout: { margin: 1, thresholdWidth: 0, hMargin: 1, vMargin: 1 },
                  cell: { border: { width: 0 } },
                  value: {
                    show: true,
                    font: { size: 15, family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
                    margin: 0
                  }
                }
              }
            },
            barOptions: {
              legend: {
                show: false
              },
              series: {
                bars: {
                  //fill:0.3,
                  show: true,
                  barWidth: .13,
                  order: 1
                }
              },
              xaxis: {
                show: true,
                tickLength: 5
              },
              yaxis: {
                show: true,
                tickLength: 5
              },
              grid: {
                showGrid: true,
                borderWidth: 0,
                hoverable: true
              },
              border: {
                show: false
              }
            },
            lineOptions: {
              legend: {
                show: false
              },
              xaxis: {
                show: true,
                tickLength: 5
              },
              yaxis: {
                show: true,
                tickLength: 5
              },
              grid: {
                showGrid: true,
                hoverable: true,
                borderWidth: 0
              },
              points: {
                show: true
              },
              series: {
                lines: {
                  fill: 0.1,
                  show: true
                }
              }
            },
            text: {
              title: '',
              prefix: '',
              postfix: ''
            }
          };
          _.defaults(_this.panel, panelDefaults);
          _.defaults(_this.panel.legend, panelDefaults.legend);
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('data-received', _this.onDataReceived.bind(_this));
          _this.events.on('data-snapshot-load', _this.onDataReceived.bind(_this));
          _this.events.on('panel-initialized', _this.render.bind(_this));
          _this.colorNum = 0;
          _this.chooseGraph(_this.panel.graphChoice);
          if (_this.panel.dataChoice.length !== 0) {
            _this.chooseStat();
          }
          return _this;
        }

        _createClass(SingleStatPlusCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/grafana-singlestatplus-panel/editor.html', 2);
          }
        }, {
          key: 'onDataReceived',
          value: function onDataReceived(dataList) {
            this.series = dataList.map(this.seriesHandler.bind(this));

            this.setValues();
            this.removeGarbage();
            this.render();
          }
        }, {
          key: 'seriesHandler',
          value: function seriesHandler(seriesData) {
            var series = new TimeSeries({
              datapoints: seriesData.datapoints,
              alias: seriesData.target
            });
            series.flotpairs = series.getFlotPairs(this.panel.nullPointMode);

            return series;
          }
        }, {
          key: 'setGaugeThresholds',
          value: function setGaugeThresholds() {
            if (!_.isEmpty(this.panel.tempData)) {
              this.panel.tempData.gauges.gauge.min = this.panel.tempData.minThreshold;
              this.panel.tempData.gauges.gauge.max = this.panel.tempData.maxThreshold;
              this.panel.tempData.gauges.threshold.values[0].value = this.panel.tempData.minThreshold;
              this.panel.tempData.gauges.threshold.values[2].value = this.panel.tempData.maxThreshold;
            }
            this.render();
          }
        }, {
          key: 'chooseStat',
          value: function chooseStat() {
            var self = this;
            _.find(self.panel.chartData, function (d) {
              if (d.label === self.panel.dataChoice) {
                self.panel.tempData = d;
                return;
              }
            });
            this.render();
          }
        }, {
          key: 'findStat',
          value: function findStat(stat) {
            var self = this;
            _.find(self.panel.chartData, function (d) {
              if (d.label === stat) {
                self.panel.singleSet = d;
                return;
              }
            });
          }
        }, {
          key: 'setSSCount',
          value: function setSSCount() {
            if (this.panel.pointSize < 1) {
              this.panel.pointSize = 1;
            } else if (this.panel.pointSize >= 30) {
              this.panel.pointSize = 30;
            }
          }
        }, {
          key: 'chooseGraph',
          value: function chooseGraph(choice) {

            this.panel.graphChoice = choice;
            if (this.panel.graphChoice === 'bar') {
              this.panel.graphOptions = this.panel.barOptions;
            } else if (this.panel.graphChoice === 'line') {
              this.panel.graphOptions = this.panel.lineOptions;
            } else {
              this.panel.graphOptions = this.panel.gaugeOptions;
            }
            this.render();
          }
        }, {
          key: 'removeGarbage',
          value: function removeGarbage() {
            var self = this;
            for (var i = 0; i < self.panel.chartData.length; i++) {
              var found = false;
              self.panel.aliases.forEach(function (alias) {
                if (alias === self.panel.chartData[i].label) {
                  found = true;
                  return;
                }
              });
              if (!found) {
                self.panel.chartData.splice(i, 1);
              }
            }
          }
        }, {
          key: 'changeColor',
          value: function changeColor() {
            this.panel.tempData.gauges.threshold.values[1].color = this.panel.tempData.color;
            this.render();
          }
        }, {
          key: 'setValues',
          value: function setValues() {
            var self = this;
            if (this.series && this.series.length > 0) {
              this.panel.aliases.length = 0;
              var time;
              this.series.forEach(function (serie) {
                var found = false;
                self.panel.aliases.push(serie.alias);
                var lastPoint = _.last(serie.datapoints);
                var lastValue = _.isArray(lastPoint) ? lastPoint[0] : null;
                var lastTime = _.isArray(lastPoint) ? lastPoint[1] : null;
                var date = new Date(lastTime);
                var hours = date.getHours();
                var minutes = "0" + date.getMinutes();
                var seconds = "0" + date.getSeconds();
                time = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                self.panel.time = time;
                self.panel.chartData.forEach(function (cData) {
                  if (Object.values(cData).indexOf(serie.alias) > -1) {
                    cData.data.push([self.panel.pointCount, lastValue]);
                    cData.currentValue = [[self.panel.pointCount, lastValue]];
                    cData.gauges.threshold.values[1].value = lastValue;
                    self.panel.time = time;
                    found = true;
                  }
                  if (found) {
                    return;
                  }
                });
                if (!found) {
                  self.panel.chartData.push({
                    label: serie.alias,
                    data: [[self.panel.pointCount, lastValue]],
                    color: self.panel.colors[self.colorNum],
                    minThreshold: null,
                    maxThreshold: null,
                    currentValue: [[self.panel.pointCount, lastValue]],
                    time: time,
                    gauges: {
                      gauge: {
                        min: null,
                        max: null
                      },
                      threshold: {
                        values: [{
                          value: null,
                          color: 'lightred'
                        }, {
                          value: lastValue,
                          color: self.panel.colors[self.colorNum]
                        }, {
                          value: null,
                          color: 'green'
                        }]
                      }
                    }
                  });
                  self.colorNum++;
                }
              });
              for (var i = 0; i < this.panel.chartData.length; i++) {
                if (this.panel.chartData[i].data.length > this.panel.pointSize) {
                  var dropBy = this.panel.chartData[i].data.length - this.panel.pointSize;
                  this.panel.chartData[i].data = _.drop(this.panel.chartData[i].data, dropBy);
                }
              }
              this.panel.pointCount++;
            }
          }
        }, {
          key: 'link',
          value: function link(scope, elem) {
            var _this2 = this;

            this.events.on('render', function () {

              var $placeHolder = elem.find('#placeholder');
              var $panelContainer = elem.find('.panel-container');
              var height = _this2.height ? _this2.height - 20 : 230;

              $placeHolder.empty();
              var statBar = "";
              var colors = [];
              $("#statusbar").find(".stat").each(function () {
                colors.push($(this).css('color'));
              });

              for (var i = 0; i < _this2.panel.chartData.length; i++) {
                var statusColor = 'green';
                if (_this2.panel.chartData[i].maxThreshold !== null) {
                  if (parseInt(_this2.panel.chartData[i].data[_this2.panel.chartData[i].data.length - 1][1]) > parseInt(_this2.panel.chartData[i].maxThreshold)) {
                    statusColor = 'blue';
                  }
                }
                if (_this2.panel.chartData[i].minThreshold !== null) {
                  if (parseInt(_this2.panel.chartData[i].data[_this2.panel.chartData[i].data.length - 1][1]) < parseInt(_this2.panel.chartData[i].minThreshold)) {
                    statusColor = 'red';
                  }
                }
                if (colors[i]) {
                  statBar += "<span style = margin-right:3px;display:inline-block;border-radius:5px;margin-top:8px;background-color:" + statusColor + ";width:12px;height:12px></span></span>";
                  statBar += "<span class = 'stat' style = color:" + String(colors[i]).replace(/\s+/g, '');
                  statBar += "><span style = display:inline-block;margin-top:5px;background-color:" + String(_this2.panel.chartData[i].color).replace(/\s+/g, '') + ";width:12px;height:12px;margin-right:3px></span>";

                  statBar += "<alias>" + _this2.panel.chartData[i].label + "</alias>: <b>" + _this2.panel.chartData[i].data[_this2.panel.chartData[i].data.length - 1][1] + "</b>     ";
                } else {
                  statBar += "<span style = margin-right:3px;display:inline-block;border-radius:5px;margin-top:8px;background-color:" + statusColor + ";width:12px;height:12px></span></span>";
                  statBar += "<span class = 'stat' style = color:white><span style = display:inline-block;margin-top:5px;background-color:" + String(_this2.panel.chartData[i].color).replace(/\s+/g, '') + ";width:12px;height:12px;margin-right:3px></span>";

                  statBar += "<alias>" + _this2.panel.chartData[i].label + "</alias>: <b>" + _this2.panel.chartData[i].data[_this2.panel.chartData[i].data.length - 1][1] + "</b>     ";
                }
              }
              var self = _this2;
              $("#statusbar").html('<center>' + statBar + '</center>');

              $(".stat").click(function () {
                $placeHolder.empty();

                var state = this;
                var allChosen = true;
                var selected = false;
                if ($(state).css('color') === 'rgb(255, 255, 255)') {
                  selected = true;
                }
                $("#statusbar").find(".stat").each(function () {
                  if ($(this).css('color') !== 'rgb(255, 255, 255)') {
                    allChosen = false;
                  }
                });
                $("#statusbar").find(".stat").each(function () {
                  if (allChosen) {
                    if (this !== state) {
                      $(this).css({ color: 'rgb(128, 128, 128)' });
                    } else {
                      $(this).css({ color: 'rgb(255, 255, 255)' });
                    }
                  } else {
                    if (selected) {
                      $(this).css({ color: 'rgb(255, 255, 255)' });
                    } else {
                      if (this !== state) {

                        $(this).css({ color: 'rgb(128, 128, 128)' });
                      } else {

                        $(this).css({ color: 'rgb(255, 255, 255)' });
                      }
                    }
                  }
                });
                if (selected && !allChosen) {
                  self.panel.showAll = true;
                  if (self.panel.graphChoice === 'gauge') {
                    var data = [];
                    for (var i = 0; i < self.panel.chartData.length; i++) {
                      data.push({
                        label: self.panel.chartData[i].label,
                        data: self.panel.chartData[i].currentValue,
                        gauges: self.panel.chartData[i].gauges
                      });
                    }
                    $placeHolder.height(height).css('width', '100%').plot(data, self.panel.graphOptions);
                  } else {
                    $placeHolder.height(height).css('width', '100%').plot(self.panel.chartData, self.panel.graphOptions);
                  }
                } else {
                  self.panel.showAll = false;
                  self.findStat($(state).find("alias").html());
                  if (self.panel.graphChoice === 'gauge') {
                    var data = {
                      label: self.panel.singleSet.label,
                      data: self.panel.singleSet.currentValue,
                      gauges: self.panel.singleSet.gauges
                    };
                    $placeHolder.height(height).css('width', '100%').plot([data], self.panel.graphOptions);
                  } else {
                    $placeHolder.height(height).css('width', '100%').plot([self.panel.singleSet], self.panel.graphOptions);
                  }
                }
              });

              if (!_.isEmpty(_this2.panel.singleSet) && !_this2.panel.showAll) {
                if (_this2.panel.graphChoice === 'gauge') {
                  var data = {
                    label: self.panel.singleSet.label,
                    data: self.panel.singleSet.currentValue,
                    gauges: self.panel.singleSet.gauges
                  };
                  $placeHolder.height(height).css('width', '100%').plot([data], self.panel.graphOptions);
                } else {
                  $placeHolder.height(height).css('width', '100%').plot([self.panel.singleSet], self.panel.graphOptions);
                }
              } else {
                //$placeHolder.height(height).css('width','100%').plot(this.panel.chartData,this.panel.graphOptions);
                if (_this2.panel.graphChoice === 'gauge') {
                  var data = [];
                  for (var i = 0; i < self.panel.chartData.length; i++) {
                    data.push({
                      label: self.panel.chartData[i].label,
                      data: self.panel.chartData[i].currentValue,
                      gauges: self.panel.chartData[i].gauges
                    });
                  }
                  $placeHolder.height(height).css('width', '100%').plot(data, self.panel.graphOptions);
                } else {
                  $placeHolder.height(height).css('width', '100%').plot(self.panel.chartData, self.panel.graphOptions);
                }
              }
              var prevPoint = null;
              $placeHolder.bind("plothover", function (event, pos, item) {
                if (item) {

                  if (prevPoint !== item.dataIndex) {
                    prevPoint = item.dataIndex;
                    var color = String(item.series.color).replace(/\s+/g, '');
                    var div = "<span style = display:inline-block;margin-bottom:2px;border-radius:15px;background-color:" + color + ";width:20px;height:5px></span>  ";

                    var status = "";
                    if (item.datapoint[1] < item.series.minThreshold) {
                      status = "<div style = background-color:red;border-radius:7px;line-height:14px><center style = 'font-size:12px'>Status: Below!</center></div>";
                    } else if (item.series.maxThreshold !== null && item.datapoint[1] > item.series.maxThreshold) {
                      status = "<div style = background-color:blue;border-radius:7px;line-height:14px><center style = 'font-size:12px'>Status: Above!</center></div>";
                    } else if (item.series.minThreshold !== null || item.series.maxThreshold !== null) {
                      status = "<div style = background-color:green;border-radius:7px;line-height:14px><center style = 'font-size:12px'>Status: Ok</center></div>";
                    }

                    $('#tooltip').html(div + item.series.label + ": " + '<b>' + item.datapoint[1] + '  </b>' + status).css({
                      position: 'absolute',
                      top: item.pageY - 50,
                      left: item.pageX,
                      border: '1px solid #000',
                      'border-radius': '7px',
                      "background-color": '#000',
                      padding: '2px'
                    }).fadeIn(200);
                  }
                } else {
                  $('#tooltip').hide();
                  prevPoint = null;
                }
              });

              if (_this2.panel.bgColor) {
                $panelContainer.css('background-color', _this2.panel.bgColor);
              } else {
                $panelContainer.css('background-color', '');
              }
            });
          }
        }]);

        return SingleStatPlusCtrl;
      }(MetricsPanelCtrl));

      _export('SingleStatPlusCtrl', SingleStatPlusCtrl);

      SingleStatPlusCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=singlestatplus_ctrl.js.map
