
describe('Todo', function() {
    var todo = [
        new Todo("test0"),
        new Todo("test1",true),
        new Todo("test2",false),
    ]
    describe('new', function() {
	it('s 1st argument is for it\'s text property that is a string.', function() {
	    assert.equal(todo[0].text, "test0");
	    assert.equal(todo[1].text, "test1");
	    assert.equal(todo[2].text, "test2");
	});
	it('s 2nd argument is for it\'s isChecked property that is a boolean.', function() {
	    assert.equal(todo[1].isChecked, true);
	    assert.equal(todo[2].isChecked, false);
	});
	it('s 2nd argument is undefined, it\'s isCheck property value is false.', function() {
	    assert.equal(todo[0].isChecked, false);
	});
    });
    describe('#flipCheck()', function() {
		 it('must return fliped isChecked', function() {
		     todo.map(x => x.flipCheck())
		     assert.equal(todo[0].isChecked, true);
		     assert.equal(todo[1].isChecked, false);
		     assert.equal(todo[2].isChecked, true);
		 });
    });
});

describe('TodoList', function() {
    var initList = [
            new Todo("todo0"),
            new Todo("todo1", true),
            new Todo("todo2", false),
    ]
    var todoList = [
        new TodoList(),
        new TodoList(initList),
    ]
    describe('new', function() {
	it('\'s argument is for it\'s todoList property', function() {
	    assert.equal(todoList[0].count, 0);
	    assert.equal(todoList[0].todoList.length, 0);
	    // assert.equal(todoList[0].todoList, []);
	    assert.equal(todoList[1].count, initList.length);
	    assert.equal(todoList[1].todoList.length, initList.length);
	    // assert.equal(todoList[1].todoList === initList, true);
	});
    });
    // describe('#addTodo()', function() {
    //     todoList.map(x => x.addTodo("grab a cat"))
    // 	it('add a new item into the todoList.', function() {
    // 	    assert.equal(todoList[0].count, 1);
    // 	    assert.equal(todoList[0].todoList, []);
    // 	    assert.equal(todoList[1].count, initList.length);
    // 	    assert.equal(todoList[1].todoList === initList, true);
    // 	});
    // });
});
