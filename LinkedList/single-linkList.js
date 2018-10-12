function LinkList(){
   this.head=null;
   this.length = 0;
  function Node(element){
  		this.element=element;
      this.next=null;
  }
  
  this.getLength=function(){
  	return this.length;
  }
  
  this.add=function(element){
  	var newNode=new Node(element);
    if(!this.head){
    		this.head=newNode;
    }
    else{
    var currentNode=this.head;
    	while(currentNode.next!=null){
      	currentNode=currentNode.next;
      }
      currentNode.next=newNode;
    }
    this.length++;
  }
  
  this.traverse=function(){
  	if(!this.isEmpty()){
    	 var currentNode=this.head;
     	var prevNode=null;
    	while(currentNode!=null){
      	prevNode=currentNode;
        console.log(prevNode.element);
      	currentNode=currentNode.next;
      }
    }
  }
  
  this.delete=function(element){
  	var current=this.head;
    var prev=null;
    if(current.element==element)
    	this.head=current.next;
      else{
      	while(current.element!=element){
        	prev=current;
          current=current.next;
        }
        prev.next=current.next;
      }
      this.length--;
  }
  
  this.isEmpty = function() {
    return this.length === 0;
  };
  
  this.indexOf = function(element) {
    var currentNode = this.head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };
  
  this.elementAt=function(index){
  	var curr=this.head;
    ind=1;
    if(this.length >= index){
    	 while(curr!=null && ind < index){
    		ind++;
    		curr=curr.next;
    	}
      return curr.element;
    }
    else{
    return 'no such index present';
    }
  }
  
  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
  
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }
  
  //Bring the last node tp oint the first node
  this.bringLastToFront=function(){
  	if(!this.isEmpty() && this.length > 1){
  		var current=this.head;
    	var prev = null;
      while(current.next!=null){
        prev=current;
        current=current.next;
      }
      prev.next=null;
      current.next=this.head;
      this.head=current;
  	}
    else{
   		console.log('Doesnot have many nodes to do this operation.')
    }
  }
  
  this.reverse=function(){
  	var curr=this.head;
    var prev=null;
    var next=null;
    while(curr!=null){
    	next=curr.next;
      curr.next=prev;
      prev = curr;
      curr=next;
    }
    this.head=prev;
  }
}





var link= new LinkList();
link.add(1);
link.add(2);
link.add(3);
link.add(4);

link.traverse();
link.reverse();
link.traverse();
