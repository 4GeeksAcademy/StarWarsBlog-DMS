const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList: [], 
			planetsList: [],
			vehiclesList: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addToFavorites: (item) => {
			setStore({favorites: [...getStore().favorites, item]})	
			},
			deleteFromFavorites: (idToDelete) => {
				const newFavorite = getStore().favorites.filter((item) => item.id != idToDelete)
				setStore({favorites: newFavorite})	
				},
			loadCharacterList: (apiUrl) => {
				fetch(apiUrl)
				.then ((res) => res.json())
				.then ((res) => {
					const nextUrl = res.next
					const resultsArray = res.results
					setStore({characterList: [...getStore().characterList, ...resultsArray]})
					if (!nextUrl) {
						return;
					}  
					getActions().loadCharacterList(nextUrl)
				})
			},
			loadPlanetsList: (apiUrl) => {
				fetch(apiUrl)
				.then ((res) => res.json())
				.then ((res) => {
					const nextUrl = res.next
					const resultsArray = res.results
					setStore({planetsList: [...getStore().planetsList, ...resultsArray]})
					if (!nextUrl) {
						return;
					}  
					getActions().loadPlanetsList(nextUrl)
				})
			},
			loadVehiclesList: (apiUrl) => {
				fetch(apiUrl)
				.then ((res) => res.json())
				.then ((res) => {
					const nextUrl = res.next
					const resultsArray = res.results
					setStore({vehiclesList: [...getStore().vehiclesList, ...resultsArray]})
					if (!nextUrl) {
						return;
					}  
					getActions().loadVehiclesList(nextUrl)
				})
			},
			loadSomeData: () => {
				getActions().loadCharacterList("https://swapi.dev/api/people")
				getActions().loadPlanetsList("https://swapi.dev/api/planets")
				getActions().loadVehiclesList("https://swapi.dev/api/vehicles")
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
