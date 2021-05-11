async function fetchData() {
    const res = await fetch('https://api.covid19india.org/data.json')
    const data = await res.json();
    // console.log(data);
    const count = data.statewise[0];
    // console.log(count);
    document.querySelector('#app').innerHTML = `${count.confirmed}`;
    document.querySelector('#app1').innerHTML = `${count.active}`;
    document.querySelector('#app2').innerHTML = `${count.recovered}`;
    document.querySelector('#app3').innerHTML = `${count.deaths}`;
    document.querySelector('#subapp').innerHTML = `${count.deltaconfirmed}`;
    document.querySelector('#subapp2').innerHTML = `${count.deltarecovered}`;
    document.querySelector('#subapp3').innerHTML = `${count.deltadeaths}`;



    const result = await fetch('https://api.covid19india.org/data.json')
    const data1 = await result.json();
    
    console.log(data1);
    const html = data1.statewise.map((states)=>
    {
        return `<p> ${states.state}</p>`
    }).join(' ');
    // console.log(html);
    document.querySelector('#sdata').innerHTML = html;


    const html1 = data1.statewise.map((states)=>
    {
        return `<p> ${states.confirmed}</p>`
    }).join(' ');
    document.querySelector('#sdata1').innerHTML = html1;


    const html2 = data1.statewise.map((states)=>
    {
        return `<p> ${states.active}</p>`
    }).join(' ');
    document.querySelector('#sdata2').innerHTML = html2;


    const html3 = data1.statewise.map((states)=>
    {
        return `<p> ${states.recovered}</p>`
    }).join(' ');
    document.querySelector('#sdata3').innerHTML = html3;


    const html4 = data1.statewise.map((states)=>
    {
        return `<p> ${states.deaths}</p>`
    }).join(' ');
    document.querySelector('#sdata4').innerHTML = html4;


    // const dataFake = data.statewise[1];
    // console.log(dataFake);
    // document.querySelector('#fakedata').innerHTML = `${dataFake.state}`;
    // document.querySelector('#ndata1').innerHTML = `${dataFake.confirmed}`;
    // document.querySelector('#ndata2').innerHTML = `${dataFake.active}`;
    // document.querySelector('#ndata3').innerHTML = `${dataFake.state}`;
    // document.querySelector('ndata4').innerHTML = `${dataFake.deaths}`;
    
}
fetchData();
