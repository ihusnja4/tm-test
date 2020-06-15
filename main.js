(function (env) {
    env.TMTestScript = {
        sayHi(name) {
            console.log(`Hello there ${name}!`);
        }
    };
})(window || globalThis);
