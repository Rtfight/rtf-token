/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  PointPayToken,
  PointPayTokenInterface,
} from "../../contracts/PointPayToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_supply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "addToBlockList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isBlocklisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "removeFromBlocklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011a9380380620011a983398101604081905262000034916200038f565b816040518060400160405280600e81526020016d2837b4b73a2830bc902a37b5b2b760911b8152506040518060400160405280600381526020016205058560ec1b81525081600390816200008991906200046f565b5060046200009882826200046f565b50506005805460ff19169055506001600160a01b038116620000d557604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b620000e081620000f5565b50620000ed82826200014f565b505062000563565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200017b5760405163ec442f0560e01b815260006004820152602401620000cc565b62000189600083836200018d565b5050565b6001600160a01b03831660009081526006602052604090205460ff16158015620001d057506001600160a01b03821660009081526006602052604090205460ff16155b6200020c5760405162461bcd60e51b815260206004820152600b60248201526a139bdd08185b1b1bddd95960aa1b6044820152606401620000cc565b620002198383836200021e565b505050565b6200022862000235565b620002198383836200025c565b60055460ff16156200025a5760405163d93c066560e01b815260040160405180910390fd5b565b6001600160a01b0383166200028b5780600260008282546200027f91906200053b565b90915550620002ff9050565b6001600160a01b03831660009081526020819052604090205481811015620002e05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000cc565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200031d576002805482900390556200033c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200038291815260200190565b60405180910390a3505050565b60008060408385031215620003a357600080fd5b82516001600160a01b0381168114620003bb57600080fd5b6020939093015192949293505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620003f657607f821691505b6020821081036200041757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021957600081815260208120601f850160051c81016020861015620004465750805b601f850160051c820191505b81811015620004675782815560010162000452565b505050505050565b81516001600160401b038111156200048b576200048b620003cb565b620004a3816200049c8454620003e1565b846200041d565b602080601f831160018114620004db5760008415620004c25750858301515b600019600386901b1c1916600185901b17855562000467565b600085815260208120601f198616915b828110156200050c57888601518255948401946001909101908401620004eb565b50858210156200052b5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200055d57634e487b7160e01b600052601160045260246000fd5b92915050565b610c3680620005736000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad57806395d89b411161007157806395d89b4114610279578063a9059cbb14610281578063dd62ed3e14610294578063e4b40d8d146102cd578063f2fde38b146102e057600080fd5b8063715018a61461020a57806379cc6790146102125780638456cb59146102255780638da5cb5b1461022d5780638e204c431461025657600080fd5b80633f4ba83a116100f45780633f4ba83a146101a657806342966c68146101b0578063592ca850146101c35780635c975abb146101d657806370a08231146101e157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b6101396102f3565b6040516101469190610a42565b60405180910390f35b61016261015d366004610aac565b610385565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610ad6565b61039f565b60405160128152602001610146565b6101ae6103c3565b005b6101ae6101be366004610b12565b6103d5565b6101ae6101d1366004610b2b565b6103e2565b60055460ff16610162565b6101766101ef366004610b2b565b6001600160a01b031660009081526020819052604090205490565b6101ae61044c565b6101ae610220366004610aac565b61045e565b6101ae610477565b60055461010090046001600160a01b03166040516001600160a01b039091168152602001610146565b610162610264366004610b2b565b60066020526000908152604090205460ff1681565b610139610487565b61016261028f366004610aac565b610496565b6101766102a2366004610b4d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101ae6102db366004610b2b565b6104a4565b6101ae6102ee366004610b2b565b610509565b60606003805461030290610b80565b80601f016020809104026020016040519081016040528092919081815260200182805461032e90610b80565b801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b5050505050905090565b600033610393818585610544565b60019150505b92915050565b6000336103ad858285610556565b6103b88585856105d4565b506001949350505050565b6103cb610633565b6103d3610666565b565b6103df33826106b8565b50565b6103ea610633565b6001600160a01b03811660009081526006602052604090205460ff1661042b5760405162461bcd60e51b815260040161042290610bba565b60405180910390fd5b6001600160a01b03166000908152600660205260409020805460ff19169055565b610454610633565b6103d360006106ee565b610469823383610556565b61047382826106b8565b5050565b61047f610633565b6103d3610748565b60606004805461030290610b80565b6000336103938185856105d4565b6104ac610633565b6001600160a01b03811660009081526006602052604090205460ff16156104e55760405162461bcd60e51b815260040161042290610bba565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b610511610633565b6001600160a01b03811661053b57604051631e4fbdf760e01b815260006004820152602401610422565b6103df816106ee565b6105518383836001610785565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105ce57818110156105bf57604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610422565b6105ce84848484036000610785565b50505050565b6001600160a01b0383166105fe57604051634b637e8f60e11b815260006004820152602401610422565b6001600160a01b0382166106285760405163ec442f0560e01b815260006004820152602401610422565b61055183838361085a565b6005546001600160a01b036101009091041633146103d35760405163118cdaa760e01b8152336004820152602401610422565b61066e6108c3565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166106e257604051634b637e8f60e11b815260006004820152602401610422565b6104738260008361085a565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6107506108e6565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861069b3390565b6001600160a01b0384166107af5760405163e602df0560e01b815260006004820152602401610422565b6001600160a01b0383166107d957604051634a1406b160e11b815260006004820152602401610422565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105ce57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161084c91815260200190565b60405180910390a350505050565b6001600160a01b03831660009081526006602052604090205460ff1615801561089c57506001600160a01b03821660009081526006602052604090205460ff16155b6108b85760405162461bcd60e51b815260040161042290610bba565b61055183838361090a565b60055460ff166103d357604051638dfc202b60e01b815260040160405180910390fd5b60055460ff16156103d35760405163d93c066560e01b815260040160405180910390fd5b6109126108e6565b6105518383836001600160a01b0383166109435780600260008282546109389190610bdf565b909155506109b59050565b6001600160a01b038316600090815260208190526040902054818110156109965760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610422565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166109d1576002805482900390556109f0565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a3591815260200190565b60405180910390a3505050565b600060208083528351808285015260005b81811015610a6f57858101830151858201604001528201610a53565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610aa757600080fd5b919050565b60008060408385031215610abf57600080fd5b610ac883610a90565b946020939093013593505050565b600080600060608486031215610aeb57600080fd5b610af484610a90565b9250610b0260208501610a90565b9150604084013590509250925092565b600060208284031215610b2457600080fd5b5035919050565b600060208284031215610b3d57600080fd5b610b4682610a90565b9392505050565b60008060408385031215610b6057600080fd5b610b6983610a90565b9150610b7760208401610a90565b90509250929050565b600181811c90821680610b9457607f821691505b602082108103610bb457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600b908201526a139bdd08185b1b1bddd95960aa1b604082015260600190565b8082018082111561039957634e487b7160e01b600052601160045260246000fdfea2646970667358221220d2feb7cafe24f8d1f58f3432b3a1c5825ce4f1955156407720f44d30ffb1aefc64736f6c63430008140033";

type PointPayTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PointPayTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PointPayToken__factory extends ContractFactory {
  constructor(...args: PointPayTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    _supply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, _supply, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    _supply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, _supply, overrides || {}) as Promise<
      PointPayToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PointPayToken__factory {
    return super.connect(runner) as PointPayToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PointPayTokenInterface {
    return new Interface(_abi) as PointPayTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PointPayToken {
    return new Contract(address, _abi, runner) as unknown as PointPayToken;
  }
}
