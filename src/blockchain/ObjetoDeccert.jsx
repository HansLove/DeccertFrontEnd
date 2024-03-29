import Web3 from "web3"
import JSON_Contract from './build/Deccert.json'
import { getCurrentAccount } from "./Blockchain"
import { determinarChain } from "./FiltroChains"

const web3=new Web3(window.ethereum)


export class ObjetoDeccert{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        try {
        const id=await web3.eth.net.getId()
        const deployedNetwork=JSON_Contract.networks[id]
        this.account=await getCurrentAccount()
        
        let winner=await determinarChain(deployedNetwork,0)

          const contrato=new web3.eth.Contract(
            JSON_Contract.abi,
            winner
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion con Deccert Smart Contract:",error)
          return {}
        }
      
      
    }


    async Manual(
        userName,
        _uri,
        _address){
        try {
            var _res=await this.contrato.methods.ManualMinting(
                userName,
                _uri,
                _address
                
            ).send({from:this.account})
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }


    async get(index){
        try {
            var _res=await this.contrato.methods.get(index).call()
            return _res        
        } catch (error) {
            console.log('error en Deccert.jsx get:',error)
            return {}
        }
    
    }

    async getURI(index){
        try {
            var _res=await this.contrato.methods.tokenURI(index).call()
            return _res        
        } catch (error) {
            console.log('error en Deccert.jsx get:',error)
            return {}
        }
    
    }    

    
    async getTotal(){
        try {
            var _res=await this.contrato.methods.getTotal().call()
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

    
}


