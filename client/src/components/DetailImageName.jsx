import React from "react";
import { Web3 } from 'web3';
import { useState, useContext ,createContext} from "react";

function DetailImageName({imageUrl,farmerName,_id, address, product,practices}) {

    const [stakeAmount, setStakeAmount] = useState(0);
    const User = JSON.parse(localStorage.getItem("userInfo"));
    let UserAdd = User.walletaddress;
 
    const agrixsnftrTokenContract = "0xdca8ECB6Ec537383194bb577A03eF6E584b9c54f";
    const agrixsnftrTokenABI = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "initialSupply",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "allowance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientAllowance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "needed",
                    "type": "uint256"
                }
            ],
            "name": "ERC20InsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "approver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidApprover",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receiver",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidReceiver",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSender",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "ERC20InvalidSpender",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const StakingFarmerContract = "0x69c798ee3a0d291a0f6969352849ddd84093e1f4";

    const StakingFarmerabi =[
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_agrixsnftrToken",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "agrixsnftrToken",
            "outputs": [
                {
                    "internalType": "contract AGRIXSNFTRToken",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "claimReward",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "rewards",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "stake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "stakes",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalStaked",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "unstake",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];


async function stakeFarmer(){
    document.getElementById("stakeButton").classList.add("displaynone");
    document.getElementById("stakefarmer").classList.remove("displaynone");
    document.getElementById("stakeButton2").classList.remove("displaynone");
    
}
async function stakeFarmerAmount() {
    
    
       
        if (typeof window.ethereum !== 'undefined'){
            const ethereum = window.ethereum;
            const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });
        }
        


            const provider = new ethers.providers.Web3Provider(ethereum)
            const walletAddress = UserAdd;    // first account in MetaMask
            const signer = provider.getSigner(walletAddress)
            const StakeContract = new ethers.Contract(StakingFarmerContract, StakingFarmerabi, signer);
            const AgrixSNFTRTokenContract = new ethers.Contract(agrixsnftrTokenContract,agrixsnftrTokenABI,signer)
            await AgrixSNFTRTokenContract.approve(UserAdd, stakeAmount);

            // const agrixsnftrToken = await StakeContract.agrixsnftrToken();
            // const claimReward = await StakeContract.claimReward();
            // const rewards = await StakeContract.rewards()
            const stake = await StakeContract.stake(stakeAmount);
            // const stakes = await StakeContract.stakes();
            // const unstake = await StakeContract.unstake(unstakeAmount);
            // const totalStaked = await StakeContract.totalStaked();
        
            // console.log(`${agrixsnftrToken} is Agrix token. totalStaked is ${totalStaked} and the stakes are ${stakes}`
        
    notStakeFarmer();

}


    
    // console.log(`UserAdd: `,window.ethereum.selectedAddress);
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts",[]);
    // console.log(provider);

    
    // const signer = await provider.getSigner();
   
    // console.log(signer);
    // const signerAddress = await signer.getAddress();
    // console.log(signer);
    // const erc20 = new ethers.Contract(StakingFarmerContract,StakingFarmerabi,provider);
    // const erc20S = new ethers.Contract(StakingFarmerContract,StakingFarmerabi,signerAddress.provider);

    // const totalStaked = await erc20.totalStaked();
    // console.log("totalStaked: ",totalStaked.toString());
    // // const tokenSymbol = await erc20.symbol();
    // // const totalStaked = await erc20.totalStaked();
    // // const approve = await erc20.approve();
    // // approve();

    // console.log("staked:",stakeAmount);
    // console.log("inside stakeAmount");

    // const stake1 = await erc20S.stake(stakeAmount);
   
    // // const totalStaked1 = await erc20.totalStaked();
    // // await totalStaked1.wait();
    // // console.log("totalStaked after: ",totalStaked1.toString());

    

let balance =localStorage.getItem("balanceEnd");

   
    console.log(`balance: `,balance);
//    document.getElementById("checkbalancediv").classList.add("displaynone");     
//    document.getElementById("balancediv").classList.remove("displaynone");

    // const balanceEnd = balance.toString();
    // const storageBalance = Number(balanceEnd.toString());
    // localStorage.setItem("balance",storageBalance);
    // console.log(balanceEnd);
    // balanceButton.innerHTML = `Your Agrixx Token balance is: ${balanceEnd}`;



async function notStakeFarmer(){
    console.log("notstaking");
    document.getElementById("stakeButton").classList.remove("displaynone");
    document.getElementById("stakefarmer").classList.add("displaynone");
    document.getElementById("stakeButton2").classList.add("displaynone");
    
}



    return (
		<div className="textali">
			<img className="imgdetailpage iltextali" src={imageUrl}/>
			<h1 className='textali textcent p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]'>{farmerName}</h1>
            <h1 className="textali textcent detailtitle">PRODUCT: {product}</h1>
            <h1 className="textali textcent detailtitle">PRACTICES:</h1>
            {practices.map((p) => (<p className="textali textcent detailtitle">{p}</p> ))}
           <h1 className="textali textcent"> Use AgrixSLNFTR to Stake</h1>
           <div className="textali textcent">
           <button id="stakeButton2" className='displaynone p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' onClick={stakeFarmerAmount} >Stake {stakeAmount} of {balance} available AGRIXSNFTR  with {farmerName}</button>
           <button id="stakeButton" className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' onClick={stakeFarmer}>Stake from Your AGRIXSNFTR wallet {UserAdd} with {farmerName}</button>
           {/* <button id="unStakeButton" className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' onClick={unStakeFarmer}>Unstake from Your AGRIXSNFTR from  {farmerName}</button>
           <button id="claimReward" className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' onClick={claimReward}>Unstake from Your AGRIXSNFTR from  {farmerName}</button>
           <button id="quantityOfStakes" className='p-[8px] w-[40%] rounded-md text-white bg-[#1BB518] mb-[30px]' onClick={stakes}>Check your total AGRIXSNFTR staked</button> */}
           <br></br>
           <input type="text" id="stakefarmer" className="displaynone inputshadow mb-4 rounded-md p-[12px] w-[40%] outline-none border sm:w-[90%] lg:w-[40%]" placeholder="amount to stake" onChange={(e) => setStakeAmount(e.target.value)}/>
            </div>
		</div>
	);
}

export default DetailImageName
