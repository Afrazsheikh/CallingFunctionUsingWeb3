
   let Web3 =  require("web3);
   //create web3 objejct

 let web3 =  new Web3 (new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));  //paste ganache url 


  let contract = new web3.eth.Contarct([
   {
       "inputs": [
           {
               "internalType": "uint256",
               "name": "_x",
               "type": "uint256"
           }
       ],
       "name": "set",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
   },
   {
       "inputs": [],
       "name": "x",
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
], "0xF42960446669eCab197351E61CA417A529f55AB2") ;                //find out the contract Abi and adress from remix where we deployed our sm 

//call the smartContract function  (function nname is x)
contarct.methods.x().call().then(console.log);
//calling smart contract set function

contract.methods.set(90).send({from:"specify the address from which we want to send ")