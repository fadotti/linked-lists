# linked-lists

An implementation of the linked list data structure in Javascript via a class, with the following methods available:

- `append(value)` adds a new node containing `value` to the end of the list.
- `prepend(value)` adds a new node containing `value` to the start of the list.
- `size()` returns the total number of nodes in the list.
- `head()` returns the value of the first node in the list. Returns `undefined` if the list is empty.
- `tail()` returns the value of the last node in the list. Returns `undefined` if the list is empty.
- `at(index)` returns the value of the node at the given index, and `undefined` if there is no node at the given index.
- `pop()` removes the head node from the list and returns its value. If used on an empty list, it returns `undefined`.
- `contains(value)` returns true if `value` is in the list, and false otherwise.
- `findIndex(value)` returns the index of the node first node whose value matches `value`, and it returns -1 if `value` is not found in the list.
- `toString()` returns a string representation of the list.
- `insertAt(index, ...values)` inserts new nodes in the list starting at `index` with values taken from `...values`.
- `removeAt(index)` removes the node at the given `index`.
