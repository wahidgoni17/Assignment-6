const loadAi = async() =>{
    const aiURL = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(aiURL);
    const data = await res.json();
    showAI(data.data.tools)
    console.log(data.data.tools)
}
const showAI = (tools) =>{
    const aiContainer = document.getElementById('ai-container')
    tools.forEach(tool => {
        console.log(tool)
        const aiDiv = document.createElement('div')
        aiDiv.innerHTML = `
        <div class="card w-full h-full bg-slate-100 shadow-2xl">
             <figure class="px-6 pt-5">
                <img src="${tool.image ? tool.image : 'No Picture found'}" alt="Shoes" class="h-56 w-full rounded-xl" />
            </figure>
            <div class="card-body items-center">
                <div class="pb-5 border-b-2 border-gray-300	">
                    <h1 class="pt-5 pl-7 text-xl font-medium">Features</h1>
                        <ol class="pt-3 pl-7">
                            <li>1. ${tool.features[0]}</li>
                            <li>2. ${tool.features[1]}</li>
                            <li>3. ${tool.features[2] ? tool.features[2] : 'Null'}</li> 
                        </ol>  
                </div>
                <div class="pt-5 flex justify-between items-center">
                    <div>
                        <h1 class="pl-7 text-xl font-medium">${tool.name}</h1>
                        <input class="ml-7 mt-3 mb-7" type="date" value="2022-01-11" />
                    </div>
                    <div>
                        <button class="mr-5 px-2 py-1  text-red-400 rounded-full text-xl font-medium bg-red-100"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
        </div>`
        aiContainer.appendChild(aiDiv)
    });  
}
loadAi()