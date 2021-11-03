const id = new URLSearchParams(window.location.search).get("id");

let modal = new tingle.modal();
const getUrl = async (e) => {
	body.classList.add("loading");
	const url = e.dataset.url;
	const res = await fetch(url);
	const post = await res.json();

	const template = `
	<div class="modal-header">
	    <h1>${post[0].title}</h1><img class="profile-img" src="${post[0].img}">
	</div>
	    <p>${post[0].body}</p>
		
	    `;
	modal.setContent(template);
	body.classList.remove("loading");
	modal.open();
};
let btn = document.querySelector(".tingle-modal__close");
modal.getContent().style.padding = "1rem 1rem";
btn.onclick = () => modal.close();
