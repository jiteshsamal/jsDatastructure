class Queue {
    Constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        this.data.pop();
    }
    size() {
        return this.data.length;
    }
}
