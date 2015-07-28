'''
Date: 7/27/2015

I'm trying to implement the database class 
that has similar methods to the actual database, 
such as create, drop, insert, select, join.

'''
class db ():
    
    def __init__(self, name):
        self.name =name
        self.db_tables = {}

    def create(self, table_name, *rows):
        self.db_tables[table_name] = list(rows)

    def drop(self, *tables):
        for t in tables:
            del self.db_tables[t]

    def show_db(self):
        print(self.db_tables)

    def show(self, table):
        print(self.db_tables[table])

    def insert(self, table, *rows):
        try:
            self.db_tables[table] += list(rows)
        except KeyError:
            print("The table does not exist")

    def select(self, table, pred):
        return (row for row in self.db_tables[table] if pred(row))

    def project(self, table, *columns):
        return ({ c: r[c] for c in columns if c in r} for r in self.db_tables[table])

    def cross_join(self, table1, table2):
        return (dict(x, **y) for x in self.db_tables[table1] for y in self.db_tables[table2])

    def theta_join(self, table1, table2, pred):
        return (dict(x, **y) for x in self.db_tables[table1] for y in self.db_tables[table2] if pred(x, y))

    def natural_join(self, table1, table2):
        return theta_join(table1, table2, match)

    def match(x, y):
        for x_keys in x:
            for y_keys in y:
                if x_keys == y_keys and x[x_keys] != y[y_keys]:
                    return False
        return True


def test():

    x = db("test2db")
    x.create( "Students", {'s_name':'lala','gpa':2.1},{'s_name':'Joe','gpa':3.1})
    x.create( "Teachers", {'t_name':'Sarah','rating':5},{'t_name':'Doraemon','rating':3.1})
    x.create( "Parents", {'p_name':'titan','student':"child"},{'p_name':'mommy','student':"Joe"})

    #x.show_db()
    x.drop("Teachers")
    #x.show_db()
    x.insert("Students", {'name':'newPeople','gpa':3.4})
    #x.show("Students")
    y = x.select("Students", lambda x: x["gpa"] > 3)
    #print("Select:" ,list(y))
    y = x.project("Students", "gpa")
    #print("Project:", list(y))
    y = x.cross_join("Students", "Parents")
    #print("cross_join:", list(y))
    y = x.theta_join("Students", "Parents", lambda a,b: a["s_name"] == b["student"])
    #print("theta_join:", list(y))

if __name__ == "__main__":
    test()
