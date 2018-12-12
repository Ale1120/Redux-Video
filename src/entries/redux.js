
const $form = document.getElementById('form');
$form.addEventListener('submit', handelSubmit);

function handelSubmit (event){
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
}