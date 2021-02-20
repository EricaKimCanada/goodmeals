import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
  },
  divDivider: {
    backgroundColor: "teal",
    textAlign: "center",
    color: "#ffffff",
    paddingTop: "1%",
    paddingBottom: "1%",
    marginTop: "3%",
    marginBottom: "4%",
  },
}));

export default function Faq() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: "url(/images/marbleimg.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "5%",
        paddingBottom: "4%",
        marginTop: "-2%",
        height: "100%",
      }}
    >
      <div class="col-xs-12" className={classes.divDivider}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={classes.root} style={{ width: "70%", marginLeft: "15%" }}>
        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              backgroundColor: "cadetblue",
              color: "black",
            }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              How much is shipping?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Shipping costs vary from $7.95 and up, depending on your delivery
              area. The larger your order, the cheaper the shipping!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Where do you deliver?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              We're proud to service all of London and surrounding areas.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              How are meals shipped?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Your meals are precious, and we treat them like it too! All
              packages containing meals are shipped in well-insulated boxes with
              corrugated liners, multiple long-lasting ice packs and
              eco-friendly packaged air to keep your meals secure and cool. If
              you decide to add more meals for any order or would like to grab a
              handful of samples too, we'll make the decision to add a second
              box to avoid overpacking too.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Can I contact my delivery driver?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              We rely on a network of logistics partners who each have their own
              policies for deliveries. In general, you may choose to provide
              delivery drivers with access/lockbox codes, keys, or other means
              of entry into your residence or delivery location at your own
              risk. Though we're more than happy to help facilitate any such
              request, we do not solicit or promote such actions. If you are not
              home to receive your delivery, the delivery driver may leave the
              package in a safe spot at the address you provide. If the driver
              does not feel there is a safe spot to leave your package, they
              make another delivery attempt. Simply put, we're not responsible
              for loss or damages that may be incurred as a result of providing
              specific delivery instructions or you not being present during
              delivery. You can leave special delivery notes in the Notes
              section during checkout.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              What if I'm not home when you deliver my meals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Not a problem! Your meals are delivered in refrigerated,
              temperature-controlled packaging -- capable of withstanding the
              hot summer heat for up to 36 hours -- so they're fresh and ready
              to be placed in the fridge as soon as you're home.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Does my meal plan automatically renew?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Yes. Unless you cancel or "skip a week" before our weekly
              deadline, your meal plan will continue to renew every week. Our
              weekly deadline for cancellation, skipping orders, or meal
              selection changes is Friday at 11:59pm EST.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Can I change my meals each week?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Absolutely! You can change your meal selection each week, as long
              as your edits are in before our weekly deadline, which is every
              Friday at 11:59pm EST. If your meal selections are not changed by
              the Friday deadline, the previous meal selection will be submitted
              upon your meal plan's weekly renewal. Please note: If you choose
              your meal selection weeks in advance, and one of your selections
              is no longer on the menu at the time fo your order, a comparable
              meal will be provided in its place.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Am I tied to a long-term subscription?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Not at all! You can give one of our personal or family meal plans
              a try for as little as one week. Skip a week or cancel your plan
              at any time before your next renewal date.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              Does my gift card expire?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              Any gift card purchased in our store does not expire. However, if
              your gift card was given as part of a promotion from eFresh Meals
              it is subject to an expiration date.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion style={{ marginTop: "2%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel2a-header"
            style={{ backgroundColor: "cadetblue", color: "white" }}
          >
            <Typography
              className={classes.heading}
              style={{ color: "black", fontWeight: "bold" }}
            >
              How are Gift Cards delivered?
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ backgroundColor: "gainsboro" }}>
            <Typography>
              During checkout, there will be a place to input an email address.
              Whichever email is inputted will receive both the order
              confirmation and the gift card details. We recommend inputting the
              purchaser's email to allow the confirmation and gift card details
              to both be sent to the purchaser. The gift card details can then
              be forwarded to the recipient once received via email. (A personal
              message can also be included with the forwarded details!)
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
