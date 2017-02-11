# **SingleStatPlus Panel**
## Visualization for Single Stat

Visualize single stat in bar, line or gauge graph. Each incoming single stat will be represented by a bar a point on a graph or a gauge. Bar and line graph will grow with each single stat queried. Good for tracking trends and comparing to previous values. Multiple single stats can be queried for side by side comparison. Can add thresholds for minimum and maximum values.

## Features

- Hover over bar or point to see value and check status (ok, below minimum, above maximum). Gauge will update to reflect thresholds.
- Querying multiple single stats will add additional bars, points and gauges to compare different single stats (for best visualization should be kept to below 6 stats).
- Status bar below graph with value of most recent single stat with color indicating status.
- Clicking a metric on status bar will isolate metric for viewing (click again to show all).
- Set the number of bars and line points between 1 and 30.
- Change color of individual stat.

**Bar**
![Image Title](public/plugins/grafana-singlestatplus-panel/img/barsstat.png)
**Line**
![Image Title](public/plugins/grafana-singlestatplus-panel/img/linesstat.png)
**Gauge**
![Image Title](public/plugins/grafana-singlestatplus-panel/img/gaugesstat.png)
