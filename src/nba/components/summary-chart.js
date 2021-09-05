const chartData = {
    height: 250,
    type: 'area',
    options: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: ['#ff5252', '#4680ff'],
        fill: {
            type: 'solid',
            opacity: 0.2
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: '#fff',
            strokeColor: ['#ff5252', '#4680ff'],
            strokeWidth: 2,
            hover: {
                size: 7
            }
        },
        xaxis: {
            type: 'datetime',
            categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 
                '2011', '2012', '2013','2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']
        },
        tooltip: {
            x: {
                format: 'yyyy'
            }
        }
    },
    series: [
        {
            name: 'Top Salary',
            data: [17142000, 19600000, 22400000, 25200000, 28000000, 29464000, 20000000, 21000000, 23751934, 
                24751934, 23034375, 24806250, 25244493, 30453805, 30453805, 23500000, 25000000, 30963450, 37457154,
                37457154, 40231758, 43006362, 45780966]
        }
    ]
};
export default chartData;
