
describe('Todo', function() {
    var todo = new Todo("test");
    describe('new', function() {
	it('s text property must be a string', function() {
	    assert.equal(typeof todo.text, "string");
	});
	it('s isChecked property must be a boolean', function() {
	    assert.equal(typeof todo.isChecked, "boolean");
	});
	it('must return false when no argument', function() {
	    assert.equal(todo.isChecked, false);
	});
    });
    describe('#flipCheck()', function() {
		 it('must return fliped isChecked', function() {
		     todo.flipCheck()
		     assert.equal(todo.isChecked, true);
		 });
    });
});
