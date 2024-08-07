function browserHistory(obj, activity) {
    obj.openTab = function (name) {
        if (!this["Open Tabs"].includes(name)) {
            this["Open Tabs"].push(name);
            this["Browser Logs"].push(`Open ${name}`);
        }
    };

    obj.closeTab = function (name) {
        if (this["Open Tabs"].includes(name)) {
            this["Open Tabs"].splice(this["Open Tabs"].indexOf(name), 1);
            this["Recently Closed"].push(name);
            this["Browser Logs"].push(`Close ${name}`);
        }
    };

    obj.clearHistory = function () {
        this["Open Tabs"] = [];
        this["Recently Closed"] = [];
        this["Browser Logs"] = [];
    };

    obj.printInfo = function () {
        console.log(`${this["Browser Name"]}`);
        console.log(`Open Tabs: ${this["Open Tabs"].join(", ")}`);
        console.log(`Recently Closed: ${this["Recently Closed"].join(", ")}`);
        console.log(`Browser Logs: ${this["Browser Logs"].join(", ")}`);
    };

    for (const item of activity) {
        const [command, ...name] = item.split(" ");

        if (command === "Close") {
            obj.closeTab(name.join(" "));
        } else if (command === "Open") {
            obj.openTab(name.join(" "));
        } else if (command === "Clear") {
            obj.clearHistory();
        }
    }

    obj.printInfo();
}

browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"], "Recently Closed":["Yahoo","Gmail"], "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]}, ["Close Facebook", "Open StackOverFlow", "Open Google"])
// Google Chrome
// Open Tabs: YouTube, Google Translate, StackOverFlow, Google
// Recently Closed: Yahoo, Gmail, Facebook
// Browser Logs: Open YouTube, Open Yahoo, Open Google Translate, Close Yahoo, Open Gmail, Close Gmail, Open Facebook, Close Facebook, Open StackOverFlow, Open Google