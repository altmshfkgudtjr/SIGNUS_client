const Fetch = (
	url: string, 
	method: string, 
	sendData?: any, 
	callback?: (res?: any) => void, 
	failed?: (res?: any) => void
) => {
	if (method.toUpperCase() === "GET") {
		return fetch(url, {
			method: method,
		})
		.then(res => {
			switch(Math.floor(res.status/100)) {
				case 4:
					if (typeof(failed) === 'function') {
						failed();
					}
					break;
				case 5:
					if (typeof(failed) === 'function') {
						failed();
					}
					break;
				default:
					break;
			} 
			return res;
		})
		.then(res => res.json())
		.then((res: any) => {
			if (typeof(callback) === 'function') {
				callback(res);
			}
			return res;
		})
		.catch((err)=> {
			return err;
		});
	} else {
		return fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sendData)
		})
		.then(res => {
			switch(Math.floor(res.status/100)) {
				case 4:
					if (typeof(failed) === 'function') {
						failed();
					}
					break;
				case 5:
					if (typeof(failed) === 'function') {
						failed();
					}
					break;
				default:
					break;
			} 
			return res;
		})
		.then(res => res.json())
		.then((res: any) => {
			if (typeof(callback) === 'function') {
				callback(res);
			}
			return res;
		})
		.catch((err)=> {
			return err;
		});
	}
}

export default Fetch