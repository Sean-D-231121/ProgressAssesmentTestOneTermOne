import Container from "react-bootstrap/esm/Container"
import NavigationBar from "../Components/NavigationBar"
import { Col, Button, Card, Row} from "react-bootstrap"
import backgroundDiv from '../Images/Walking.png';
import '../CSS/Home.css'
import { Link } from "react-router-dom";
const Home =()=>{
    return (
      <>
        <NavigationBar />
        <Container fluid>
          <Col xs={12}>
            <div
              className="header "
              style={{ backgroundImage: `url(${backgroundDiv})` }}
            >
              <div className="overlay pt-5 p-5">
                <h1>Welcome to NutriWorkout</h1>
                <p className=" mx-auto w-50 mt-5">
                  Nutriworkout is a dynamic fitness tracker website that
                  revolutionizes the way users approach their health goals. With
                  its intuitive interface and comprehensive tracking features,
                  Nutriworkout enables users to seamlessly monitor their
                  nutrition intake, track workouts, and measure progress over
                  time. Whether users aspire to shed pounds, enhance muscle
                  tone, or boost overall fitness, Nutriworkout serves as a
                  trusted companion on their journey to a healthier lifestyle.
                </p>
                <Link to='/ChartPage'>
                  <Button variant="success">See your progress</Button>
                </Link>
              </div>
            </div>
          </Col>
          <Row xs={1} md={2} className="g-4">
            <Col className="  mt-5">
              <Card>
                <Card.Body>
                  <Card.Title>What makes a healthy body?</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        <strong>Stress Management:</strong> Practice
                        stress-reducing techniques such as deep breathing,
                        meditation, yoga, or engaging in hobbies and activities
                        you enjoy. Prioritize self-care and take time to relax
                        and unwind to reduce the negative impact of stress on
                        your body and mind.
                      </li>
                      <li>
                        <strong>Sufficient Sleep:</strong> Aim for 7-9 hours of
                        quality sleep each night to support overall health and
                        well-being. Establish a regular sleep schedule, create a
                        relaxing bedtime routine, and create a comfortable sleep
                        environment conducive to restful sleep.
                      </li>
                      <li>
                        <strong>Maintain a Healthy Weight:</strong> Aim to
                        achieve and maintain a healthy weight for your body type
                        and height. This involves balancing caloric intake with
                        energy expenditure through diet and exercise to achieve
                        a healthy body composition.
                      </li>
                    </ul>
                  </Card.Text>
                  <a
                    target="_blank"
                    href="https://www.healthdirect.gov.au/creating-healthy-habits"
                  >
                    <Button variant="dark">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="  mt-5">
              <Card>
                <Card.Body>
                  <Card.Title>
                    How to make an effective workout plan?
                  </Card.Title>
                  <Card.Text>
                    <ul>
                      <li>
                        <strong>Set Clear Goals:</strong> Define specific,
                        measurable, achievable, relevant, and time-bound (SMART)
                        goals tailored to your fitness objectives, whether it's
                        weight loss, muscle gain, or improved endurance.
                      </li>
                      <li>
                        <strong>Assess Current Fitness Level:</strong> Evaluate
                        your current fitness level through assessments like
                        strength tests, flexibility tests, and cardiovascular
                        fitness assessments to determine your starting point.
                      </li>
                      <li>
                        <strong>Choose Appropriate Exercises:</strong> Select a
                        variety of exercises that target different muscle groups
                        and incorporate cardiovascular, strength, flexibility,
                        and balance exercises into your plan for a well-rounded
                        routin.
                      </li>
                    </ul>
                  </Card.Text>
                  <a
                    target="_blank"
                    href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/fitness/art-20048269"
                  >
                    <Button variant="dark">Learn more</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}
export default Home