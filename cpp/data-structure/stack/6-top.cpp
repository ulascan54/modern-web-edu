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

public:
    Stack() : root(NULL){};
    StackNode *begin() const
    {
        return root;
    };
    StackNode *end() const
    {
        return NULL;
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
    }
    int top() const
    {
        if (isEmpty())
        {
            throw runtime_error("error");
        }

        return begin()->data;
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
    s.display();
    s.pop();
    s.display();
    cout << s.top() << endl;
    return 0;
}
