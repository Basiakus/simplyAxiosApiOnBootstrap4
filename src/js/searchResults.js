const searchResultList = document.getElementById("serch-result");

const generateLiElement = text => `<li class="list-group-item">${text}</li>`;

export const searchResult = (option, result) => {
    let html;
    if (option === 'people') {
        html = result.map(value =>
			generateLiElement(`<b>name:</b> ${value.name}, <b>birthday:</b> \n ${value.birth_year}`)
		);
    } else if (option === 'films') {
        html = result.map(value =>
			generateLiElement(`<b>title:</b> ${value.title}`)
		);
	}
    searchResultList.innerHTML = html.join('');
} 

