import React from "react"

function SearchBar({setSearchQueueFunction, setSearchingFunction}) {
	return (
		<input 
			type="search" 
			placeholder="Looking for a specific game?" 
			id="search_bar" 
			onChange={(event) => setSearchQueueFunction(event.target.value.toLowerCase())} 
			onFocus={() => setSearchingFunction(true)}
		/>
	);
}

export default SearchBar;
