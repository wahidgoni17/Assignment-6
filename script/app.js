const loadAi = async() =>{
    const aiURL = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(aiURL);
    const data = await res.json();
    showAI(data.data.tools.slice(0,6))
    console.log(data.data.tools)
}
const showAI = (tools) =>{
    const aiContainer = document.getElementById('ai-container')
    aiContainer.textContent = ' '
    tools.forEach(tool => {
        console.log(tool)
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
                        <button class="me-2 border border-0 rounded-circle px-2 py-1  text-danger  text-xl font-medium bg-danger-subtle"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
        </div>`
        aiContainer.appendChild(aiDiv)
    });  
}
// get all data and pass all data using slice to show in the UI when click See All button
const showAllDataTogether = async() => {
    const aiURL = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(aiURL);
    const data = await res.json();
    showAI(data.data.tools)
  };

loadAi()