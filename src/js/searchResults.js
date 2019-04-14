const searchResultList = document.getElementById("serch-result");

const generateLiElement = text => `<li class="list-group-item">${text}</li>`;

export const searchResult = (option, result) => {
    let html;
    if (option === 'people') {
        html = result.map(value =>
			generateLiElement(`<b>name:</b> ${value.name}, <b>birthday:</b>${value.birth_year}`)
		);
    } else if (option === 'films') {
        html = result.map(value =>
			generateLiElement(`<b>title:</b> ${value.title}`)
		);
    } else if (option === 'starships') {
        html = result.map(value =>
            generateLiElement(
                `
                <b>name:</b> ${value.name}, 
                <b>model:</b> ${value.model}, 
                <b>price:</b> ${value.cost_in_credits}, 
                <b>speed:</b> ${value.max_atmosphering_speed}, 
                <b>speed:</b> ${value.max_atmosphering_speed},
                <b>capacity:</b> ${value.cargo_capacity}
                `
            )
        );
    } else if (option === 'vehicles') {
        html = result.map(value =>
            generateLiElement(
                `
                <b>name:</b> ${value.name}, 
                <b>model:</b> ${value.model}, 
                <b>price:</b> ${value.cost_in_credits}, 
                <b>speed:</b> ${value.max_atmosphering_speed}, 
                <b>capacity:</b> ${value.cargo_capacity}
                `
            )
        );
    } else if (option === 'planets') {
        html = result.map(value =>
            generateLiElement(
                `
                <b>name:</b> ${value.name}, 
                <b>diameter:</b> ${value.diameter}, 
                <b>gravity:</b> ${value.gravity}, 
                <b>population:</b> ${value.population},
                <b>climate:</b> ${value.climate}
                <b>terrain:</b> ${value.terrain}
                `
            )
        );
    }
    searchResultList.innerHTML = html.join('');
} 

