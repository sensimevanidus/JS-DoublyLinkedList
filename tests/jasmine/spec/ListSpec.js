describe("Playlist", function() {
	// a playlist that will hold various songs.
	var list = new DoublyLinkedList();
	
	// some song objects.
	var song1 = list.createNode({
		id: 1,
		name: "Kyrie Eleison (Der Mönch)",
		artist: "Joachim Witt",
		length: 281 // in seconds
	});
	var song2 = list.createNode({
		id: 2,
		name: "Stabat Mater Dolorosa",
		artist: "Anorexia Nervosa",
		length: 441 // in seconds
	});
	var song3 = list.createNode({
		id: 3,
		name: "The End of Human Race",
		artist: "Dark Funeral",
		length: 280 // in seconds
	});
	var song4 = list.createNode({
		id: 4,
		name: "Anomie",
		artist: "Endstille",
		length: 235 // in seconds
	});
	var song5 = list.createNode({
		id: 5,
		name: "Gateways",
		artist: "Dimmu Borgir",
		length: 306 // in seconds
	});
	
	it("should add the song1 to the list", function() {
		list.append(song1);
		
		expect(list.firstNode.data).toEqual(song1.data);
		expect(list.lastNode.data).toEqual(song1.data);
		expect(list.length()).toEqual(1);
	});
	
	it("should add the song2 to the end of the list", function() {
		list.append(song2);
		
		expect(list.firstNode.data).toEqual(song1.data);
		expect(list.lastNode.data).toEqual(song2.data);
		expect(list.length()).toEqual(2);
	});

	it("should add the song3 to the beginning of the list", function() {
		list.prepend(song3);
		
		expect(list.firstNode.data).toEqual(song3.data);
		expect(list.lastNode.data).toEqual(song2.data);
		expect(list.length()).toEqual(3);
	});
	
	it("should add the song4 as the second node of the list", function() {
		list.insertAfter(list.firstNode, song4);
		
		expect(list.firstNode).toEqual(song4.getPreviousNode());
		expect(list.firstNode.getNextNode()).toEqual(song4);
		expect(list.length()).toEqual(4);
	});
	
	it("should add the song5 as the second node of the list", function() {
		list.insertBefore(song4, song5);
		
		expect(list.firstNode).toEqual(song5.getPreviousNode());
		expect(list.firstNode.getNextNode()).toEqual(song5);
		expect(song4).toEqual(song5.getNextNode());
		expect(song5).toEqual(song4.getPreviousNode());
		expect(list.length()).toEqual(5);
	});
});