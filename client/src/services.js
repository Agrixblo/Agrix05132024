

import { useContext } from "react";

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

		console.log(`localStorage: `, localStorage);
		applyFunc(true);
	} else {
		applyFunc(false);
	}
	console.log(`localStorage: `, localStorage);
	console.log("submitted");
};


export const register = async (username, password,walletaddress) => {
	const url = "http://localhost:8090/api/users/register";
	const body = JSON.stringify({ username, password ,walletaddress});
	const headers = { "Content-Type": "application/json" };
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	console.log(result);
	return result;
};

export const logout = async () => {
	const url = "http://localhost:8090/api/users/logout";
	const { token } = JSON.parse(localStorage.getItem("userData"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body: "", headers });
	const result = await res.json();
	localStorage.removeItem("userData");

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
	console.log(body);
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
		console.log(`id:`, data._id);
		return data;
	} catch (error) {
		throw new Error(
			`Error fetching and posting transaction: ${error.message}`
		);
	}

	
};


/*****************************Assets Section ********************************** */



export const getAssets = async (applyFunc) => {
	const url = "http://localhost:8090/api/assets";
	const res = await fetch(url);
	res.json().then((assets) => {
		applyFunc([...assets]);
	});
};

export const addAssets = async (address, description) => {
	const { token, id, username } = JSON.parse(localStorage.getItem("userData"));
	const url = "http://localhost:8090/api/assets";
	const body = JSON.stringify({ address: address, decription: description });
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	const res = await fetch(url, { method: "POST", body, headers });
	const result = await res.json();
	return result;
};

