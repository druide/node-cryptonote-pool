var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v0.100.0";

var donationAddresses = {
    devDonation: {
        XMR: '45Jmf8PnJKziGyrLouJMeBFw2yVyX1QB52sKEQ4S1VSU2NVsaVGPNu4bWKkaHaeZ6tWCepP6iceZk8XhTLzDaEVa72QrtVh'
    },
    coreDevDonation: {
        BCN: '252m7ru3wT5McAUztrZDExJ9PgnmyJVgk2ayucQLt13dFrf5DE4SrSBVkbtVhvZbRj1Ty4cVWaE6MGDVArZLpuMhCkrvToA',
        BBR: '@zoidberg',
        XMR: '46BeWrHpwXmHDpDEUmZBWZfoQpdc6HaERCNmx1pEYL2rAcuwufPN9rXHHtyUA4QVy66qeFQkn6sfK8aHYjA3jk3o1Bv16em',
        QCN: '1R9wwAH68XNGHZBsSCbyPL5EBepCoqnPPYpUuYx7jyZtc1SqekoM5p4iiB4EnkHBMXUrkwg7vR35vcoC6h48t7AjKXqXWqX',
        FCN: '6ntYwFY2syKVha7K1KZrhD8Uyzc2VsCpAjGi8YptCVHmfeqkAyRWQSX8gV23uvnHZY2LssBMoidGfCrVAc9k1RSsN7WKSf2',
        AEON: 'WmsG9mv8iSeJ8w2U9J1jRXNbLT7bCUj9VShzGuBctrhEBMHWxLZ2noSYhs8WgM4RDR68mrMW7hm33NRiDV8bNVu52azJb6XoN',
        OEC: 'C9ouydpeiyT2gVr5MqPUjHVJ26nJ9b8ZmMtVYRRTpGqHXA973MvzUWiFFhFCapkLmdVivd1c8Fj5wKDNw3oao7K44bUeAqx',
        DSH: 'D3z2DDWygoZU4NniCNa4oMjjKi45dC2KHUWUyD1RZ1pfgnRgcHdfLVQgh5gmRv4jwEjCX5LoLERAf5PbjLS43Rkd8vFUM1m'
    }
};

global.donations = {};

for(var configOption in donationAddresses) {
    var percent = config.blockUnlocker[configOption];
    var wallet = donationAddresses[configOption][config.symbol];
    if(percent && wallet) {
        global.donations[wallet] = percent;
    }
}
