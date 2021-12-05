require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure seed alone renew rural maid coral light army gasp'; 
let testAccounts = [
"0x25a9b75796cb4db0ca46ed94ef4dcb6b070048b9c680c0975142eca3cfb64294",
"0x60649ec123da7837cf05b0cc044f054f2d54c21ba63dc9631d522b09ac74263f",
"0x4103556cf95e74b80b1fb95520dd8051ab8467dc2b370612541b198c0077c7b8",
"0xcd2dc7a72264c919a6d4488f1fdb9f251e236a88595776e16278eb1818d68456",
"0x138b6ee1f322fd15601403f0def3fa784c4f8bcaa2eb9a6c33d5f47052ef3739",
"0x2483508077e7c6e6089dbf1e948bc13a20f889f5fad911e0a89a3c40341c8b59",
"0x10a006fb16ea72e396dfcb4359421f8a199ca35952424e26888dc9a1c90401e8",
"0x6168ef3bc29fd1dbded6bdc0ba1139e00bd5ba8c5fcfc6f8e48b2ec3f2b34eda",
"0xa6c32c5a97202a18b130576ec144943c75a942b419778203c9a5f6e09db75de8",
"0x97569e5c753e394be384cb8dfc28f69f0c844eb3fa473fbdf753c11f8e008112"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

