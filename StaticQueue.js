function StaticQueue(size) {
	this.maxSize = size;
	this.size = 0;
	this._first = null;
	this._last = null;

}
module.exports = StaticQueue

StaticQueue.prototype.first = function() {
	return this._first.val;
}

StaticQueue.prototype.last = function() {
	return this._last.val;
}
StaticQueue.createNode = function(val, next) {
	next = null || next
	return {
		val,
		next
	}
}


StaticQueue.prototype.push = function(elm) {
	if(this.size < this.maxSize) {
		if(this._first === null) {
			const node = StaticQueue.createNode(elm, null);
			this._first = this._last = node;
		}
		else {
			const node = StaticQueue.createNode(elm, this._first);
			this._last.next = node;
			this._last = node;
		}
		this.size++;
	}
	else {
		const val = this.pop();
		const node = StaticQueue.createNode(elm, this._first);
		this._last.next = node;
		this._last = node;
		this.size++;
		return val;
	}
}

StaticQueue.prototype.pop = function() {
	if(!this.size) return undefined;
	const val = this._first.val;
	this._first = this._first.next;
	this.size--;
	return val;
}


