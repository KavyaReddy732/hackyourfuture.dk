import SocialIcons from './social-icons/social-icon'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

// Styling
const useStyles = makeStyles(theme => ({
  callToAction:{
    backgroundColor:"#fff",
    padding: "10px",
  },
  callToActionContainer: {
    backgroundColor:"#efefef",
    margin: "10px",
    padding: "20px",
    minHeight: "220px"
  },
  callToActionLabel: {
    margin: "0 0 20px 0",
    border: "1px solid #ccc",
    display: "inline-block",
    padding: "0 10px",
    fontWeight: 300,
    color: "#666",
  },
  callToActionDescription: {
    fontSize: "1rem",
    fontFamily: '"Space Mono", monospace',
    lineHeight: "1.5rem",
  },
  footer: {
    backgroundColor: '#293a7d',
    paddingTop: '5px'
  },
  info: {
    fontSize: '0.8rem',
    color: '#fff',
    margin: '0.5rem 0.4rem'
  },
  link: {
    color: '#fff'
  }
}))

const mockCallToAction = [
  {
    label:"Donate",
    description:"HackYourFuture is a not-for-profit organization and our services are entirely free for the students."
  },
  {
    label:"Volunteer",
    description:"Our teachers and mentors are professional web-developers that take share their knowledge and passion for technology with people who need it the most."
  },
  {
    label:"Partnership",
    description:"We're always happy for more help and smart partnerships."
  },
]

export default () => {
  const classes = useStyles()
  return (
    <>
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='baseline'
      className={classes.callToAction}
    >
      {mockCallToAction.map((cta,i) => (
        <Grid item lg={4} md={4} sm={12}>
          <div className={classes.callToActionContainer}>
            <h2 className={classes.callToActionLabel}>{cta.label}</h2>
            <p className={classes.callToActionDescription}>{cta.description}</p>
          </div>
        </Grid>
      ))}
    </Grid>
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.footer}
    >

      <Grid item lg={8} md={7} sm={12}>
        <Typography align='left' className={classes.info}>
          Foreningen HackYourFuture | CVR: 38533193 |{' '}
          <Link
            className={classes.link}
            rel='noopener'
            href='mailto:cph@hackyourfuture.dk'
            style={{ wordBreak: 'break-word' }}
          >
            cph@hackyourfuture.dk
          </Link>
        </Typography>
      </Grid>
      <Grid item lg={4} md={5} sm={12}>
        <SocialIcons />
      </Grid>
    </Grid>
    </>
  )
}
