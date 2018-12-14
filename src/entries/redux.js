import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handelSubmit);

function handelSubmit (event){
	event.preventDefault();
	const data = new FormData($form);
	const title = data.get('title');
	console.log(title);
	store.dispatch({
		type: 'ADD_SONG',
		payload: {
			title,
		}
	})
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

const reducer = function (state, action) {
	switch (action.type) {
		case 'ADD_SONG':
			return [...state, action.payload]
			break;
		default:
			return state

	}
}

const store = createStore (
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
const $container = document.getElementById('playlist');
const playlist = store.getState();
 playlist.forEach((item) => {
	 const template = document.createElement('p');
	 template.textContent = item.title;
	 $container.appendChild(template);
 })

console.log(store.getState())
