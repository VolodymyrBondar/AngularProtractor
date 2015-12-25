var AngularPage = require('./AngularHomepage.js');

describe('angularjs homepage', function () {
    var page;

    beforeEach(function () {
        page = new AngularPage();
    });

    it('should have a title', function (){
        browser.getTitle().then(function(title){
            expect(title).toEqual(page.pageTitle);
        })
    });

    it('should greet the named user', function () {
        page.typeName(page.nameToType);
        expect(page.greeting).toEqual(page.expectedGreeting);
    });

    describe('todo list', function () {
        it('should list todos', function () {
            expect(page.todoList.count()).toEqual(2);
            expect(page.todoAt(1)).toEqual('build an angular app');
        });

        it('should add a todo', function () {
            page.addTodo(page.todoName).then(function(){
                expect(page.todoList.count()).toEqual(3);
                page.todoAt(2).then(function(text){
                    expect(text).toEqual(page.todoName);
                })
            });
        });

        it('should add a todo', function () {
            page.addTodo(page.todoName).then(function(){
                expect(page.todoList.count()).toEqual(3);
                page.todoAt(2).then(function(text){
                    expect(text).toEqual(page.todoName);
                })
            });
        });
    });

    describe('locale Us', function () {
        it('should view correct data', function () {
            page.localizationAt(1).then(function(text){
                expect(text).toEqual("Currency: $123,456.00");
            });
        });
        it('should click on Pluralization tab', function () {
            page.localeClick(1).getText().then(function(text) {
                expect(text).toEqual("Pluralization");
            });
        })
    })

    afterEach(function () {
        browser.sleep(1000);
    });
});