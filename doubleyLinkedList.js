var doublelyLinkedList = function(){
    var list = {};
    list.head = null;
    list.tail = null;


    list.addToTail = function(value){
        var newNode = Node(value)
        if(list.head === null){
            list.head = newNode;
            list.tail = newNode;
        } else {
            list.tail.next = newNode;
            list.tail = newNode;
        }
    }

    list.addToHead = function(value){
        var newNode = Node(value)
        if(list.head === null){
            list.head = newNode;
            list.tail = newNode;
        } else {
            list.head.prev = newNode;
            list.head.prev.next = list.head
            list.head = newNode;
        }
    }

    list.findNode = function(target){
        var current = list.head;
        while(current !== undefined){
            if(current.value === target){
                return current;
            } else{
                current = current.next;
            }
        }
        return false;
    }

    //Does not work if node is connected to Head or Tail yet.
    //TODO: Make it work for if Connected to Head or Tail
    list.addToTargetNext = function(target, value){
        var nodeGot = list.findNode(target);
        var newNode = Node(value)
        nodeGot.next.prev = newNode;
        newNode.next = nodeGot.next;
        newNode.prev = nodeGot;
        nodeGot.next = newNode;

    }

    list.contains = function(target) {

    };

    list.removeHead = function(value) {

    };

    list.removeTail = function(value) {

    };

    list.removeAny = function(target) {

    };

    return list
}

var Node = function(value){
    var node = {};
    node.value = value;
    node.next = null;
    node.prev = null

    return node;
}