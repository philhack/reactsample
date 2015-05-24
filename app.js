/** @jsx React.DOM */
'use strict';
var Quiz = React.createClass({
    propTypes: {
      books: React.PropTypes.array.isRequired
    },
    render: function() {
        console.log('rendering');
        return <div>
            {this.props.books.map(function(b){
                return <Book title={b} />;
            })}
        </div>;
}});


var Book = React.createClass({
    propTypes:{
        title: React.PropTypes.string.isRequired
    },
   render: function(){
        return <div>
                    <h4>
                        {this.props.title}
                    </h4>
                </div>;
   }
});

var data = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: 'images/authors/josephconrad.png',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: 'images/authors/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: 'images/authors/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining','IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: 'images/authors/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

React.render(<Quiz books={['The Lord of the Rings', 'The Iliad']} />,
    document.getElementById('app'));

