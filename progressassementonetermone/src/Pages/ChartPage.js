import{Card, Col, Container, Row} from "react-bootstrap";
import NavigationBar from "../Components/NavigationBar"
import LineChart from "../Components/LineChart";
import DoughnutChart from "../Components/DougnutChart";
import RadarChart from "../Components/RadarChart";
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
const ChartPage = () => {

  return (
    <Container fluid>
      <NavigationBar />
      <h1>Check your progress</h1>
      <Row xs={1} md={2}>
        <Col className="mt-5">
          <Card style={{ height: "800px" }}>
            <Card.Body
              style={{ height: "600px" }}
              className="d-flex flex-column align-items-center"
            >
              <LineChart
                getData={[1, 5, 10, 15, 20, 30]}
                getLabels={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ]}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-5">
          <Card style={{ height: "800px", width: "700px" }}>
            <Card.Body
              className="d-flex flex-column align-items-center"
            >
              <DoughnutChart
                getData={[1, 5, 10, 15, 20, 30]}
                getLabels={[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ]}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-5">
          <Card style={{ height: "600px", width: "700px" }}>
            <Card.Body
              style={{ height: "500px" }}
              className="d-flex flex-column align-items-center"
            >
              <Card.Title>Diet per week</Card.Title>
              <RadarChart
                getData={[20, 5, 10, 8, 20]}
                getLabels={[
                  "Vegetables",
                  "Fatty Foods",
                  "Fruit",
                  "Dairy",
                  "Carbs",
                ]}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-5">
          <Card style={{ height: "500px", width: "600px" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>Calories Intake</Card.Title>
              <BarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col s className="mt-5">
          <Card style={{ height: "700px", width: "600px" }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <PieChart
                getData={[1, 5, 10, 15, 20, 30]}
                getLabels={[
                  "Chest",
                  "Face",
                  "Arms",
                  "legs",
                  "Core",
                  "shoulders",
                ]}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChartPage
