import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handelSubmit);

function handelSubmit (event){
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
}

const initialState = [
	{
		"title": "Despacito",
	},
	{
		"title": "One more Time",
	},
	{
		"title": "Echame la culpa",
	}
]

const store = createStore (
	(state) => state, 
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)