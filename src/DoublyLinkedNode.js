/**
 * Creates an instance of DoublyLinkedNode.
 *
 * @constructor
 * @this {DoublyLinkedNode}
 * @author Onur Yaman <onuryaman@gmail.com>
 * @version 0.1
 */
function DoublyLinkedNode (nodeData) {
    // a reference to the previous node
    previousNode = null;
    
    // a reference to the next node
    nextNode = null;
    
    // data or reference to data
    data = nodeData;
}

/**
 * Returns the next node that comes after the current node in the linked list.
 *
 * @this {DoublyLinkedNode}
 * @return {DoublyLinkedNode} Next node of the linked list.
 */
DoublyLinkedNode.prototype.getNextNode = function() {
    return this.nextNode;
}

/**
 * Returns the previous node that comes before the current node in the linked list.
 *
 * @this {DoublyLinkedNode}
 * @return {DoublyLinkedNode} Previous node of the linked list.
 */
DoublyLinkedNode.prototype.getPreviousNode = function() {
    return this.previousNode;
}

/**
 * Sets the next node that comes after the current node in the linked list.
 *
 * @this {DoublyLinkedNode}
 * @param {DoublyLinkedNode} node The node that is the next node of the current node.
 * @return {DoublyLinkedNode} Current node.
 */
DoublyLinkedNode.prototype.setNextNode = function(node) {
    this.nextNode = node;

    return this;
}

/**
 * Sets the previous node that comes before the current node in the linked list.
 *
 * @this {DoublyLinkedNode}
 * @param {DoublyLinkedNode} node The node that is the previous node of the current node.
 * @return {DoublyLinkedNode} Current node.
 */
DoublyLinkedNode.prototype.setPreviousNode = function(node) {
    this.previousNode = node;

    return this;
}
