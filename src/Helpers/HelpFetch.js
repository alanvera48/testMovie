const api_key = '1dd804edd47c29706d4b8d65e6e89e82';

export const HelpFetch = () => {

	const customFetch = (endpoint, options)=>{

		const defaultHeaders = {
			accept: 'application/json',
		}

		//Abort Controller 
		const controller = new AbortController();
		options.signal = controller.signal;

			
		options.method = options.method || 'GET';
		options.headers = options.headers? ({...options.headers, ...defaultHeaders}): defaultHeaders;
		options.body = JSON.stringify(options.body) || false;

		if(!options.body) delete options.body;

		setTimeout(()=>{controller.abort()}, 3000);

		return fetch(endpoint,options)
			.then(res=> res.ok? res.json():Promise.reject({
				err: true, 
				status: res.status|| "000",
				statusText: res.statusText|| "Error GET API"}))
			.catch(err=> err)
	}

	const urlDiscovery = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc`;

	const GetDiscover = (url,options = {} ) => {
		
		return customFetch(urlDiscovery,options)};

 	
	const GetSearch = (url,options = {} ) => customFetch(url,options);
 	 
 	

	return{
			GetDiscover,
			GetSearch,
		
	
	}
};
