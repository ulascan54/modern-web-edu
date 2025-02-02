#include <iostream>
using namespace std;
class StackNode
{
public:
    int data;
    StackNode *next;
    StackNode(const int &data = 0, StackNode *next = NULL) : data(data), next(next){};
};

class Stack
{
    StackNode *root;
    int length;
    void makeEmpty()
    {
        while (!isEmpty())
            pop();
    }

public:
    Stack() : root(NULL), length(0){};
    StackNode *begin() const
    {
        return root;
    };
    StackNode *end() const
    {
        return NULL;
    }
    ~Stack()
    {
        makeEmpty();
    }

    int
    size()
    {
        return length;
    }

    bool isEmpty() const
    {
        // return root == NULL;
        return begin() == end();
    }
    void push(const int &value)
    {
        StackNode *tmp = new StackNode(value, root);
        root = tmp;
        length++;
    }
    void display() const
    {
        if (isEmpty())
            return;
        StackNode *tmp = begin();
        while (tmp != end())
        {
            cout << tmp->data << " ";
            tmp = tmp->next;
        }
        cout << endl;
    }
    void pop()
    {
        if (isEmpty())
            return;
        StackNode *tmp = root;
        root = root->next;
        delete tmp;
        length--;
    }
};

int main()
{
    Stack s;
    cout << s.isEmpty() << endl;
    s.push(10);
    s.push(20);
    s.push(30);

    cout << s.isEmpty() << endl;
    s.makeEmpty();
    cout << s.isEmpty() << endl;
    return 0;
}
