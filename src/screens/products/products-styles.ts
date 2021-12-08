import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  header: {
    marginTop: '6rem',
    marginBottom: '3rem',
    fontSize: '20px'
  },
  cartButton: {
    height: 50,
    fontSize: '20px !important',
    marginBottom: '2rem !important'
  },
  productsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  loaderContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  loader: {
    width: '30vw'
  }
});

export default useStyles;
