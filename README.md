# RESTful API

'''json
let users=[
    {
        'id':1,
        "name":ram
    }
]
'''
|Routes                |        Request method              |         Description       |
|------------          |        --------------              |         -----------       |
|/user                 |        POST                        |         Create a new user |
|/user                 |        GET                         |         Get all users     |
|/user/:id             |        PUT/PATCH                   |         Update user by given unique ID |
|/user/:id             |        GET                         |         Get user by given unique ID |
|/user/:id             |        DELETE                      |         Delete user by given unique ID |