import React from 'react'

import ReactFC from 'react-fusioncharts'

import FusionCharts from 'fusioncharts'

import Column2D from 'fusioncharts/fusioncharts.charts'

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)

function Chart({ type }) {
  const chartConfigs = {
    type: 'pie2d',
    width: '100%',
    height: '560',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Type - Pie Chart',
        captionFontColor: '#102a42',
        captionFontBold: 1,
        captionFontSize: 30,
        captionFont: 'Roboto',
        baseFont: 'Open Sans',
        baseFontSize: 20,
        baseFontColor: '#000',
        smartLineColor: '#000',
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors: '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63,#666',
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: '#a7add6',
        showBorder: 0,
        decimals: 0,
        pieRadius: '50%',
      },

      data: type,
    },
  }

  return <ReactFC {...chartConfigs} />
}

export default Chart
