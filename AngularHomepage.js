var AngularPage = function () {
    browser.get('http://www.angularjs.org');
};

AngularPage.prototype  = Object.create({}, {
    pageTitle: {
        value: "AngularJS — Superheroic JavaScript MVW Framework"
    },

    nameToType: {
        value: "Vova"
    },
    expectedGreeting: {
        value: "Hello Vova!"
    },
    todoName: {
        value: "Write some code on JS!"
    },
    projectName: {
        value: "angular"
    },

    yourName:   {   get: function ()     { return element(by.model("yourName"));             }},
    typeName:   { value: function (name) { return this.yourName.sendKeys(name);              }} ,
    greeting:   {   get: function ()     { return element(by.binding("yourName")).getText(); }},

    todoText: {
        get: function () { return element(by.model('todoList.todoText'));             }
    },
    addButton:  {   get: function ()     { return element(by.css("[value='add']"));          }},
    addTodo:    { value: function (todo) {
        this.todoText.sendKeys(todo);
        return this.addButton.click();
    }},
    todoList:   {   get: function ()     { return element.all(by.repeater("todo in todoList.todos")); }},
    todoAt:     { value: function (idx)  { return this.todoList.get(idx).getText();          }},

    localeUsModule: { get: function () { return element(by.css("[module='app-us']"));}},
    localeList: { get: function () { return this.localeUsModule.all(by.repeater("pane in panes"));}},
    localeClick: { value: function(idx) { return this.localeList.get(idx).click();}},
    localizationList: { get: function () { return this.localeUsModule.all(by.css(".ng-binding.ng-scope"));}},
    localizationAt: { value: function(idx) { return this.localizationList.get(idx).getText();}}

});

module.exports = AngularPage;