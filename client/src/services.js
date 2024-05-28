


//********************************Users Section**********************************//


export const login = async (username, password, applyFunc) => {
	const url = "http://localhost:8090/api/users/login";
	const body = JSON.stringify({ username, password});
	console.log(`body: before LC:`, body);
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	console.log(`res:`, res);
	if (res.ok) {
		const result = await res.json();
		console.log(`result: `, result);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: result.password,
				id: result._id,
				username: result.username,
			})
			
		);
		localStorage.setItem("signedIn",true);

		console.log(`localStorage: `, localStorage);
		applyFunc(true);
	} else {
		applyFunc(false);
	}
	console.log(`localStorage: `, localStorage);
	console.log("submitted");
};


export const getWithWallet = async (account) => {
	let answer;
	const url = "http://localhost:8090/api/users";
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "GET", headers });
	if (res.ok) {
		 
		const result = await res.json();
		
		for (let j = 0;j< result.length; j++) {
		
			if (result[j].walletaddress === account) {
			answer = result[j];
			
			}
			
		}
		
	} else {
		return error("Wallet Owner not found, please sign up.");
	
	}
	return answer;
};

export const register = async (username, email, password, walletaddress, profileAddress,userType) => {
	const url = "http://localhost:8090/api/users/register";
	const body = JSON.stringify({ username, email, password, walletaddress, profileAddress,userType});
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

export const logout = async (applyFunc) => {
	const url = "http://localhost:8090/api/users/logout";
	const { token } = JSON.parse(localStorage.getItem("userData"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body: "", headers });
	if (res.ok) {
		applyFunc(false);
	} else {
		applyFunc(true);
	}
	
	const result = await res.json();
	localStorage.setItem("signedIn", false);
	return result;
};

export const getUser = async (userId) => {
	const userData = JSON.parse(localStorage.getItem("userData"));
	return userData;
};


export const getUsers = async() => {
	const url = "http://localhost:8090/api/users";
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "GET", headers });
	if (res.ok) {
		applyFunc(false);
		const result = await res.json();
		return result;
	} else {
		applyFunc(true);
	
	}
	
	const result = await res.json();
	return result;
	 

};



//********************************Transactions Section**********************************//


export const getTransactions = async (applyFunc) => {
	const url = "http://localhost:8090/api/transactions";
	const res = await fetch(url);
	res.json().then((transactions) => {
		applyFunc([...transactions]);
	});
};


export const addTranscation = async ( data) => {
	const { token, id, username  } = JSON.parse(localStorage.getItem("userData"));


	const body = JSON.stringify({ user_id: id, data: data });
	const headers = {
		"Content-Type": "application/json",
	};
	// console.log(headers);
	try {
		const response = await fetch(
			"http://localhost:8090/api/transactions/post",
			{ method: "POST", headers: headers, body: body }
		);
		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(
			`Error fetching and posting transaction: ${error.message}`
		);
	}

	
};


/*****************************Assets Section ********************************** */



export const getFarmers = async(applyFunc) => {
	const url = "http://localhost:8090/api/farmers";
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "GET", headers });
	res.json().then((farmers) => {
		applyFunc([...farmers]);
	});
	

};

export const addFarmer = async (address, description) => {
	const { token, id, username } = JSON.parse(localStorage.getItem("userData"));
	const url = "http://localhost:8090/api/farmers";
	const body = JSON.stringify({ address: address, description: description });
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

