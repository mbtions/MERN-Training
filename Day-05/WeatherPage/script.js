API_Key = 'MRQXVWYZAB24YYVL3598SVVSJ';

function fetchAPI() {
    url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi%2CIndia?unitGroup=us&key=MRQXVWYZAB24YYVL3598SVVSJ";
    fetch(url).then((res)=>
        res.json()
    ).then(
        // (data)=> {console.log(data)}
        renderUI
    );
    // .then(renderUI);
    // .then(console.log);
}
function renderUI(data) {
    const root = document.getElementById('root');

    const days = data.days
    console.log(data)

    const row = document.createElement('tr')
    const dateCell = document.createElement('th');
    dateCell.innerText = 'Date';
    row.appendChild(dateCell);

    const dayCell = document.createElement('th');
    dayCell.innerText = 'Day';
    row.appendChild(dayCell);

    const maxTempCell = document.createElement('th');
    maxTempCell.innerText = 'Max Temp';
    row.appendChild(maxTempCell);

    const minTempCell = document.createElement('th');
    minTempCell.innerText = 'Min Temp';
    row.appendChild(minTempCell);

    root.appendChild(row)

    const childRow = document.createElement('tr');
    const c1 = document.createElement('td');
    c1.innerText = "08-04-2024";
    childRow.appendChild(c1);

    const c2 = document.createElement('td');
    c2.innerText = "90 F";
    childRow.appendChild(c2);

    root.appendChild(childRow);
}
fetchAPI();