/**
 * Creates an instance of DoublyLinkedList.
 *
 * @constructor
 * @this {DoublyLinkedList}
 * @author Onur Yaman <onuryaman@gmail.com>
 * @version 0.1
 */
function DoublyLinkedList() {
	// node pointing to the first node of the list
	this.firstNode = null;
	
	// node pointing to the last node of the list
	this.lastNode = null;
	
	// node pointing to the current
	this.currentNode = null;
}

/**
 * Inserts the given node after the specified node.
 *
 * @this {DoublyLinkedList}
 * @param {DoublyLinkedNode} node The node after which the new node will be inserted.
 * @param {DoublyLinkedNode} newNode The node that is to be inserted.
 * @return {DoublyLinkedList} The linked list.
 */
DoublyLinkedList.prototype.insertAfter = function (node, newNode) {
	newNode.setPreviousNode(node);
	newNode.setNextNode(node.getNextNode());
	if (null === node.getNextNode()) {
		this.lastNode = newNode;
	} else {
		node.getNextNode().setPreviousNode(newNode);
	}
	node.setNextNode(newNode);
		
	return this;
}

/**
 * Inserts the given node before the specified node.
 *
 * @this {DoublyLinkedList}
 * @param {DoublyLinkedNode} node The node before which the new node will be inserted.
 * @param {DoublyLinkedNode} newNode The node that is to be inserted.
 * @return {DoublyLinkedList} The linked list.
 */
DoublyLinkedList.prototype.insertBefore = function (node, newNode) {
	newNode.setPreviousNode(node.getPreviousNode());
	newNode.setNextNode(node);
	if (null === node.getPreviousNode()) {
		this.firstNode = newNode;
	} else {
		node.getPreviousNode().setNextNode(newNode);
	}
	node.setPreviousNode(newNode);
	
	return this;
}

/**
 * Inserts the given node to the beginning of the linked list.
 *
 * @this {DoublyLinkedList}
 * @param {DoublyLinkedNode} newNode The node that is to be inserted.
 * @return {DoublyLinkedList} The linked list.
 */
DoublyLinkedList.prototype.prepend = function (newNode) {
	if (null === this.firstNode) {
		this.firstNode = newNode;
		this.lastNode = newNode;
		newNode.setPreviousNode(null);
		newNode.setNextNode(null);
	} else {
		this.insertBefore(this.firstNode, newNode);
	}
	
	return this;
}

/**
 * Inserts the given node to the end of the linked list.
 *
 * @this {DoublyLinkedList}
 * @param {DoublyLinkedNode} newNode The node that is to be inserted.
 * @return {DoublyLinkedList} The linked list.
 */
DoublyLinkedList.prototype.append = function (newNode) {
	if (null === this.lastNode) {
		this.prepend(newNode);
	} else {
		this.insertAfter(this.lastNode, newNode);
	}
	
	return this;
}

/**
 * Removes the given node from the linked list.
 *
 * @this {DoublyLinkedList}
 * @param {DoublyLinkedNode} node The node that is to be deleted.
 * @return {DoublyLinkedList} The linked list.
 */
DoublyLinkedList.prototype.remove = function (node) {
	if (null === node.getPreviousNode()) {
		this.firstNode = node.getNextNode();
	} else {
		node.getPreviousNode().setNextNode(node.getNextNode());
	}
	if (null === node.getNextNode()) {
		this.lastNode = node.getPreviousNode();
	} else {
		node.getNextNode.setPreviousNode(node.getPreviousNode());
	}
	node = null;
	
	return this;
}

/**
 * Calculates and returns the number of nodes found in the linked list.
 *
 * @this {DoublyLinkedList}
 * @return {int} Number of nodes found in the linked list.
 */
DoublyLinkedList.prototype.length = function () {
	var length = 0;
	var node = this.firstNode;
	while (null !== node) {
		length++;
		node = node.getNextNode();
	}
	return length;
}

/**
 * Creates a new node; but does not insert it to the linked list.
 *
 * @this {DoublyLinkedNode}
 * @param {Object} nodeData The contents of the node that is to be created.
 */
DoublyLinkedList.prototype.createNode = function (nodeData) {
	return {
		// a reference to the previous node
		previousNode: null,
		
		// a reference to the next node
		nextNode: null,
		
		// data or reference to data
		data: nodeData,
		
		/**
		 * Returns the next node that comes after the current node in the linked list.
		 *
		 * @this {DoublyLinkedNode}
		 * @return {DoublyLinkedNode} Next node of the linked list.
		 */
		getNextNode: function () {
			return this.nextNode;
		},
		
		/**
		 * Sets the next node that comes after the current node in the linked list.
		 *
		 * @this {DoublyLinkedNode}
		 * @param {DoublyLinkedNode} node The node that is the next node of the current node.
		 * @return {DoublyLinkedNode} Current node.
		 */
		setNextNode: function (node) {
			this.nextNode = node;
			
			return this;
		},
		
		/**
		 * Returns the previous node that comes before the current node in the linked list.
		 *
		 * @this {DoublyLinkedNode}
		 * @return {DoublyLinkedNode} Previous node of the linked list.
		 */
		getPreviousNode: function () {
			return this.previousNode;
		},
		
		/**
		 * Sets the previous node that comes before the current node in the linked list.
		 *
		 * @this {DoublyLinkedNode}
		 * @param {DoublyLinkedNode} node The node that is the previous node of the current node.
		 * @return {DoublyLinkedNode} Current node.
		 */
		setPreviousNode: function (node) {
			this.previousNode = node;
			
			return this;
		}
	};
}