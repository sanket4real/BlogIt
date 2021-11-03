const container = document.querySelector(".blogs");
const body = document.querySelector("body");
const sort = document.getElementById("sort");

const renderPosts = async () => {
	body.classList.add("loading");
	const uri =
		"https://my-json-server.typicode.com/sanket4real/json-server/posts";
	const res = await fetch(uri);
	const posts = await res.json();

	createTemplate(posts);
	body.classList.remove("loading");
};

const sortBlogs = async (likes, order) => {
	body.classList.add("loading");
	const uri = `https://my-json-server.typicode.com/sanket4real/json-server/posts?_sort=${likes}&_order=${order}`;
	const res = await fetch(uri);
	const posts = await res.json();

	createTemplate(posts);
	body.classList.remove("loading");
};

function createTemplate(posts) {
	let template = "";
	posts.forEach((post) => {
		template += `
        <div class="post">
        <h2>${post.title}</h2>
        <span><small>Likes : <b>${post.likes}</b></small></span>
        <p>${post.body.slice(0, 200)}</p>
        <a href="#" data-url="https://my-json-server.typicode.com/sanket4real/json-server/posts?id=${
					post.id
				}" onclick="getUrl(this)">read more...</a>
        </div>
        `;
	});

	container.innerHTML = template;
}

function handleSelectChange(e) {
	let selectElement = e.target.value;

	if (selectElement === "low") {
		sortBlogs("likes", "asc");
	} else if (selectElement === "high") {
		sortBlogs("likes", "desc");
	}
}

window.addEventListener("DOMContentLoaded", () => renderPosts());
