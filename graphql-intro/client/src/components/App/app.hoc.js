import { compose, withState } from 'recompose';

const withSearch = compose(
  withState('search', 'setSearch', 'easynvest')
);

const enhancer = compose(
  withSearch
);

export default enhancer;
