const loadAi = async() =>{
    const aiURL = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(aiURL);
    const data = await res.json();
    showAI(data.data.tools.slice(0,6))
    // console.log(data.data.tools)
}
const showAI = (tools) =>{
    const aiContainer = document.getElementById('ai-container')
    aiContainer.textContent = ' '
    tools.forEach(tool => {
        // console.log(tool)
        const aiDiv = document.createElement('div')
         aiDiv.classList.add('col')
        aiDiv.innerHTML = `
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded" style="h-100">
                <img src="${tool.image ? tool.image : 'No Picture found'}" class="p-1 h-75 w-100" />
            <div class="card-body">
                <div class="pb-3 border-bottom">
                    <h1 class="pt-4 ps-2 fs-2 font-medium">Features</h1>
                        <ol class="pt-2 ps-4">
                            <li>${tool.features[0]}</li>
                            <li>${tool.features[1]}</li>
                            <li>${tool.features[2] ? tool.features[2] : 'Null'}</li> 
                        </ol>  
                </div>
                <div class="pt-3 d-flex justify-content-between align-items-center">
                    <div>
                        <h1 class="ps-2 fs-3">${tool.name}</h1>
                        <input class="ms-2 border border-0 mt-3 mb-7" type="date" value="2022-01-11" />
                    </div>
                    <div>
                        <button onclick="loadAiDetails('${tool.id}')" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" class="me-2 border border-0 rounded-circle px-2 py-1  text-danger  text-xl font-medium bg-danger-subtle"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
        </div>`
        aiContainer.appendChild(aiDiv)
    }); 
    // toggleSpinner(false)
}
// loading section
// const toggleSpinner = isLoading => {
//     const loaderSection = document.getElementById('loader');
//     if(isLoading){
//         loaderSection.classList.remove('d-none')
//     }
//     else{
//         loaderSection.classList.add('d-none');
//     }
// }
// get all data and pass all data using slice to show in the UI when click See All button
const showAllDataTogether = async() => {
    const aiURL = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(aiURL);
    const data = await res.json();
    showAI(data.data.tools)
    const showbtndiv = document.getElementById('show-btn-div')
    showbtndiv.classList.add('d-none')
  };
//----------AI details----------//
const loadAiDetails = async(id) =>{
    const aidetailsURL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(aidetailsURL)
    const data = await res.json()
    displayAiDetails(data.data)
}
const displayAiDetails = data =>{
    console.log(data)
    const aidetailsDiv = document.getElementById('ai-details')
    aidetailsDiv.innerHTML=`
    <div class="bg-danger-subtle border border-danger border-2 rounded w-50">
        <h2 class="ps-3 pt-3">${data.description}</h2>
        <div class="d-flex px-3 justify-content-around">
            <div class="bg-light rounded text-center pt-2 p-2">
                <h5 class="text-success fw-bold">${data.pricing[0].price}</h5>
                <h5 class="text-success fw-bold">${data.pricing[0].plan}</h5>
            </div>
            <div class="bg-light rounded text-center p-2">
                <h5 class="text-warning fw-bold">${data.pricing[1].price}</h5>
                <h5 class="text-warning fw-bold">${data.pricing[1].plan}</h5>
            </div>
            <div class="bg-light rounded w-25 text-center p-2">
                <h5 class="text-danger fw-bold">${data.pricing[2].price}</h5>
                <h5 class="text-danger fw-bold">${data.pricing[2].plan}</h5>
            </div>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div>
                <h3>Features</h3>
                <ul>
                    <li>${data.features["1"].feature_name}</li>
                    <li>${data.features["2"].feature_name}</li>
                    <li>${data.features["3"].feature_name}</li>
                </ul>
            </div>
            <div>
                <h3>Integrations</h3>
                <ul>
                    <li>${data.integrations[0]}</li>
                    <li>${data.integrations[1]}</li>
                    <li>${data.integrations[2] ? data.integrations[2] : "no data found"}</li>
                </ul>
            </div>
        </div> 
    </div>
    <div class="w-50 border border-light-subtle rounded">
        <div>
        <img src="${data.image_link[0]}" class="h-50 w-100 p-3">
        </div>
    </div>
    `
}


loadAi()