/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

// export {};

interface Book {
  title;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component< Book> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};