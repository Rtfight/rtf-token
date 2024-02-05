import { ethers } from "hardhat"

async function main() {

    const ReadyToFightToken = await ethers.getContractFactory("ReadyToFightToken")

    const mintTo = "" // address
    const supply = ethers.parseUnits("400000000.0", 18)

    const token = await ReadyToFightToken.deploy(mintTo, supply, {
        gasLimit: 10000000
    })
    
    console.log(`Deployed ReadyToFightToken at address: ${token.target}`)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})