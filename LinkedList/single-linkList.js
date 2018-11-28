class Node{
	constructor(value){
  	this.value=value;
  	this.next=null;
  }
}

class singleLinkList{

	constructor(data){
  	this.head=null;
    this.length=0;
    this.tail=null;
  }
  //Adding to the end of the linklist.
  push(data){
  	let newNode= new Node(data); 
  	if(!this.head){
    	this.head=newNode;
      this.tail=this.head;
    }
    else{
      this.tail.next=newNode;
      this.tail=newNode;
    }
    this.length++;
    return this;
  } 
  
  //Removing from the end of the linklist.
  pop(){
  		let curr=this.head;
      let prev=null;
      if(!this.head){
      	console.error('Not a valid operation');
        return '';
      }
      
      while(curr.next){
      	prev=curr;
      	curr=curr.next;
      }
      if(this.head==this.tail){
      	this.tail=null;
        this.head=null;
      }
      else{
      	prev.next=null;
      	this.tail=prev;
      	curr=null;
      }
      this.length--;
      return this.length;
  }
  
  //Removing from the head end
  shift(){
  	if(!this.head)
    return undefined
    if(this.length==1){
      	this.tail=null;
        this.head=null;
      }
      else{
      	let curr=this.head;
      	curr=curr.next;
      	this.head=curr;
      }
      this.length--;
      return this;
  }
  
  //Adding from the head end
  unshift(val){
  	let newnode= new Node(val);
  	if(!this.head){
    	this.head=newnode;
    	this.tail=this.head;
    }
    newnode.next=this.head;
    this.head=newnode
    this.length++;
    return this;
  }
 
 	//Retriving a node by its position in the linklist
  get(index){
  	if(!this.head || this.length < index || !index)
    	return 'Not a valid operation';
      let counter=0;
      let curr=this.head;
     while(curr.next && (counter < index)){
      	curr=curr.next;
        counter++;
     }
     return curr;
  }
  
  //Setting the value of a node at a specific position
  set(index,value){
  	if(!this.head || this.length < index || !index)
    	return 'Not a valid operation';
      let counter=0;
      let curr=this.head;
     while(curr.next && (counter < index)){
      	curr=curr.next;
        counter++;
     }
     curr.value=value;
     return curr;
  }
  
  //inserting new node in a specific position
  insert(index,value){
  	if((index < 0) || (index >this.length))
    	return false;
    if(index==0)
    	return this.unshift(value);
     if(index==this.length)
     return this.push(value);
    	let counter=1;
      let curr=this.head;
      let prev=null;
      while(curr.next && counter < index){
      	prev=curr;
        curr=curr.next;
        counter++;
      }
      let newNode= new Node(value);
      prev.next=newNode;
      newNode.next=curr;
      this.length++;
      return this;
  }
  
  remove(index){
  if((index < 0) || (index >this.length))
    	return false;
  if(index==0)
    	return this.shift();
  if(index==this.length)
     return this.pop();
    let counter=1;
    let curr=this.head;
    let prev=null;
  while(curr.next && counter < index){
      	prev=curr;
        curr=curr.next;
        counter++;
      }
      prev.next=curr.next;
      this.length--;
      return this;
  }
  
  reverse(){
   let node=this.head;
     this.head=this.tail;
     this.tail=node;
     let prev=null;
     let curr=this.tail;
     let currNext=this.tail.next;
     while(curr.next){
     	curr.next=prev;
      prev=curr;
      curr=currNext;
      currNext=currNext.next;
     }
     curr.next=prev;
     return this;
  }
  
}
