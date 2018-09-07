import { compose, lifecycle } from 'recompose';
import { timer, fromEvent } from 'rxjs';
import { debounce } from 'rxjs/operators';

const enhancer = compose(
  lifecycle({
    componentDidMount() {
      this.input$ = fromEvent(
        document.querySelector('input[type=search]'),
        'keyup'
      )
      .pipe(debounce(() => timer(500)))
      .subscribe(event => this.props.setSearch(event.target.value));
    },

    componentWillUnmount() {
      this.input$.unsubscribe();
    }
  })
);

export default enhancer;
