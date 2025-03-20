class SimpleStack:
    """Summary, Intent: This class implements a basic stack using a list for storage."""
    
    def __init__(self):
        """Usage, KeyImplementationPoints: Initializes an empty stack using a Python list."""
        self.elements = []

    def push(self, item):
        """Usage, Example, KeyImplementationPoints: Push an item onto the stack.
        
        Example:
            stack = SimpleStack()
            stack.push(5)
        """
        self.elements.append(item)

    def pop(self):
        """Usage, KeyMessages, Summary: Removes and returns the top element following LIFO.
        
        Raises:
            IndexError: If stack is empty.
        """
        if self.is_empty():
            raise IndexError("pop from an empty stack")
        return self.elements.pop()

    def peek(self):
        """Usage, KeyMessages, Intent: Returns the top element without removing it."""
        return self.elements[-1] if not self.is_empty() else None

    def is_empty(self):
        """KeyImplementationPoints, DevelopmentNotes: Checks if stack is empty."""
        return len(self.elements) == 0

    def size(self):
        """Usage, KeyImplementationPoints, Summary: Returns the number of elements in stack."""
        return len(self.elements)

    def print_stack(self):
        """Example, DevelopmentNotes, KeyMessages: Prints all elements in stack."""
        print("Stack contents:", self.elements)
