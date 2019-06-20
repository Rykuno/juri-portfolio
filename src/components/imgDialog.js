import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import blue from "@material-ui/core/colors/blue"
import Img from "gatsby-image"

const info = {
  "daily1.png": {
    title: "Mobile Design",
    info: "A lead generating form for a bridal shower planning company",
  },
  "daily2.png": {
    title: "Mobile Design",
    info: "A petstore checkout UI for mobile devices",
  },
  "daily3.png": {
    title: "Mobile Design",
    info: "A settings page portraying a light and dark interface",
  },
  "daily4.png": {
    title: "Mobile Design",
    info: "A storefront interface for a mobile application",
  },
  "Organica-tea.png": {
    title: "Mobile Design",
    info: "A storefront interface for a mobile application",
  },
  "dailyUI0005.png": {
    info: "Khaki themed application icons",
  },
  "day18.png": {
    info: "Poster challenge #18",
  },
  "day22.png": {
    info: "Poster challenge #22",
  },
  "day24.png": {
    info: "Poster challenge #24",
  },
  "day25.png": {
    info: "Poster challenge #25",
  },
  "day27.png": {
    info: "Poster challenge #27",
  },
  "day30.png": {
    info: "Poster challenge #30",
  },
  "day33.png": {
    info: "Poster challenge #33",
  },
  "day34.png": {
    info: "Poster challenge #34",
  },
  "team-avyxia.png": {
    info: "A vector illustration of team Avyxia",
  },
  "123-1.png": {
    info: "A landing page for a warehouse management software",
  },
  "avyxia-tribal.png": {
    info: "A hero area concept for Avyxia",
  },
  "DailyUI003.png": {
    info: "A landing page for an investment software",
  },
  "DailyUI006.png": {
    info: "A social media interface for epicures",
  },
  "dailyUI008.png": {
    info: "A 404 page for an online flower boutique",
  },
  "Fume-Academy-UI.png": {
    info: "A landing page for an art academy",
  },
  "home-ctd-cpt-2.png": {
    info: "A landing page concept for a warehouse management software",
  },
  "korean-k9-concept.png": {
    info: "UI for a dog adoption and rescue agency",
  },
  "login-cdt-cpt-2.png": {
    info: "A log in page concept for a warehouse management software",
  },
  "over-the-moon-adoption-mock.png": {
    info: "A Ui for a dog adoption and foster company",
  },
  "wolf-consulting-mock.png": {
    info: "A landing page for a consultation company",
  },
}

const emails = ["username@gmail.com", "user02@gmail.com"]
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    // backgroundColor: "transparent",
  },
  paper: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden",
  },
})

function SimpleDialog(props) {
  const classes = useStyles()
  const { onClose, selectedValue, ...other } = props

  function handleClose() {
    onClose(selectedValue)
  }

  const getInfo = () => {
    const { file } = props
    if (!file || file === undefined) {
      return <></>
    }

    if (!info[file]) {
      return <></>
    }
    return (
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          margin: "auto",
          padding: 20,
          marginTop: 20,
        }}
      >
        <h4 style={{ textAlign: "center", margin: "auto" }}>
          {info[file].info}
        </h4>
      </div>
    )
  }

  return (
    <div
      style={{
        maxHeight: "60%",
        maxWidth: "60%",
        position: "relative",
      }}
    >
      <Dialog
        onClose={handleClose}
        fullWidth
        style={{ backgroundColor: "transparent" }}
        aria-labelledby="simple-dialog-title"
        BackdropProps={{
          classes: {
            root: classes.root,
          },
        }}
        PaperProps={{
          classes: {
            root: classes.paper,
          },
        }}
        {...other}
      >
        <Img fluid={props.image} />

        {getInfo()}
      </Dialog>
    </div>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.string,
}

export default SimpleDialog
