const sum = require('./sum.js')
const StaticQueue = require('./StaticQueue.js')

let expect =  require('chai').expect;
const should = require('chai').should()
// describe('#sum()', function() {

// 	context('without arguments', function() {
// 		it('should return 0', function() {
// 			sum().should.equal(0)
// 		});
// 		it('should not throw error', function() {
// 			(function() {
// 				sum().should.not.throw();
// 			})
// 		})
// 	});
// 	context('with one argument', function() {
// 		it('should return argument', function() {
// 			sum(2).should.equal(2);
// 			sum(10000).should.equal(10000);
// 			sum(-10000).should.equal(-10000);
// 		})
// 	});
// 	context('with multiple arguments', function() {
// 		it('should return sum', function() {
// 			sum(1,2,3,4,5).should.equal(15);
// 			sum(10, -10, 23).should.equal(23);
// 		})
// 	})
// });
describe('#StaticQueue()', function() {
	context('When adding elements', function() {
		it('Should add an element to end of a non-full queue', function() {
			let sq = new StaticQueue(3)
			sq.push(1);

			// mixing expect statements with should for practice
			expect(sq.last()).to.equal(1);
			expect(sq.first()).to.equal(1);
			expect(sq.size).to.equal(1);
			
			sq.push(2);
			sq.first().should.equal(1);
			sq.last().should.equal(2);
			sq.size.should.equal(2);

			sq.push(100);
			expect(sq.last()).to.equal(100);
			expect(sq.first()).to.equal(1);
			expect(sq.size).to.equal(3);
		});

		it('Should pop first element and insert new element to end when adding to a full queue', function() {
			let sq = new StaticQueue(3),
				popped,
				originalSize,
				first;
			// fill up queue
			sq.push(1);
			sq.push(2);
			sq.push(3); // queue full size 3
			originalSize = sq.size;
			for(let i=-5; i < 50; i++) {
				first = sq.first();
				popped = sq.push(i);
				expect(popped).to.equal(first);
				expect(sq.last()).to.equal(i);
				expect(originalSize).to.equal(3); // size should still remain 3
			}
		});
	});
	context('When removing elements', function() {
		it('Should remove and return first element when calling pop on non-empty queue', function() {
			let sq = new StaticQueue(3);
			expect(sq.size).to.equal(0); // size should still remain 0

			sq.push(90); // push an elm and assert
			expect(sq.first()).to.equal(90);
			expect(sq.size).to.equal(1);

			popped = sq.pop(); // pop an elm and assert
			expect(popped).to.equal(90);
			expect(sq.size).to.equal(0);

		});
		it('Should return undefined when calling pop on empty queue', function() {
			let sq = new StaticQueue(3);
			let popped = sq.pop();
			expect(popped).to.equal(undefined);

		})
	});
});
