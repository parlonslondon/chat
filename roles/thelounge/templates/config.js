"use strict";

module.exports = {

    // server settings
    
    public: true,
    host: "localhost", // nginx acts as a proxy
    port: 9000,
    reverseProxy: true, // again, nginx
    maxHistory: 10000, // default 10000

    // client settings
    theme: "default",
    prefetch: false,
    disableMediaPreview: false,
    prefetchStorage: false,
    prefetchMaxImageSize: 2048,
    fileUpload: {
	enable: false,
	maxFileSize: 10240,
	baseUrl: null,
    },
    transports: ["polling", "websocket"],
    leaveMessage: "Parlons London - https://{{ servername }}",

    defaults: {
	name: "ParlonsLondon",
	host: "localhost",
	port: 6667,
	password: "",
	tls: false,
	rejectUnauthorized: false,
	nick: "parlons%%%",
	username: "qqn",
	realname: "Personne de Parlons",
	join: "#general",
    },

    lockNetwork: true,

    messageStorage: ["sqlite"],

    useHexIp: false,

    // ## WEBIRC support
    //
    // When enabled, The Lounge will pass the connecting user's host and IP to the
    // IRC server. Note that this requires to obtain a password from the IRC
    // network that The Lounge will be connecting to and generally involves a lot
    // of trust from the network you are connecting to.
    //
    // There are 2 ways to configure the `webirc` setting:
    //
    // - **Basic**: an object where keys are IRC hosts and values are passwords.
    //   For example:
    //
    //   ```json
    //   webirc: {
    //     "irc.example.net": "thisiswebircpassword1",
    //     "irc.example.org": "thisiswebircpassword2",
    //   },
    //   ```
    //
    // - **Advanced**: an object where keys are IRC hosts and values are functions
    //   that take two arguments (`webircObj`, `network`) and return an
    //   object to be directly passed to `irc-framework`. `webircObj` contains the
    //   generated object which you can modify. For example:
    //
    //   ```js
    //   webirc: {
    //     "irc.example.com": (webircObj, network) => {
    //       webircObj.password = "thisiswebircpassword";
    //       webircObj.hostname = `webirc/${webircObj.hostname}`;
    //       return webircObj;
    //     },
    //   },
    //   ```
    //
    // This value is set to `null` to disable WEBIRC by default.
    webirc: null,

    identd: {
	enable: false,
	port: 113,
    },
    oidentd: null,

    ldap: {
	enable: false,
    },

    debug: {
        ircFramework: false,
        raw: false,
    },
};
