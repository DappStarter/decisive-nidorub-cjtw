require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember snake good knee outer shift'; 
let testAccounts = [
"0x2b43a8bb5db5d47789d718a0590bca9615c81a2eb59df874eecc54b8348dd590",
"0xe70c60e4985a6ed984c11eb96c92e687539c62b152c9055c892a1558aa63be6b",
"0xd0838969764cf6810608294ac4351aa4e6566ecc9b768d0dca772c84f30ea8c7",
"0x1d71cc7123e57bc755d00faeac11c257e978ec43a54f1198b04fed0543b67163",
"0x2bb34ae02d348e84e19a6ce8a372fedf8a8ed5c643fe07327da3d7e73b12580f",
"0x82518b569fe0e53c17477c4a1e0d7ab092931c8f7bf9aeb0f886106079afe564",
"0xc4b7b13f101108d816da5da04e4993120a2a0361347beb3bdfcc215ce765e85d",
"0xc6d2c9255bcd520bba87199635249cafd186be28eab1df3cd7d7f94670af1fc7",
"0x7393f29cd4fc28531091594a5b44a0f6fcbdfed8308279374b60b2da68c4267c",
"0xc17695ee503695e08a4ad13bd9773bf36b05f87d37931b45bfb6810e9f3ce145"
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

