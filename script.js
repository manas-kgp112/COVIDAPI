
init();
initNew();

function init() {
    var url = "https://api.covid19api.com/summary"
    $.get(url, function (data) {
        // console.log(data.Global)

        data = `
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>
            `

        $('#data').html(data);

    });
}





function initNew() {
    var url = "https://api.covid19api.com/summary"
    $.get(url, function (dataNew) {
        // console.log(dataNew.Global)

        dataNew = `
            <td>${dataNew.Global.NewConfirmed}</td>
            <td>${dataNew.Global.NewDeaths}</td>
            <td>${dataNew.Global.NewRecovered}</td>
            `

        $('#dataNew').html(dataNew);

    });
}



function refreshData() {
    clearData();
}

function clearData() {
    $('#data').empty()
    $('#dataNew').empty()
    init()
    initNew()
}