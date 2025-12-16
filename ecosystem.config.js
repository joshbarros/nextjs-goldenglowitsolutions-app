module.exports = {
    apps: [
        {
            name: "site-b",
            script: "npm",
            args: "start -- -p 3001",
            cwd: "/home/deployer/websites/goldenglowitsolutions",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
